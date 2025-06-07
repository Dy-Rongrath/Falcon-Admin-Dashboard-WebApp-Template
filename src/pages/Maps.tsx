import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Navigation,
  Search,
  Filter,
  Layers,
  Maximize,
  Minimize,
  RotateCcw,
  Plus,
  Minus,
  Compass,
  Route,
  Car,
  Bike,
  User,
  Building,
  Coffee,
  Fuel,
  Hospital,
  School,
  ShoppingBag,
  Utensils,
  Globe,
  Satellite,
  Map as MapIcon,
  Target,
  Settings,
  Download,
} from "lucide-react";

interface Location {
  id: string;
  name: string;
  type: "office" | "store" | "restaurant" | "hotel" | "hospital" | "school";
  address: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  distance: string;
  isOpen: boolean;
  phone?: string;
  website?: string;
}

interface MapLayer {
  id: string;
  name: string;
  type: "traffic" | "satellite" | "terrain" | "transit";
  enabled: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const mockLocations: Location[] = [
  {
    id: "1",
    name: "Central Office",
    type: "office",
    address: "123 Business District, San Francisco, CA",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    rating: 4.8,
    distance: "0.2 mi",
    isOpen: true,
    phone: "(555) 123-4567",
    website: "company.com",
  },
  {
    id: "2",
    name: "Tech Store Downtown",
    type: "store",
    address: "456 Market Street, San Francisco, CA",
    coordinates: { lat: 37.7849, lng: -122.4094 },
    rating: 4.5,
    distance: "0.8 mi",
    isOpen: true,
    phone: "(555) 234-5678",
  },
  {
    id: "3",
    name: "The Gourmet Corner",
    type: "restaurant",
    address: "789 Food Avenue, San Francisco, CA",
    coordinates: { lat: 37.7649, lng: -122.4294 },
    rating: 4.7,
    distance: "1.2 mi",
    isOpen: false,
    phone: "(555) 345-6789",
  },
  {
    id: "4",
    name: "City Hospital",
    type: "hospital",
    address: "321 Health Boulevard, San Francisco, CA",
    coordinates: { lat: 37.7549, lng: -122.4394 },
    rating: 4.2,
    distance: "2.1 mi",
    isOpen: true,
    phone: "(555) 456-7890",
  },
  {
    id: "5",
    name: "Innovation Academy",
    type: "school",
    address: "654 Education Lane, San Francisco, CA",
    coordinates: { lat: 37.7949, lng: -122.3994 },
    rating: 4.9,
    distance: "1.8 mi",
    isOpen: true,
    phone: "(555) 567-8901",
    website: "academy.edu",
  },
];

const mapLayers: MapLayer[] = [
  { id: "traffic", name: "Traffic", type: "traffic", enabled: true, icon: Car },
  {
    id: "satellite",
    name: "Satellite",
    type: "satellite",
    enabled: false,
    icon: Satellite,
  },
  {
    id: "terrain",
    name: "Terrain",
    type: "terrain",
    enabled: false,
    icon: MapIcon,
  },
  {
    id: "transit",
    name: "Transit",
    type: "transit",
    enabled: false,
    icon: Route,
  },
];

const getLocationIcon = (type: string) => {
  switch (type) {
    case "office":
      return Building;
    case "store":
      return ShoppingBag;
    case "restaurant":
      return Utensils;
    case "hotel":
      return Building;
    case "hospital":
      return Hospital;
    case "school":
      return School;
    default:
      return MapPin;
  }
};

const getLocationColor = (type: string) => {
  switch (type) {
    case "office":
      return "text-falcon-blue";
    case "store":
      return "text-falcon-green";
    case "restaurant":
      return "text-falcon-orange";
    case "hotel":
      return "text-purple-600";
    case "hospital":
      return "text-red-600";
    case "school":
      return "text-yellow-600";
    default:
      return "text-falcon-text-dark";
  }
};

const Maps = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [layers, setLayers] = useState<MapLayer[]>(mapLayers);
  const [mapView, setMapView] = useState<"map" | "satellite" | "hybrid">("map");

  const toggleLayer = (layerId: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === layerId ? { ...layer, enabled: !layer.enabled } : layer,
      ),
    );
  };

  const filteredLocations = mockLocations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <MapPin className="h-6 w-6 text-falcon-blue" />
            Interactive Maps
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Explore locations with advanced mapping features
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className="font-poppins">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Locations
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {mockLocations.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Active Pins
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {filteredLocations.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Route className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Routes Planned
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Coverage Area
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  25 sq mi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <div className="space-y-4">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Search className="h-4 w-4" />
                Search Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-falcon-text-light h-4 w-4" />
                <Input
                  placeholder="Search places..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Map Layers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Layers className="h-4 w-4" />
                Map Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {layers.map((layer) => {
                const IconComponent = layer.icon;
                return (
                  <div
                    key={layer.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-falcon-text-light" />
                      <span className="text-sm text-falcon-text-dark">
                        {layer.name}
                      </span>
                    </div>
                    <Button
                      variant={layer.enabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleLayer(layer.id)}
                      className="h-6 text-xs"
                    >
                      {layer.enabled ? "ON" : "OFF"}
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Map View */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <MapIcon className="h-4 w-4" />
                Map View
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["map", "satellite", "hybrid"].map((view) => (
                <Button
                  key={view}
                  variant={mapView === view ? "default" : "outline"}
                  size="sm"
                  onClick={() => setMapView(view as any)}
                  className="w-full justify-start text-xs"
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Navigation className="h-4 w-4" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
              >
                <Target className="h-3 w-3 mr-2" />
                My Location
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
              >
                <Route className="h-3 w-3 mr-2" />
                Get Directions
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
              >
                <Coffee className="h-3 w-3 mr-2" />
                Nearby Places
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
              >
                <Fuel className="h-3 w-3 mr-2" />
                Gas Stations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Map Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardContent className="p-0 h-full relative">
              {/* Map Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="h-16 w-16 mx-auto text-falcon-blue" />
                      <div>
                        <h3 className="text-lg font-semibold text-falcon-text-dark">
                          Interactive Map
                        </h3>
                        <p className="text-sm text-falcon-text-light">
                          Map integration would be implemented here using
                          services like Google Maps, Mapbox, or OpenStreetMap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Control Buttons */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bg-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bg-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bg-white"
                  >
                    <Compass className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bg-white"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>

                {/* Location Pins Overlay */}
                <div className="absolute inset-0">
                  {filteredLocations.map((location, index) => {
                    const IconComponent = getLocationIcon(location.type);
                    return (
                      <div
                        key={location.id}
                        className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${getLocationColor(location.type)}`}
                        style={{
                          left: `${20 + index * 15}%`,
                          top: `${30 + index * 10}%`,
                        }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="relative">
                          <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-current flex items-center justify-center">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          {selectedLocation?.id === location.id && (
                            <div className="absolute -top-2 -left-2 w-12 h-12 bg-current bg-opacity-20 rounded-full animate-ping"></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Location Popup */}
              {selectedLocation && (
                <div className="absolute bottom-4 left-4 right-4">
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-falcon-text-dark">
                              {selectedLocation.name}
                            </h3>
                            <Badge
                              className={`text-xs ${selectedLocation.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {selectedLocation.isOpen ? "Open" : "Closed"}
                            </Badge>
                          </div>
                          <p className="text-sm text-falcon-text-light mb-2">
                            {selectedLocation.address}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-falcon-text-light">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{selectedLocation.distance}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>★ {selectedLocation.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLocation(null)}
                          className="h-6 w-6 p-0"
                        >
                          ×
                        </Button>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="flex-1">
                          <Navigation className="h-3 w-3 mr-1" />
                          Directions
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <User className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Locations List */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                Nearby Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[500px] overflow-y-auto">
                {filteredLocations.map((location) => {
                  const IconComponent = getLocationIcon(location.type);
                  return (
                    <div
                      key={location.id}
                      className={`p-4 border-b border-falcon-border-light cursor-pointer hover:bg-falcon-bg-light transition-colors ${
                        selectedLocation?.id === location.id
                          ? "bg-falcon-blue bg-opacity-5 border-l-4 border-l-falcon-blue"
                          : ""
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${getLocationColor(location.type)} bg-current bg-opacity-10`}
                        >
                          <IconComponent
                            className={`h-4 w-4 ${getLocationColor(location.type)}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-falcon-text-dark text-sm truncate">
                              {location.name}
                            </h4>
                            <Badge
                              className={`text-xs ${location.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {location.isOpen ? "Open" : "Closed"}
                            </Badge>
                          </div>
                          <p className="text-xs text-falcon-text-light mb-2 line-clamp-2">
                            {location.address}
                          </p>
                          <div className="flex items-center justify-between text-xs text-falcon-text-light">
                            <span>★ {location.rating}</span>
                            <span>{location.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Building className="h-4 w-4 text-falcon-blue" />
                  Business Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-falcon-text-dark mb-2">
                  {
                    mockLocations.filter(
                      (l) => l.type === "office" || l.type === "store",
                    ).length
                  }
                </div>
                <p className="text-sm text-falcon-text-light">
                  Active business locations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Utensils className="h-4 w-4 text-falcon-orange" />
                  Restaurants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-falcon-text-dark mb-2">
                  {mockLocations.filter((l) => l.type === "restaurant").length}
                </div>
                <p className="text-sm text-falcon-text-light">
                  Dining options nearby
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Hospital className="h-4 w-4 text-red-600" />
                  Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-falcon-text-dark mb-2">
                  {
                    mockLocations.filter(
                      (l) => l.type === "hospital" || l.type === "school",
                    ).length
                  }
                </div>
                <p className="text-sm text-falcon-text-light">
                  Essential services
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="routes" className="space-y-6">
          <div className="text-center py-12">
            <Route className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
            <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
              Route Planning
            </h3>
            <p className="text-falcon-text-light mb-6">
              Plan optimal routes between multiple locations
            </p>
            <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
              <Navigation className="h-4 w-4 mr-2" />
              Create Route
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="text-center py-12">
            <Target className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
            <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
              Location Analytics
            </h3>
            <p className="text-falcon-text-light mb-6">
              Analyze traffic patterns and location performance
            </p>
            <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
              <Globe className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Maps;
