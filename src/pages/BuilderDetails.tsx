
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, User, Users, Mail, Phone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const BuilderDetails = () => {
  const navigate = useNavigate();

  // Mock data for builders and users
  const builders = [
    { 
      id: 1, 
      name: 'Acme Construction', 
      status: 'active', 
      users: 4, 
      properties: 12, 
      mainContact: 'John Smith',
      phone: '(555) 123-4567',
      email: 'john@acmeconstruction.com',
      subscription: 'Pro'
    },
    { 
      id: 2, 
      name: 'Summit Builders', 
      status: 'active', 
      users: 3, 
      properties: 8, 
      mainContact: 'Sarah Johnson',
      phone: '(555) 987-6543',
      email: 'sarah@summitbuilders.com',
      subscription: 'Elite'
    },
    { 
      id: 3, 
      name: 'Horizon Homes', 
      status: 'pending', 
      users: 2, 
      properties: 5, 
      mainContact: 'Michael Chen',
      phone: '(555) 456-7890',
      email: 'michael@horizonhomes.com',
      subscription: 'Free'
    },
    { 
      id: 4, 
      name: 'Quality Structures Inc.', 
      status: 'active', 
      users: 6, 
      properties: 15, 
      mainContact: 'Jessica Lee',
      phone: '(555) 234-5678',
      email: 'jessica@qualitystructures.com',
      subscription: 'Pro'
    },
  ];

  const users = [
    { id: 1, name: 'John Smith', role: 'Admin', email: 'john@acmeconstruction.com', builderId: 1 },
    { id: 2, name: 'Emily Davis', role: 'Staff', email: 'emily@acmeconstruction.com', builderId: 1 },
    { id: 3, name: 'Mark Wilson', role: 'Staff', email: 'mark@acmeconstruction.com', builderId: 1 },
    { id: 4, name: 'Sarah Johnson', role: 'Admin', email: 'sarah@summitbuilders.com', builderId: 2 },
    { id: 5, name: 'Alex Brown', role: 'Staff', email: 'alex@summitbuilders.com', builderId: 2 },
  ];

  const viewAllBuilders = () => {
    navigate('/all-builders');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Builder Management</h1>
          <p className="text-muted-foreground">Manage builder accounts and users</p>
        </div>
        <Button onClick={viewAllBuilders}>
          View All Builders
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Total Builders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Building className="h-6 w-6 mr-2 text-primary" />
              <span className="text-3xl font-bold">{builders.length}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Active Builders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Building className="h-6 w-6 mr-2 text-success" />
              <span className="text-3xl font-bold">
                {builders.filter(b => b.status === 'active').length}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" />
              <span className="text-3xl font-bold">{users.length}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <User className="h-6 w-6 mr-2 text-warning" />
              <span className="text-3xl font-bold">
                {users.filter(u => u.role === 'Admin').length}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Builders</h2>
        <div className="grid gap-6">
          {builders.slice(0, 3).map((builder) => (
            <Card key={builder.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{builder.name}</h3>
                      <Badge className={
                        builder.status === 'active' ? "bg-success/10 text-success border-success/30" : 
                        "bg-warning/10 text-warning border-warning/30"
                      }>
                        {builder.status === 'active' ? 'Active' : 'Pending'}
                      </Badge>
                      <Badge variant="outline" className="ml-2">
                        {builder.subscription}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{builder.users} Users</span>
                      <Separator orientation="vertical" className="mx-2 h-4" />
                      <Building className="h-4 w-4 mr-1" />
                      <span>{builder.properties} Properties</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{builder.mainContact}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{builder.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{builder.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 px-6 py-3">
                <div className="flex justify-between w-full">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/builder/${builder.id}`)}>
                    View Details
                  </Button>
                  <Button size="sm" onClick={() => navigate('/', { state: { builderId: builder.id } })}>
                    Login as Builder
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Email</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Builder</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 5).map((user) => {
                  const builder = builders.find(b => b.id === user.builderId);
                  return (
                    <tr key={user.id} className="border-b">
                      <td className="p-4">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">
                        <Badge variant={user.role === 'Admin' ? 'default' : 'outline'}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="p-4">{builder?.name}</td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BuilderDetails;
