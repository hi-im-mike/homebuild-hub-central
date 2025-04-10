
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Building, Search, ChevronDown, UserCheck, Eye,
  Users, FileText, Shield, AlertTriangle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import StatusBadge from '@/components/shared/StatusBadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminDashboard = () => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  // Mock data for demonstration
  const builders = [
    {
      id: '1',
      name: 'Acme Construction',
      onboardingStatus: 'approved' as const,
      propertiesCount: 25,
      warrantiesCount: 20,
      issuesCount: 2,
      lastLogin: 'Today at 10:25 AM',
    },
    {
      id: '2',
      name: 'BuildRight Homes',
      onboardingStatus: 'pending' as const,
      propertiesCount: 12,
      warrantiesCount: 8,
      issuesCount: 1,
      lastLogin: 'Yesterday at 4:30 PM',
    },
    {
      id: '3',
      name: 'Prestige Custom Homes',
      onboardingStatus: 'incomplete' as const,
      propertiesCount: 5,
      warrantiesCount: 0,
      issuesCount: 0,
      lastLogin: 'Apr 5, 2025',
    },
    {
      id: '4',
      name: 'Quality Builders Inc',
      onboardingStatus: 'approved' as const,
      propertiesCount: 38,
      warrantiesCount: 30,
      issuesCount: 0,
      lastLogin: 'Apr 8, 2025',
    },
  ];
  
  const filteredBuilders = filterStatus
    ? builders.filter(builder => builder.onboardingStatus === filterStatus)
    : builders;
    
  // Quick stats for admin
  const stats = [
    { label: 'Total Builders', value: builders.length, icon: Users },
    { label: 'Pending Applications', value: builders.filter(b => b.onboardingStatus === 'pending').length, icon: FileText },
    { label: 'Active Warranties', value: builders.reduce((total, builder) => total + builder.warrantiesCount, 0), icon: Shield },
    { label: 'Issues Requiring Action', value: builders.reduce((total, builder) => total + builder.issuesCount, 0), icon: AlertTriangle },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage all builder accounts and applications</p>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-sm border border-border flex items-center space-x-4"
          >
            <div className="p-3 bg-primary/10 rounded-full">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Builders list with filters */}
      <div className="bg-white rounded-lg shadow-sm border border-border p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold">Builder Accounts</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search builders..." 
                className="pl-10"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  {filterStatus ? `Status: ${filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)}` : 'Filter by Status'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setFilterStatus(null)}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('approved')}>Approved</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('pending')}>Pending</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus('incomplete')}>Incomplete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Builder</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Onboarding Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Properties</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Warranties</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Issues</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredBuilders.map((builder) => (
                <tr key={builder.id} className="hover:bg-muted/20">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="font-medium">{builder.name}</div>
                        <div className="text-xs text-muted-foreground">ID: {builder.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={builder.onboardingStatus} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{builder.propertiesCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{builder.warrantiesCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {builder.issuesCount > 0 ? (
                      <span className="inline-flex items-center justify-center text-danger">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {builder.issuesCount}
                      </span>
                    ) : (
                      <span className="text-success">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{builder.lastLogin}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="secondary" size="sm">
                      <UserCheck className="h-4 w-4 mr-1" />
                      Log in as
                    </Button>
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

export default AdminDashboard;
