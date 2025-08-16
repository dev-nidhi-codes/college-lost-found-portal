import { Heart, Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Made By Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-primary p-0.5">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    {/* Placeholder for maker's image - replace src with actual image */}
                    <img 
                      src="/placeholder.svg" 
                      alt="App Creator" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      AC
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Made by</h3>
                <p className="text-muted-foreground">Nidhi Poojary</p>
              </div>
            </div>
            
           <div className="flex space-x-2">
  <a href="https://github.com/dev-nidhi-codes" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="h-8 w-8">
      <Github className="h-4 w-4" />
    </Button>
  </a>

  <a href="nidhi24cs@student.mes.ac.in">
    <Button variant="outline" size="icon" className="h-8 w-8">
      <Mail className="h-4 w-4" />
    </Button>
  </a>

</div>

          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/browse-lost" className="hover:text-primary transition-colors">Lost Items</a></li>
              <li><a href="/browse-found" className="hover:text-primary transition-colors">Found Items</a></li>
              <li><a href="/report-lost" className="hover:text-primary transition-colors">Report Lost</a></li>
              <li><a href="/report-found" className="hover:text-primary transition-colors">Report Found</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An initiative to simplify the process of reporting and recovering lost items, which is useful in everyday spaces like campuses and communities.
            </p>
            
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;