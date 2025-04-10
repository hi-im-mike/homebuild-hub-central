
import React, { useState } from 'react';
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
import { Shield, PlusCircle, Search } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';

const WarrantyApplications = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const applications = [
    {
      id: '1',
      propertyName: 'Oakwood Residence',
      address: '123 Main St, Austin, TX 78701',
      homeowner: 'Michael Johnson',
      dateSubmitted: 'Apr 5, 2025',
      status: 'incomplete' as const,
    },
    {
      id: '2',
      propertyName: 'The Pines',
      address: '456 Oak Drive, Austin, TX 78704',
      homeowner: 'Sarah Williams',
      dateSubmitted: 'Apr 2, 2025',
      status: 'incomplete' as const,
    },
    {
      id: '3',
      propertyName: 'Riverside Condo',
      address: '789 River Bend, Austin, TX 78730',
      homeowner: 'Robert Davis',
      dateSubmitted: 'Mar 28, 2025',
      status: 'completed' as const,
    },
  ];

  // Sort applications - incomplete first
  const sortedApplications = [...applications].sort((a, b) => {
    if (a.status === 'incomplete' && b.status !== 'incomplete') return -1;
    if (a.status !== 'incomplete' && b.status === 'incomplete') return 1;
    return 0;
  });

  const handleViewApplication = (id: string) => {
    // Navigate to property details with warranty tab active
    navigate(`/properties/${id}?tab=warranty`);
  };

  const handleEditApplication = (id: string) => {
    // Navigate to property details with warranty tab active
    navigate(`/properties/${id}?tab=warranty`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Warranty Applications</h1>
          <p className="text-muted-foreground">Manage warranty applications for properties</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Application
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Incomplete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter(app => app.status === 'incomplete').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter(app => app.status === 'completed').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter(app => app.status === 'approved').length}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search applications..." 
          className="pl-10"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Warranty Applications</CardTitle>
          <CardDescription>
            Manage warranty applications for your properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Homeowner</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="font-medium">{application.propertyName}</div>
                        <div className="text-xs text-muted-foreground">{application.address}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{application.homeowner}</TableCell>
                  <TableCell>{application.dateSubmitted}</TableCell>
                  <TableCell>
                    <StatusBadge status={application.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewApplication(application.id)}
                    >
                      View
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditApplication(application.id)}
                    >
                      Edit
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

export default WarrantyApplications;
