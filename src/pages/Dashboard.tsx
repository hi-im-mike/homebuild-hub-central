
import React from 'react';
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

const Dashboard = () => {
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
  
  const contacts = [
    // Company contacts
    {
      id: '1',
      name: 'John Smith',
      role: 'Project Manager',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      isAdmin: false
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Site Supervisor',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
      isAdmin: false
    },
    // Admin contacts
    {
      id: '3',
      name: 'Support Team',
      role: 'Technical Support',
      email: 'support@maverick.com',
      phone: '(800) 555-1234',
      isAdmin: true
    },
    {
      id: '4',
      name: 'Jessica Adams',
      role: 'Account Manager',
      email: 'jessica.adams@maverick.com',
      phone: '(800) 555-5678',
      isAdmin: true
    },
  ];

  // Calculate onboarding completion percentage
  const onboardingPercentage = 75; // Example percentage

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
        />
        <StatusCard 
          title="Energy Guarantees" 
          count={8} 
          status="approved" 
          icon={<Zap className="h-6 w-6" />} 
        />
        <StatusCard 
          title="Builder's Risk Policies" 
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
          <RecentProperties properties={recentProperties} />
          <WarrantyStatus 
            totalProperties={25}
            enrolledProperties={18}
            pendingProperties={5}
            issuesProperties={2}
          />
        </div>
        <div className="lg:col-span-4">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2 className="dashboard-card-title">Contacts</h2>
            </div>
            
            <div className="space-y-4">
              {/* Company contacts */}
              {contacts.filter(contact => !contact.isAdmin).map((contact) => (
                <div key={contact.id} className="flex items-start space-x-4 border-b border-border pb-4 last:pb-0 last:border-0">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                        <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                        <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Divider between company and admin contacts */}
              <div className="py-2">
                <Separator className="h-0.5 bg-primary/10" />
                <p className="text-center text-sm text-muted-foreground font-medium py-1">ADMIN CONTACTS</p>
                <Separator className="h-0.5 bg-primary/10" />
              </div>
              
              {/* Admin contacts */}
              {contacts.filter(contact => contact.isAdmin).map((contact) => (
                <div key={contact.id} className="flex items-start space-x-4 border-b border-border pb-4 last:pb-0 last:border-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                        <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                        <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
