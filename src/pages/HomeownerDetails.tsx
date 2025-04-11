
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Mail, Phone, Home, ArrowLeft, Save } from 'lucide-react';

const HomeownerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from an API call
  const homeownerData = {
    id: id,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '(512) 555-1234',
    properties: [
      { id: '1', address: '123 Main St, Austin, TX 78701', type: 'Single Family Home' },
      { id: '2', address: '456 Oak Ave, Austin, TX 78704', type: 'Townhouse' }
    ],
    notes: 'Prefers to be contacted via email. Interested in additional warranty coverage for the Oak Ave property.'
  };

  // Set initial state from the homeowner data
  const [homeowner, setHomeowner] = useState(homeownerData);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHomeowner(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save changes to your database here
    
    // Show success toast
    toast({
      title: "Changes saved",
      description: "Homeowner details have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Button 
            variant="ghost" 
            className="mb-2 px-0" 
            onClick={() => navigate('/homeowners')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homeowners
          </Button>
          <h1 className="text-2xl font-bold">{homeowner.name}</h1>
          <p className="text-muted-foreground">Homeowner Details</p>
        </div>
        <Button 
          onClick={handleSubmit}
          className="sm:w-auto w-full"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Contact Information
            </CardTitle>
            <CardDescription>
              Edit homeowner's personal details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name"
                    name="name"
                    value={homeowner.name}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={homeowner.email}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="phone"
                    name="phone"
                    value={homeowner.phone}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">Notes</label>
                <Textarea 
                  id="notes"
                  name="notes"
                  value={homeowner.notes}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Properties
            </CardTitle>
            <CardDescription>
              Properties associated with this homeowner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {homeowner.properties.map(property => (
                <div 
                  key={property.id} 
                  className="p-4 border rounded-md hover:bg-accent/50 transition-colors"
                >
                  <div className="font-medium">{property.address}</div>
                  <div className="text-sm text-muted-foreground">{property.type}</div>
                  <div className="flex justify-end mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/properties/${property.id}`)}
                    >
                      View Property
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => navigate('/properties')}
            >
              Add Property
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomeownerDetails;
