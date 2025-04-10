import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  FileText, 
  Upload, 
  Plus,
  BarChart,
  CreditCard,
  CheckCircle,
  DollarSign,
  BadgePercent
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your builder profile and application settings</p>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Builder Profile</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions & Payments</TabsTrigger>
        </TabsList>
        
        {/* Builder Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          {/* Company Logo Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Company Logo</CardTitle>
              <CardDescription>
                Your logo will be displayed throughout the application and on documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex items-center justify-center w-32 h-32 border border-dashed rounded-lg bg-muted/10">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Upload your logo</p>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-medium">Upload Requirements</p>
                    <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside">
                      <li>SVG, PNG, or JPG format</li>
                      <li>Minimum 200x200 pixels</li>
                      <li>Maximum size of 2MB</li>
                    </ul>
                  </div>
                  <Button>Upload Logo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Update your company details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Maverick Builders LLC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Input id="businessType" defaultValue="Residential Construction" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="contact@maverickbuilders.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(512) 555-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" defaultValue="https://maverickbuilders.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID / EIN</Label>
                    <Input id="taxId" defaultValue="XX-XXXXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="1234 Construction Way, Suite 500, Austin, TX 78701"
                    rows={2}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="about">About</Label>
                  <Textarea 
                    id="about" 
                    defaultValue="Maverick Builders is a premier residential construction company specializing in custom-built homes with a focus on energy efficiency and sustainable building practices."
                    rows={4}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Primary Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Primary Contact</CardTitle>
              <CardDescription>
                The main point of contact for your builder account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-xl">LM</AvatarFallback>
                  </Avatar>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Lee" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Martinez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" defaultValue="Chief Operating Officer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input id="contactEmail" type="email" defaultValue="lee@maverickbuilders.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone</Label>
                      <Input id="contactPhone" type="tel" defaultValue="(512) 555-1234" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Manage users who have access to your builder account
                </CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>LM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Lee Martinez</p>
                          <p className="text-sm text-muted-foreground">lee@maverickbuilders.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Administrator</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        Just now
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Smith</p>
                          <p className="text-sm text-muted-foreground">john@maverickbuilders.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Project Manager</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        2 hours ago
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">sarah@maverickbuilders.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Site Supervisor</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        Yesterday
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Invite New Users</CardTitle>
              <CardDescription>
                Send invitations to colleagues to join your builder account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="inviteEmail">Email Address</Label>
                    <Input id="inviteEmail" type="email" placeholder="colleague@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inviteRole">Role</Label>
                    <select 
                      id="inviteRole" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="administrator">Administrator</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="site-supervisor">Site Supervisor</option>
                      <option value="viewer">View Only</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Send Invitation</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Generation</CardTitle>
              <CardDescription>
                Generate and download reports for your builder account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-background hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <BarChart className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="mb-2">Property Summary</CardTitle>
                      <CardDescription>
                        Generate a summary report of all properties and their current status
                      </CardDescription>
                      <Button className="mt-4" variant="outline">Generate Report</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <FileText className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="mb-2">Warranty Status</CardTitle>
                      <CardDescription>
                        Generate a report of all warranty applications and their current status
                      </CardDescription>
                      <Button className="mt-4" variant="outline">Generate Report</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Building className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="mb-2">Builder's Risk</CardTitle>
                      <CardDescription>
                        Generate a report of all builder's risk policies and their status
                      </CardDescription>
                      <Button className="mt-4" variant="outline">Generate Report</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <User className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="mb-2">Homeowner Report</CardTitle>
                      <CardDescription>
                        Generate a report of all homeowners and their properties
                      </CardDescription>
                      <Button className="mt-4" variant="outline">Generate Report</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>
                View and download your recently generated reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Generated</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <div className="font-medium">Warranty Summary - April 2025</div>
                      </div>
                    </TableCell>
                    <TableCell>Apr 10, 2025</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <div className="font-medium">Properties Summary - Q1 2025</div>
                      </div>
                    </TableCell>
                    <TableCell>Apr 1, 2025</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-3" />
                        <div className="font-medium">Homeowner Directory - March 2025</div>
                      </div>
                    </TableCell>
                    <TableCell>Mar 31, 2025</TableCell>
                    <TableCell>Excel</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Subscriptions & Payments Tab */}
        <TabsContent value="subscriptions" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>
                Your current plan and subscription details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">Pro Plan</h3>
                  <p className="text-3xl font-bold mt-2">$325<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                  <p className="text-sm text-muted-foreground mt-1">Billed monthly</p>
                  <div className="flex items-center gap-2 mt-4">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Visa ending in 4242</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Next billing: May 10, 2025</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline">Change Payment Method</Button>
                  <Button variant="outline" className="text-danger border-danger/30 hover:bg-danger/10">Cancel Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Subscription Plans */}
          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Choose the plan that works best for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Free Plan */}
                <Card className="border border-muted-foreground/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Free</CardTitle>
                    <CardDescription>For small builders getting started</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-3xl font-bold mb-6">$0<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Up to 5 properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Basic warranty applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Standard support</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Current Plan</Button>
                  </CardContent>
                </Card>
                
                {/* Pro Plan */}
                <Card className="border-2 border-primary relative">
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    CURRENT
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Pro</CardTitle>
                    <CardDescription>For growing builders with multiple projects</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-3xl font-bold mb-6">$325<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Up to 25 properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Advanced warranty management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Builder's risk policies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary">Current Plan</Button>
                  </CardContent>
                </Card>
                
                {/* Elite Plan */}
                <Card className="border border-muted-foreground/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Elite</CardTitle>
                    <CardDescription>For established builders with complex needs</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-3xl font-bold mb-6">$1,200<span className="text-sm text-muted-foreground font-normal">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Unlimited properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Full warranty suite</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Advanced risk management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-2 shrink-0" />
                        <span>Custom integrations</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Upgrade Plan</Button>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-4">* All plans include base warranty services. Additional services may have per-unit fees.</p>
            </CardContent>
          </Card>
          
          {/* Payment History */}
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your past invoices and payment records</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>INV-2025-0001</span>
                      </div>
                    </TableCell>
                    <TableCell>Apr 10, 2025</TableCell>
                    <TableCell>$325.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                        Paid
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>INV-2025-0002</span>
                      </div>
                    </TableCell>
                    <TableCell>Mar 10, 2025</TableCell>
                    <TableCell>$325.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                        Paid
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>INV-2025-0003</span>
                      </div>
                    </TableCell>
                    <TableCell>Feb 10, 2025</TableCell>
                    <TableCell>$325.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                        Paid
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
