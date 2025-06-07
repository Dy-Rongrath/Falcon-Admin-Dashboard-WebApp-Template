import React from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Globe,
  Map,
  Layers,
  Search,
  Filter,
} from "lucide-react";

const Maps: React.FC = () => {
  const locations = [
    {
      id: 1,
      name: "San Francisco, CA",
      lat: 37.7749,
      lng: -122.4194,
      type: "office",
    },
    { id: 2, name: "New York, NY", lat: 40.7128, lng: -74.006, type: "office" },
    { id: 3, name: "London, UK", lat: 51.5074, lng: -0.1278, type: "office" },
    {
      id: 4,
      name: "Tokyo, Japan",
      lat: 35.6762,
      lng: 139.6503,
      type: "office",
    },
    {
      id: 5,
      name: "Sydney, Australia",
      lat: -33.8688,
      lng: 151.2093,
      type: "office",
    },
  ];

  const MapPlaceholder: React.FC<{ title: string; description: string }> = ({
    title,
    description,
  }) => (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 text-center h-64 flex flex-col items-center justify-center">
      <Map className="w-16 h-16 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700 text-sm">{description}</p>
      <div className="mt-4 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        Interactive map would be rendered here
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Maps & Geolocation
          </h1>
          <p className="text-gray-600">
            Interactive maps, location services, and geographical data
            visualization
          </p>
        </div>

        {/* Map Integration Notice */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <Globe className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Map Integration
              </h3>
              <p className="text-blue-800 mb-3">
                To use interactive maps in your application, you can integrate
                with popular mapping services:
              </p>
              <ul className="text-blue-700 text-sm space-y-1 ml-4">
                <li>
                  • <strong>Google Maps:</strong> npm install
                  @googlemaps/react-wrapper
                </li>
                <li>
                  • <strong>Mapbox:</strong> npm install mapbox-gl react-map-gl
                </li>
                <li>
                  • <strong>Leaflet:</strong> npm install leaflet react-leaflet
                </li>
                <li>
                  • <strong>OpenStreetMap:</strong> Free alternative using
                  Leaflet
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Basic Map */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Basic Location Map
                </h3>
                <p className="text-sm text-gray-600">
                  Simple map with location markers
                </p>
              </div>
            </div>
            <MapPlaceholder
              title="Interactive Map View"
              description="Shows markers for office locations worldwide"
            />
          </div>

          {/* Heatmap */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Layers className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Data Heatmap
                </h3>
                <p className="text-sm text-gray-600">
                  Density visualization of user activity
                </p>
              </div>
            </div>
            <MapPlaceholder
              title="Heatmap Overlay"
              description="Shows concentration of user activities by region"
            />
          </div>
        </div>

        {/* Location List */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Office Locations
            </h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
              <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900">
                      {location.name}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {location.type}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Lat: {location.lat.toFixed(4)}</p>
                  <p>Lng: {location.lng.toFixed(4)}</p>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 py-2 px-3 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                    View on Map
                  </button>
                  <button className="py-2 px-3 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Route Planning */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Navigation className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Route Planning
                </h3>
                <p className="text-sm text-gray-600">
                  Optimal path between multiple locations
                </p>
              </div>
            </div>
            <MapPlaceholder
              title="Route Optimization"
              description="Shows the most efficient path between destinations"
            />
          </div>

          {/* Geofencing */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Compass className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Geofencing
                </h3>
                <p className="text-sm text-gray-600">
                  Location-based triggers and boundaries
                </p>
              </div>
            </div>
            <MapPlaceholder
              title="Geographic Boundaries"
              description="Virtual perimeters for location-based actions"
            />
          </div>
        </div>

        {/* Map Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Map Controls & Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-900 mb-2">Custom Markers</h4>
              <p className="text-sm text-gray-600">
                Personalized location indicators
              </p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Layers className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-900 mb-2">Layer Control</h4>
              <p className="text-sm text-gray-600">Multiple data overlays</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Navigation className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-900 mb-2">Navigation</h4>
              <p className="text-sm text-gray-600">Turn-by-turn directions</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Search className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-900 mb-2">Search Places</h4>
              <p className="text-sm text-gray-600">
                Find locations and addresses
              </p>
            </div>
          </div>
        </div>

        {/* Integration Examples */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Popular Map Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Google Maps</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Street View integration</li>
                <li>• Places API</li>
                <li>• Real-time traffic</li>
                <li>• Geocoding services</li>
              </ul>
              <div className="bg-gray-100 text-xs font-mono p-2 rounded">
                npm install @googlemaps/react-wrapper
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Mapbox</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Custom map styles</li>
                <li>• 3D visualization</li>
                <li>• Vector tiles</li>
                <li>• Animation support</li>
              </ul>
              <div className="bg-gray-100 text-xs font-mono p-2 rounded">
                npm install mapbox-gl react-map-gl
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Leaflet</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Open source solution</li>
                <li>• Plugin ecosystem</li>
                <li>• Mobile-friendly</li>
                <li>• OpenStreetMap</li>
              </ul>
              <div className="bg-gray-100 text-xs font-mono p-2 rounded">
                npm install leaflet react-leaflet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
