
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Plus, Search, Filter, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import AdminNavbar from '@/components/layout/AdminNavbar';

const AllBuilders = () => {
  const navigate = useNavigate();
  
  // Mock data for builders
  const builders = [
    { 
      id: 1, 
      name: 'Acme Construction', 
      status: 'active', 
      users: 4, 
      properties: 12, 
      subscription: 'Pro',
      yearFounded: 2010,
      location: 'Denver, CO',
      lastLogin: '2 hours ago'
    },
    { 
      id: 2, 
      name: 'Summit Builders', 
      status: 'active', 
      users: 3, 
      properties: 8, 
      subscription: 'Elite',
      yearFounded: 2015,
      location: 'Seattle, WA',
      lastLogin: '1 day ago'
    },
    { 
      id: 3, 
      name: 'Horizon Homes', 
      status: 'pending', 
      users: 2, 
      properties: 5, 
      subscription: 'Free',
      yearFounded: 2018,
      location: 'Austin, TX',
      lastLogin: '3 days ago'
    },
    { 
      id: 4, 
      name: 'Quality Structures Inc.', 
      status: 'active', 
      users: 6, 
      properties: 15, 
      subscription: 'Pro',
      yearFounded: 2008,
      location: 'Chicago, IL',
      lastLogin: '5 hours ago'
    },
    { 
      id: 5, 
      name: 'Evergreen Homes', 
      status: 'active', 
      users: 4, 
      properties: 10, 
      subscription: 'Pro',
      yearFounded: 2012,
      location: 'Portland, OR',
      lastLogin: '12 hours ago'
    },
    { 
      id: 6, 
      name: 'Metropolitan Construction', 
      status: 'active', 
      users: 8, 
      properties: 22, 
      subscription: 'Elite',
      yearFounded: 2005,
      location: 'New York, NY',
      lastLogin: '2 days ago'
    },
    { 
      id: 7, 
      name: 'Sunbelt Developers', 
      status: 'inactive', 
      users: 2, 
      properties: 4, 
      subscription: 'Free',
      yearFounded: 2019,
      location: 'Phoenix, AZ',
      lastLogin: '2 weeks ago'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">All Builders</h1>
            <p className="text-muted-foreground">Manage and view all builder accounts</p>
          </div>
          <Button onClick={() => console.log('Add new builder')}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Builder
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search builders..." 
              className="pl-8"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Status: All</DropdownMenuItem>
              <DropdownMenuItem>Status: Active</DropdownMenuItem>
              <DropdownMenuItem>Status: Pending</DropdownMenuItem>
              <DropdownMenuItem>Status: Inactive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Subscription: All</DropdownMenuItem>
              <DropdownMenuItem>Subscription: Free</DropdownMenuItem>
              <DropdownMenuItem>Subscription: Pro</DropdownMenuItem>
              <DropdownMenuItem>Subscription: Elite</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Builders ({builders.length})</TabsTrigger>
            <TabsTrigger value="active">Active ({builders.filter(b => b.status === 'active').length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({builders.filter(b => b.status === 'pending').length})</TabsTrigger>
            <TabsTrigger value="inactive">Inactive ({builders.filter(b => b.status === 'inactive').length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Builder Name</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Subscription</th>
                      <th className="text-left p-4 font-medium">Users</th>
                      <th className="text-left p-4 font-medium">Properties</th>
                      <th className="text-left p-4 font-medium">Location</th>
                      <th className="text-left p-4 font-medium">Last Login</th>
                      <th className="text-right p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {builders.map((builder) => (
                      <tr key={builder.id} className="border-b">
                        <td className="p-4">
                          <div className="flex items-center">
                            <Building className="h-5 w-5 mr-2 text-primary" />
                            <span className="font-medium">{builder.name}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={
                            builder.status === 'active' ? "bg-success/10 text-success border-success/30" : 
                            builder.status === 'pending' ? "bg-warning/10 text-warning border-warning/30" :
                            "bg-muted text-muted-foreground"
                          }>
                            {builder.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className={
                            builder.subscription === 'Elite' ? "border-primary/50 bg-primary/10 text-primary" :
                            builder.subscription === 'Pro' ? "border-success/50 bg-success/10 text-success" :
                            "border-muted-foreground/50"
                          }>
                            {builder.subscription}
                          </Badge>
                        </td>
                        <td className="p-4">{builder.users}</td>
                        <td className="p-4">{builder.properties}</td>
                        <td className="p-4">{builder.location}</td>
                        <td className="p-4">{builder.lastLogin}</td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm" onClick={() => navigate(`/builder/${builder.id}`)}>
                            View
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => navigate('/', { state: { builderId: builder.id } })}>
                            Login
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="active" className="mt-0">
            <Card>
              <div className="p-6">
                <p>Active builders content</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <Card>
              <div className="p-6">
                <p>Pending builders content</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-0">
            <Card>
              <div className="p-6">
                <p>Inactive builders content</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AllBuilders;
