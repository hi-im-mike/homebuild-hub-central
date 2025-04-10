
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
import { ClipboardList, Search, Building, AlertTriangle, PlusCircle } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';

// Define the status type to match what StatusBadge expects
type Status = "pending" | "approved" | "incomplete" | "completed" | "active";

interface Policy {
  id: string;
  propertyAddress: string;
  type: string;
  submissionDate: string;
  status: Status;
  issues?: string;
}

const RiskPolicies = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const policies: Policy[] = [
    {
      id: '1',
      propertyAddress: '123 Main St',
      type: "Builder's Risk",
      submissionDate: 'Apr 10, 2025',
      status: 'incomplete',
      issues: 'Missing documentation',
    },
    {
      id: '2',
      propertyAddress: '456 Elm St',
      type: "Builder's Risk",
      submissionDate: 'Apr 9, 2025',
      status: 'incomplete',
      issues: 'Payment issue',
    },
    {
      id: '3',
      propertyAddress: '789 Oak Ave',
      type: "Builder's Risk",
      submissionDate: 'Apr 8, 2025',
      status: 'pending',
    },
    {
      id: '4',
      propertyAddress: '101 Pine Dr',
      type: "Builder's Risk",
      submissionDate: 'Apr 7, 2025',
      status: 'approved',
    },
    {
      id: '5',
      propertyAddress: '202 Maple Ln',
      type: "Builder's Risk",
      submissionDate: 'Apr 6, 2025',
      status: 'approved',
    },
  ];

  // Sort incomplete first, then pending, then others
  const sortedPolicies = [...policies].sort((a, b) => {
    if (a.status === 'incomplete' && b.status !== 'incomplete') return -1;
    if (a.status !== 'incomplete' && b.status === 'incomplete') return 1;
    if (a.status === 'pending' && b.status !== 'pending' && b.status !== 'incomplete') return -1;
    if (a.status !== 'pending' && a.status !== 'incomplete' && b.status === 'pending') return 1;
    return 0;
  });

  // Count by status
  const statusCounts = {
    incomplete: policies.filter(p => p.status === 'incomplete').length,
    pending: policies.filter(p => p.status === 'pending').length,
    approved: policies.filter(p => p.status === 'approved').length,
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPolicies = sortedPolicies.filter(policy => 
    policy.propertyAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewPolicy = (id: string) => {
    navigate(`/properties/${id}?tab=builders-risk`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Builder's Risk Policies</h1>
          <p className="text-muted-foreground">Manage your Builder's Risk insurance policies</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Policy
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-3">
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
            <CardTitle className="text-sm font-medium">Approved Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts.approved}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">
              {statusCounts.incomplete}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert for applications with issues */}
      {statusCounts.incomplete > 0 && (
        <div className="bg-danger/10 border border-danger/30 rounded-lg p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-danger mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium text-danger">Attention Required</h3>
            <p className="text-sm text-foreground">
              You have {statusCounts.incomplete} policies with issues that need your attention.
            </p>
          </div>
        </div>
      )}
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search policies..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Builder's Risk Policies</CardTitle>
          <CardDescription>
            View and manage all your builder's risk policies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Policy Type</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Issues</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPolicies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-3" />
                      <div className="font-medium">{policy.propertyAddress}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <ClipboardList className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{policy.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{policy.submissionDate}</TableCell>
                  <TableCell>
                    <StatusBadge status={policy.status} />
                  </TableCell>
                  <TableCell>
                    {policy.issues ? (
                      <span className="text-danger">{policy.issues}</span>
                    ) : (
                      <span className="text-muted-foreground">None</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewPolicy(policy.id)}
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

export default RiskPolicies;
