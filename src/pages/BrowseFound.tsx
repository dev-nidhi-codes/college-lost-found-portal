import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ItemCard, { Item } from "@/components/ItemCard";
import { useToast } from "@/hooks/use-toast";
import { getFoundItems, removeFoundItem } from "@/lib/utils";

const BrowseFound = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [foundItems, setFoundItems] = useState<Item[]>([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const loadItems = () => {
      const items = getFoundItems();
      // Transform stored data to match Item interface
      const transformedItems: Item[] = items.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
        location: item.location,
        date: item.date,
        contactName: item.name,
        contactEmail: item.email,
        contactPhone: item.phone,
        type: "found" as const,
        status: item.status || "active"
      }));
      setFoundItems(transformedItems);
    };

    loadItems();
  }, []);

  const categories = ["all", "electronics", "clothing", "books", "accessories", "keys", "other"];

  const filteredItems = foundItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter;
    const matchesLocation = locationFilter === "all" || 
                           item.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleContact = (item: Item) => {
    const contactInfo = item.contactPhone 
      ? `Contact ${item.contactName} at ${item.contactEmail} or ${item.contactPhone}`
      : `Contact ${item.contactName} at ${item.contactEmail}`;
    
    toast({
      title: "Contact Information",
      description: contactInfo,
    });
  };

  const handleMarkClaimed = (item: Item) => {
    // Remove item from localStorage
    removeFoundItem(item.id);
    
    // Update local state
    setFoundItems(prevItems => prevItems.filter(i => i.id !== item.id));
    
    toast({
      title: "Item Marked as Claimed",
      description: `${item.title} has been marked as claimed and removed from listings.`,
    });
  };

  // Get unique locations from actual data for filtering
  const uniqueLocations = ["all", ...new Set(foundItems.map(item => 
    item.location.toLowerCase()
  ))];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Found Items</h1>
          <p className="text-muted-foreground">
            Browse through items that have been found on campus
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg shadow-card mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search found items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} of {foundItems.length} items
          </p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onContact={handleContact}
                onMarkClaimed={handleMarkClaimed}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {foundItems.length === 0 ? "No found items yet" : "No items found"}
            </h3>
            <p className="text-muted-foreground">
              {foundItems.length === 0 
                ? "Found items reported through the app will appear here." 
                : "Try adjusting your search or filters to find what you're looking for."
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseFound;