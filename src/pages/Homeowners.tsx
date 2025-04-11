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
import { Users, PlusCircle, Search, User, Mail, Phone } from 'lucide-react';

const Homeowners = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const homeowners = [
    {
      id: '1',
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '(512) 555-1234',
      properties: 2,
    },
    {
      id: '2',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '(512) 555-5678',
      properties: 1,
    },
    {
      id: '3',
      name: 'Robert Davis',
      email: 'robert@example.com',
      phone: '(512) 555-9012',
      properties: 3,
    },
    {
      id: '4',
      name: 'Jessica Brown',
      email: 'jessica@example.com',
      phone: '(512) 555-3456',
      properties: 1,
    },
  ];

  const handleViewHomeowner = (id: string) => {
    navigate(`/homeowners/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Homeowners</h1>
          <p className="text-muted-foreground">Manage homeowners and their properties</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Homeowner
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Homeowners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{homeowners.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {homeowners.reduce((sum, homeowner) => sum + homeowner.properties, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Properties per Homeowner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(homeowners.reduce((sum, homeowner) => sum + homeowner.properties, 0) / homeowners.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search homeowners..." 
          className="pl-10"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Homeowners</CardTitle>
          <CardDescription>
            View and manage your homeowners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact Information</TableHead>
                <TableHead>Properties</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {homeowners.map((homeowner) => (
                <TableRow key={homeowner.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-primary mr-3" />
                      <div className="font-medium">{homeowner.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{homeowner.email}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{homeowner.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{homeowner.properties}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewHomeowner(homeowner.id)}
                    >
                      View
                    </Button>
                    <Button variant="ghost" size="sm">Edit</Button>
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

export default Homeowners;
