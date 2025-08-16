import { Link, useLocation } from "react-router-dom";
import { Search, Plus, Home, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              College Lost & Found
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/browse-lost">
              <Button 
                variant={isActive("/browse-lost") ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>Lost Items</span>
              </Button>
            </Link>
            
            <Link to="/browse-found">
              <Button 
                variant={isActive("/browse-found") ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span>Found Items</span>
              </Button>
            </Link>
            
            <Link to="/report-lost">
              <Button 
                variant="secondary"
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Report Lost</span>
              </Button>
            </Link>
            
            <Link to="/report-found">
              <Button 
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Report Found</span>
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;