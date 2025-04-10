
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Shield, 
  Bolt, 
  ShieldCheck, 
  MapPin, 
  User, 
  ArrowLeft,
  Image as ImageIcon
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would normally be fetched from an API
  const property = {
    id: id || '1',
    name: 'Oakwood Residence',
    address: '123 Main St',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    county: 'Travis',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2865&auto=format&fit=crop',
    latitude: 30.2672,
    longitude: -97.7431,
    homeowner: {
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '(512) 555-1234'
    },
    coowner: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(512) 555-5678'
    },
    status: {
      warranty: 'not-enrolled',
      buildersRisk: 'not-enrolled',
      energyGuarantee: 'not-enrolled'
    }
  };

  const handleBackClick = () => {
    navigate('/properties');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={handleBackClick}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{property.name}</h1>
          <p className="text-muted-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {property.address}, {property.city}, {property.state} {property.zip}
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="property" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="property" className="flex items-center">
            <Home className="h-4 w-4 mr-2" />
            Property Details
          </TabsTrigger>
          <TabsTrigger value="builders-risk" className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Builder's Risk
          </TabsTrigger>
          <TabsTrigger value="warranty" className="flex items-center">
            <ShieldCheck className="h-4 w-4 mr-2" />
            Warranty
          </TabsTrigger>
          <TabsTrigger value="energy" className="flex items-center">
            <Bolt className="h-4 w-4 mr-2" />
            Energy Guarantee
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="property" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video rounded-md overflow-hidden bg-muted relative">
                    {property.image ? (
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">No image available</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Address</p>
                      <p>{property.address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">City</p>
                      <p>{property.city}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">State</p>
                      <p>{property.state}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ZIP Code</p>
                      <p>{property.zip}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">County</p>
                      <p>{property.county}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted relative">
                  <iframe
                    title="Property Location"
                    className="absolute inset-0 w-full h-full border-0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDJbCvwZvyRgpuQa-bp_SrCU0G2vYvZU_E&q=${property.latitude},${property.longitude}&zoom=15`}
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Homeowner Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Primary Homeowner</h3>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Name</p>
                        <p>{property.homeowner.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p>{property.homeowner.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                        <p>{property.homeowner.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  {property.coowner && (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium">Co-Owner</h3>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Name</p>
                          <p>{property.coowner.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <p>{property.coowner.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Phone</p>
                          <p>{property.coowner.phone}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="builders-risk" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Builder's Risk Policy</CardTitle>
              <CardDescription>
                Protect your property during construction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-primary mb-2">Why Builder's Risk is Important</h3>
                  <p className="text-muted-foreground">
                    Builder's Risk insurance protects your property during the construction phase, covering potential damages from events like fire, theft, vandalism, and weather incidents. This essential coverage ensures that your investment is protected when it's most vulnerable.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Coverage for property damage during construction</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Protection against theft, vandalism, and weather damage</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Peace of mind throughout the building process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">
                <Shield className="mr-2 h-4 w-4" />
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="warranty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Warranty Coverage</CardTitle>
              <CardDescription>
                Protect your investment with comprehensive warranty coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-primary mb-2">Why Warranty Coverage is Important</h3>
                  <p className="text-muted-foreground">
                    A home warranty provides coverage for repairs and replacements of major home systems and appliances that break down due to normal wear and tear. This protection offers financial security and peace of mind, knowing that unexpected repair costs are covered.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Coverage for major systems and appliances</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Protection against unexpected repair costs</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>24/7 customer support and service requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="energy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Energy Guarantee</CardTitle>
              <CardDescription>
                Ensure your home's energy performance meets expectations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-primary mb-2">Why Energy Guarantee is Important</h3>
                  <p className="text-muted-foreground">
                    Our Energy Guarantee ensures that your home performs as designed for energy efficiency. If your energy costs exceed the guaranteed amount, we'll pay the difference. This program promotes sustainable living while providing financial protection against unexpected energy costs.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Bolt className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Guaranteed maximum energy costs</span>
                    </li>
                    <li className="flex items-start">
                      <Bolt className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Financial protection against energy price increases</span>
                    </li>
                    <li className="flex items-start">
                      <Bolt className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Promotes sustainable and energy-efficient living</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">
                <Bolt className="mr-2 h-4 w-4" />
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyDetails;
