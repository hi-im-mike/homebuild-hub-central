import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Shield,
  Zap,
  ClipboardList,
  AlertTriangle,
  Mail,
  Phone,
  User
} from 'lucide-react';
import StatusCard from '@/components/dashboard/StatusCard';
import RecentProperties from '@/components/dashboard/RecentProperties';
import WarrantyStatus from '@/components/dashboard/WarrantyStatus';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import ContactsList from '@/components/dashboard/ContactsList';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const recentProperties = [
    {
      id: '1',
      title: '123 Main St',
      description: 'New warranty application submitted',
      date: 'Today at 2:30 PM',
      type: 'warranty' as const,
    },
    {
      id: '2',
      title: '456 Elm St',
      description: 'New property added to your portfolio',
      date: 'Yesterday at 10:15 AM',
      type: 'property' as const,
    },
    {
      id: '3',
      title: '789 Oak Ave',
      description: 'Onboarding status updated to Approved',
      date: 'Apr 8, 2025',
      type: 'onboarding' as const,
    },
    {
      id: '4',
      title: '234 Pine Lane',
      description: 'Energy guarantee certificate issued',
      date: 'Apr 7, 2025',
      type: 'energy' as const,
    },
  ];
  
  // Company contacts
  const companyContacts = [
    {
      id: '1',
      name: 'John Smith',
      role: 'Project Manager',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Site Supervisor',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
    },
  ];
  
  // Admin contacts
  const adminContacts = [
    {
      id: '3',
      name: 'Support Team',
      role: 'Technical Support',
      email: 'support@maverick.com',
      phone: '(800) 555-1234',
    },
    {
      id: '4',
      name: 'Jessica Adams',
      role: 'Account Manager',
      email: 'jessica.adams@maverick.com',
      phone: '(800) 555-5678',
    },
  ];

  // Calculate onboarding completion percentage
  const onboardingPercentage = 75; // Example percentage

  // Problems data for the new table
  const problems = [
    {
      id: '1',
      property: '123 Main St',
      type: 'Warranty Application',
      issue: 'Incomplete Application',
      date: 'Apr 10, 2025'
    },
    {
      id: '2',
      property: '456 Elm St',
      type: 'Energy Guarantee',
      issue: 'Missing Payment',
      date: 'Apr 9, 2025'
    },
    {
      id: '3',
      property: '789 Oak Ave',
      type: 'Builder\'s Risk Policy',
      issue: 'Incomplete Application',
      date: 'Apr 8, 2025'
    }
  ];

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Hello, Lee</h1>
        <p className="text-muted-foreground">Welcome back to your builder dashboard</p>
      </div>
      
      {/* Status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard 
          title="Onboarding Application" 
          count={onboardingPercentage}
          countSuffix="%"
          status="pending" 
          icon={<FileText className="h-6 w-6" />} 
        />
        <StatusCard 
          title="Warranty Applications" 
          count={12} 
          status="approved" 
          icon={<Shield className="h-6 w-6" />}
          onClick={() => handleCardClick('/warranty-applications')}
        />
        <StatusCard 
          title="Energy Guarantees" 
          count={8} 
          status="approved" 
          icon={<Zap className="h-6 w-6" />}
          onClick={() => handleCardClick('/energy')}
        />
        <StatusCard 
          title="Builder's Risk Policies" 
          count={3} 
          status="incomplete" 
          icon={<ClipboardList className="h-6 w-6" />}
          onClick={() => handleCardClick('/risk-policies')}
        />
      </div>
      
      {/* Alert for issues if any */}
      <div className="bg-danger/10 border border-danger/30 rounded-lg p-4 flex items-start">
        <AlertTriangle className="h-5 w-5 text-danger mr-3 mt-0.5" />
        <div>
          <h3 className="font-medium text-danger">Attention Required</h3>
          <p className="text-sm text-foreground">You have 2 properties with warranty enrollment issues that need your attention.</p>
        </div>
      </div>
      
      {/* Warranty Status Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h3 className="font-medium text-primary mb-3">Warranty Applications Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-md p-3 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Enrolled</p>
                <p className="text-xl font-bold">18</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-success" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-warning/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-warning" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Issues</p>
                <p className="text-xl font-bold">2</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-danger/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-danger" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="lg:col-span-8 space-y-6">
          <RecentProperties properties={recentProperties} />
          
          {/* Problems Table */}
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Problems Requiring Attention</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {problems.map((problem) => (
                    <TableRow key={problem.id}>
                      <TableCell className="font-medium">{problem.property}</TableCell>
                      <TableCell>{problem.type}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          problem.issue.includes('Payment') 
                            ? 'bg-warning/10 text-warning' 
                            : 'bg-danger/10 text-danger'
                        }`}>
                          {problem.issue}
                        </span>
                      </TableCell>
                      <TableCell>{problem.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
        
        {/* Right column - fixed for mobile */}
        <div className="lg:col-span-4 space-y-6">
          {/* Company Contacts Card */}
          <ContactsList title="Company Contacts" contacts={companyContacts} />
          
          {/* Admin Contacts Card */}
          <ContactsList title="Admin Contacts" contacts={adminContacts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
