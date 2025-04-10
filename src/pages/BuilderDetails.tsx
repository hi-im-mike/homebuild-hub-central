import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
import { Building, Users, ArrowRight } from 'lucide-react';

const BuilderDetails = () => {
  const navigate = useNavigate();
  
  // Mock data for builder users
  const builderUsers = [
    { id: '1', name: 'John Smith', email: 'john@abcbuilders.com', role: 'Admin', lastActive: '2 hours ago' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@abcbuilders.com', role: 'Manager', lastActive: '1 day ago' },
    { id: '3', name: 'Mike Williams', email: 'mike@abcbuilders.com', role: 'User', lastActive: '3 days ago' },
  ];
  
  // Mock data for linked builder accounts
  const linkedAccounts = [
    { id: '1', name: 'ABC Builders', address: '123 Construction Ave, Austin, TX', properties: 24, active: true },
    { id: '2', name: 'ABC Custom Homes', address: '456 Builder St, Austin, TX', properties: 12, active: true },
  ];

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">ABC Builders</h1>
          <p className="text-muted-foreground">Builder Account Details</p>
        </div>
        <Button onClick={() => navigate('/all-builders')}>
          <Building className="mr-2 h-4 w-4" />
          View All Builders
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Builder Users
            </CardTitle>
            <CardDescription>
              Users with access to this builder account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Last Active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {builderUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              Linked Builder Accounts
            </CardTitle>
            <CardDescription>
              Associated builder accounts under the same organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account</TableHead>
                  <TableHead>Properties</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkedAccounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{account.name}</div>
                        <div className="text-sm text-muted-foreground">{account.address}</div>
                      </div>
                    </TableCell>
                    <TableCell>{account.properties}</TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        account.active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                      }`}>
                        {account.active ? 'Active' : 'Inactive'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuilderDetails;
