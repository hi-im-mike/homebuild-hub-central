
import React from 'react';
import {
  FileText,
  Shield,
  Zap,
  ClipboardList,
  AlertTriangle
} from 'lucide-react';
import StatusCard from '@/components/dashboard/StatusCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import WarrantyStatus from '@/components/dashboard/WarrantyStatus';
import ContactsList from '@/components/dashboard/ContactsList';

const Dashboard = () => {
  // Mock data for demonstration
  const recentActivities = [
    {
      id: '1',
      title: 'Warranty Application Submitted',
      description: '123 Main St - New warranty application submitted',
      date: 'Today at 2:30 PM',
      type: 'warranty' as const,
    },
    {
      id: '2',
      title: 'Property Added',
      description: '456 Elm St - New property added to your portfolio',
      date: 'Yesterday at 10:15 AM',
      type: 'property' as const,
    },
    {
      id: '3',
      title: 'Onboarding Update',
      description: 'Your company onboarding status has been updated to Approved',
      date: 'Apr 8, 2025',
      type: 'onboarding' as const,
    },
    {
      id: '4',
      title: 'Energy Guarantee Issued',
      description: '789 Oak Ave - Energy guarantee certificate issued',
      date: 'Apr 7, 2025',
      type: 'energy' as const,
    },
  ];
  
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
  
  const adminContacts = [
    {
      id: '1',
      name: 'Support Team',
      role: 'Technical Support',
      email: 'support@homebuildhub.com',
      phone: '(800) 555-1234',
    },
    {
      id: '2',
      name: 'Jessica Adams',
      role: 'Account Manager',
      email: 'jessica.adams@homebuildhub.com',
      phone: '(800) 555-5678',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your builder dashboard</p>
      </div>
      
      {/* Status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard 
          title="Onboarding Applications" 
          count={2} 
          status="pending" 
          icon={<FileText className="h-6 w-6" />} 
        />
        <StatusCard 
          title="Warranty Applications" 
          count={12} 
          status="approved" 
          icon={<Shield className="h-6 w-6" />} 
        />
        <StatusCard 
          title="Energy Guarantees" 
          count={8} 
          status="approved" 
          icon={<Zap className="h-6 w-6" />} 
        />
        <StatusCard 
          title="Risk Policies" 
          count={3} 
          status="incomplete" 
          icon={<ClipboardList className="h-6 w-6" />} 
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
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <RecentActivity activities={recentActivities} />
          <WarrantyStatus 
            totalProperties={25}
            enrolledProperties={18}
            pendingProperties={5}
            issuesProperties={2}
          />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <ContactsList title="Company Contacts" contacts={companyContacts} />
          <ContactsList title="Admin Contacts" contacts={adminContacts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
