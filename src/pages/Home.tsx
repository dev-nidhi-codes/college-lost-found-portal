import { Link } from "react-router-dom";
import { Search, Plus, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lost Something?
            <br />
            <span className="text-accent">We'll Help You Find It</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our campus lost and found portal connects students to reunite them with their missing belongings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report-lost">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Plus className="mr-2 h-5 w-5" />
                Report Lost Item
              </Button>
            </Link>
            <Link to="/report-found">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                <Plus className="mr-2 h-5 w-5" />
                Report Found Item
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/browse-lost" className="group">
              <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">Browse Lost Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Search through reported lost items to find yours
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/browse-found" className="group">
              <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle className="text-xl">Browse Found Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    See if someone has found your missing item
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/report-lost" className="group">
              <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-warning" />
                  </div>
                  <CardTitle className="text-xl">Report Lost</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Let others know what you've lost
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/report-found" className="group">
              <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Plus className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Report Found</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Help someone by reporting what you found
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;