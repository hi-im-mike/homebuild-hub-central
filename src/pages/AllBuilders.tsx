import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building, PlusCircle, Search, ArrowRight } from 'lucide-react';

const AllBuilders = () => {
  const navigate = useNavigate();
  
  // Mock data for builders
  const builders = [
    { 
      id: '1', 
      name: 'ABC Builders', 
      address: '123 Construction Ave, Austin, TX', 
      contactName: 'John Smith',
      contactEmail: 'john@abcbuilders.com',
      properties: 24, 
      active: true 
    },
    { 
      id: '2', 
      name: 'XYZ Construction', 
      address: '456 Builder St, Dallas, TX', 
      contactName: 'Sarah Johnson',
      contactEmail: 'sarah@xyzconstruction.com',
      properties: 36, 
      active: true 
    },
    { 
      id: '3', 
      name: 'Homestead Developers', 
      address: '789 Housing Blvd, Houston, TX', 
      contactName: 'Mike Williams',
      contactEmail: 'mike@homestead.com',
      properties: 18, 
      active: true 
    },
    { 
      id: '4', 
      name: 'Elite Custom Homes', 
      address: '321 Premium Lane, San Antonio, TX', 
      contactName: 'Jessica Brown',
      contactEmail: 'jessica@elitecustom.com',
      properties: 15, 
      active: false 
    },
  ];

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">All Builders</h1>
          <p className="text-muted-foreground">Manage all builder accounts</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Builder
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Builders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{builders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Builders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {builders.filter(builder => builder.active).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {builders.reduce((sum, builder) => sum + builder.properties, 0)}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search builders..." 
          className="pl-10"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Builder Accounts</CardTitle>
          <CardDescription>
            View and manage all builder accounts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Builder</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Properties</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {builders.map((builder) => (
                <TableRow key={builder.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{builder.name}</div>
                      <div className="text-sm text-muted-foreground">{builder.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{builder.contactName}</div>
                      <div className="text-sm text-muted-foreground">{builder.contactEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>{builder.properties}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      builder.active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                    }`}>
                      {builder.active ? 'Active' : 'Inactive'}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/builder-details/${builder.id}`)}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AllBuilders;
