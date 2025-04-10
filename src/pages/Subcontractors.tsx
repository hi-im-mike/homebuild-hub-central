
import React from 'react';
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
import { Briefcase, PlusCircle, Search, Building, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ComplianceStatus = 'non-compliant' | 'incomplete' | 'completed' | 'compliant';

interface Subcontractor {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  status: ComplianceStatus;
}

const Subcontractors = () => {
  // Mock data for demonstration
  const subcontractors: Subcontractor[] = [
    {
      id: '1',
      name: 'Express Plumbing',
      type: 'Plumbing',
      email: 'info@expressplumbing.com',
      phone: '(512) 555-1234',
      status: 'non-compliant',
    },
    {
      id: '2',
      name: 'Elite Electric',
      type: 'Electrical',
      email: 'contact@eliteelectric.com',
      phone: '(512) 555-5678',
      status: 'incomplete',
    },
    {
      id: '3',
      name: 'Modern HVAC Solutions',
      type: 'HVAC',
      email: 'service@modernhvac.com',
      phone: '(512) 555-9012',
      status: 'completed',
    },
    {
      id: '4',
      name: 'Premier Painting',
      type: 'Painting',
      email: 'office@premierpainting.com',
      phone: '(512) 555-3456',
      status: 'compliant',
    },
    {
      id: '5',
      name: 'Reliable Roofing',
      type: 'Roofing',
      email: 'info@reliableroofing.com',
      phone: '(512) 555-7890',
      status: 'non-compliant',
    },
  ];

  // Sort subcontractors by status priority
  const statusPriority: Record<ComplianceStatus, number> = {
    'non-compliant': 1,
    'incomplete': 2,
    'completed': 3,
    'compliant': 4
  };

  const sortedSubcontractors = [...subcontractors].sort((a, b) => 
    statusPriority[a.status] - statusPriority[b.status]
  );

  // Generate status counts
  const statusCounts = subcontractors.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {} as Record<ComplianceStatus, number>);

  // Render badge for status
  const renderStatusBadge = (status: ComplianceStatus) => {
    const variants: Record<ComplianceStatus, { variant: "default" | "destructive" | "outline" | "secondary" | "success", text: string }> = {
      'non-compliant': { variant: "destructive", text: "Non-Compliant" },
      'incomplete': { variant: "secondary", text: "Incomplete" },
      'completed': { variant: "outline", text: "Completed" },
      'compliant': { variant: "success", text: "Compliant" }
    };
    
    const { variant, text } = variants[status];
    return <Badge variant={variant as any}>{text}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Subcontractors</h1>
          <p className="text-muted-foreground">Manage subcontractors and their compliance status</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Subcontractor
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Non-Compliant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{statusCounts['non-compliant'] || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Incomplete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts['incomplete'] || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusCounts['completed'] || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Compliant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{statusCounts['compliant'] || 0}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search subcontractors..." 
          className="pl-10"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Subcontractors</CardTitle>
          <CardDescription>
            View and manage your subcontractors and their compliance status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Contact Information</TableHead>
                <TableHead>Compliance Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedSubcontractors.map((subcontractor) => (
                <TableRow key={subcontractor.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-3" />
                      <div className="font-medium">{subcontractor.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{subcontractor.type}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{subcontractor.email}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{subcontractor.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {renderStatusBadge(subcontractor.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
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

export default Subcontractors;
