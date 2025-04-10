
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
import { Shield, Search, Building, AlertTriangle, PlusCircle } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';

// Define the status type to match what StatusBadge expects
type Status = "pending" | "approved" | "incomplete" | "completed" | "active";

interface WarrantyApplication {
  id: string;
  propertyAddress: string;
  type: string;
  submissionDate: string;
  status: Status;
  issues?: string;
}

const WarrantyApplications = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const applications: WarrantyApplication[] = [
    {
      id: '1',
      propertyAddress: '123 Main St',
      type: 'Structural Warranty',
      submissionDate: 'Apr 10, 2025',
      status: 'incomplete',
      issues: 'Missing documentation',
    },
    {
      id: '2',
      propertyAddress: '456 Elm St',
      type: 'Structural Warranty',
      submissionDate: 'Apr 9, 2025',
      status: 'incomplete',
      issues: 'Payment issue',
    },
    {
      id: '3',
      propertyAddress: '789 Oak Ave',
      type: 'Structural Warranty',
      submissionDate: 'Apr 8, 2025',
      status: 'pending',
    },
    {
      id: '4',
      propertyAddress: '101 Pine Dr',
      type: 'Structural Warranty',
      submissionDate: 'Apr 7, 2025',
      status: 'approved',
    },
    {
      id: '5',
      propertyAddress: '202 Maple Ln',
      type: 'Structural Warranty',
      submissionDate: 'Apr 6, 2025',
      status: 'approved',
    },
  ];

  // Sort incomplete first, then pending, then others
  const sortedApplications = [...applications].sort((a, b) => {
    if (a.status === 'incomplete' && b.status !== 'incomplete') return -1;
    if (a.status !== 'incomplete' && b.status === 'incomplete') return 1;
    if (a.status === 'pending' && b.status !== 'pending' && b.status !== 'incomplete') return -1;
    if (a.status !== 'pending' && a.status !== 'incomplete' && b.status === 'pending') return 1;
    return 0;
  });

  // Count by status
  const statusCounts = {
    incomplete: applications.filter(a => a.status === 'incomplete').length,
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredApplications = sortedApplications.filter(application => 
    application.propertyAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewApplication = (id: string) => {
    navigate(`/properties/${id}?tab=warranty`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Warranty Applications</h1>
          <p className="text-muted-foreground">Manage your warranty applications</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Application
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-3">
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
            <CardTitle className="text-sm font-medium">Approved Applications</CardTitle>
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
              You have {statusCounts.incomplete} applications with issues that need your attention.
            </p>
          </div>
        </div>
      )}
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search applications..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Warranty Applications</CardTitle>
          <CardDescription>
            View and manage all your warranty applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Warranty Type</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Issues</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-3" />
                      <div className="font-medium">{application.propertyAddress}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{application.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{application.submissionDate}</TableCell>
                  <TableCell>
                    <StatusBadge status={application.status} />
                  </TableCell>
                  <TableCell>
                    {application.issues ? (
                      <span className="text-danger">{application.issues}</span>
                    ) : (
                      <span className="text-muted-foreground">None</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewApplication(application.id)}
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

export default WarrantyApplications;
