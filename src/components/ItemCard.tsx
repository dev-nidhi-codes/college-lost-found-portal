import { Calendar, MapPin, User, Tag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  contactName: string;
  contactEmail: string;
  type: "lost" | "found";
  status: "active" | "resolved";
  image?: string;
}

interface ItemCardProps {
  item: Item;
  onContact?: (item: Item) => void;
  onMarkClaimed?: (item: Item) => void;
}

const ItemCard = ({ item, onContact, onMarkClaimed }: ItemCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      electronics: "bg-blue-100 text-blue-800",
      clothing: "bg-purple-100 text-purple-800",
      books: "bg-green-100 text-green-800",
      accessories: "bg-yellow-100 text-yellow-800",
      keys: "bg-red-100 text-red-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[category.toLowerCase()] || colors.other;
  };

  return (
    <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
          <Badge 
            variant={item.type === "lost" ? "destructive" : "default"}
            className="ml-2 shrink-0"
          >
            {item.type === "lost" ? "Lost" : "Found"}
          </Badge>
        </div>
        <Badge 
          className={`w-fit ${getCategoryColor(item.category)}`}
          variant="secondary"
        >
          <Tag className="h-3 w-3 mr-1" />
          {item.category}
        </Badge>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {item.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 shrink-0" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <User className="h-4 w-4 mr-2 shrink-0" />
            <span className="truncate">{item.contactName}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button 
            className="flex-1"
            onClick={() => onContact?.(item)}
          >
            Contact {item.type === "lost" ? "Owner" : "Finder"}
          </Button>
          
          {item.type === "found" && item.status === "active" && onMarkClaimed && (
            <Button 
              variant="outline"
              size="icon"
              onClick={() => onMarkClaimed(item)}
              className="shrink-0"
              title="Mark as claimed"
            >
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;