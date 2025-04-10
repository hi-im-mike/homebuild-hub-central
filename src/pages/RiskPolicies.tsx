
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
import { ClipboardList, PlusCircle, Search } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';

const RiskPolicies = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const policies = [
    {
      id: '1',
      propertyName: 'Oakwood Residence',
      address: '123 Main St, Austin, TX 78701',
      builder: 'Acme Construction',
      expiryDate: 'Dec 15, 2025',
      status: 'incomplete' as const,
    },
    {
      id: '2',
      propertyName: 'The Pines',
      address: '456 Oak Drive, Austin, TX 78704',
      builder: 'BuildRight Homes',
      expiryDate: 'Jan 30, 2026',
      status: 'incomplete' as const,
    },
    {
      id: '3',
      propertyName: 'Riverside Condo',
      address: '789 River Bend, Austin, TX 78730',
      builder: 'Prestige Custom Homes',
      expiryDate: 'Nov 10, 2025',
      status: 'completed' as const,
    },
    {
      id: '4',
      propertyName: 'Lakefront Villa',
      address: '101 Lake Shore Dr, Austin, TX 78746',
      builder: 'Elite Builders',
      expiryDate: 'Mar 22, 2026',
      status: 'approved' as const,
    },
  ];

  // Sort policies - incomplete first
  const sortedPolicies = [...policies].sort((a, b) => {
    if (a.status === 'incomplete' && b.status !== 'incomplete') return -1;
    if (a.status !== 'incomplete' && b.status === 'incomplete') return 1;
    return 0;
  });

  const handleViewPolicy = (id: string) => {
    // Navigate to property details with builders-risk tab active
    navigate(`/properties/${id}?tab=builders-risk`);
  };

  const handleEditPolicy = (id: string) => {
    // Navigate to property details with builders-risk tab active
    navigate(`/properties/${id}?tab=builders-risk`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Builder's Risk Policies</h1>
          <p className="text-muted-foreground">Manage builder's risk policies for properties</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Policy
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Incomplete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.filter(policy => policy.status === 'incomplete').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.filter(policy => policy.status === 'completed').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.filter(policy => policy.status === 'approved').length}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search policies..." 
          className="pl-10"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Builder's Risk Policies</CardTitle>
          <CardDescription>
            Manage builder's risk policies for your properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPolicies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <ClipboardList className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="font-medium">{policy.propertyName}</div>
                        <div className="text-xs text-muted-foreground">{policy.address}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{policy.builder}</TableCell>
                  <TableCell>{policy.expiryDate}</TableCell>
                  <TableCell>
                    <StatusBadge status={policy.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewPolicy(policy.id)}
                    >
                      View
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEditPolicy(policy.id)}
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

export default RiskPolicies;
