
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Home, Search, MapPin, User } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';
import { Input } from '@/components/ui/input';

const Properties = () => {
  // Mock data for demonstration
  const properties = [
    {
      id: '1',
      address: '123 Main St',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      homeowner: 'Michael Johnson',
      warrantyStatus: 'active' as const,
      energyGuarantee: true,
    },
    {
      id: '2',
      address: '456 Elm St',
      city: 'Dallas',
      state: 'TX',
      zip: '75201',
      homeowner: 'Jennifer Williams',
      warrantyStatus: 'pending' as const,
      energyGuarantee: true,
    },
    {
      id: '3',
      address: '789 Oak Ave',
      city: 'Houston',
      state: 'TX',
      zip: '77002',
      homeowner: 'Robert Brown',
      warrantyStatus: 'active' as const,
      energyGuarantee: false,
    },
    {
      id: '4',
      address: '101 Pine Dr',
      city: 'San Antonio',
      state: 'TX',
      zip: '78205',
      homeowner: 'Emily Davis',
      warrantyStatus: 'expired' as const,
      energyGuarantee: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Properties</h1>
          <p className="text-muted-foreground">Manage your properties and homeowners</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search properties by address, homeowner, or status..." 
          className="pl-10"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Homeowner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Warranty Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Energy Guarantee</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-muted/20">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="font-medium">{property.address}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> 
                          {property.city}, {property.state} {property.zip}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{property.homeowner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={property.warrantyStatus} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {property.energyGuarantee ? (
                      <span className="status-badge bg-success/20 text-success">Yes</span>
                    ) : (
                      <span className="status-badge bg-muted-foreground/20 text-muted-foreground">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Properties;
