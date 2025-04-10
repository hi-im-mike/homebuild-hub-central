
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, Search } from 'lucide-react';
import StatusBadge from '@/components/shared/StatusBadge';
import { Input } from '@/components/ui/input';

const OnboardingApplications = () => {
  // Mock data for demonstration
  const applications = [
    {
      id: '1',
      companyName: 'Acme Construction',
      dateSubmitted: 'Apr 7, 2025',
      status: 'approved' as const,
      contact: 'John Smith',
    },
    {
      id: '2',
      companyName: 'BuildRight Homes',
      dateSubmitted: 'Apr 9, 2025',
      status: 'pending' as const,
      contact: 'Sarah Johnson',
    },
    {
      id: '3',
      companyName: 'Prestige Custom Homes',
      dateSubmitted: 'Mar 30, 2025',
      status: 'incomplete' as const,
      contact: 'Robert Davis',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Onboarding Applications</h1>
          <p className="text-muted-foreground">Manage your builder onboarding process</p>
        </div>
        <Button className="sm:w-auto w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Application
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search applications..." 
          className="pl-10"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-muted/20">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="font-medium">{app.companyName}</div>
                        <div className="text-xs text-muted-foreground">ID: {app.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{app.dateSubmitted}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={app.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{app.contact}</td>
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

export default OnboardingApplications;
