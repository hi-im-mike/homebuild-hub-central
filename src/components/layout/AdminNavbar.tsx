
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Building, Settings, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';

const AdminNavbar = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/builder-details" className="font-bold text-xl mr-8">
              Maverick Admin
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link 
                to="/all-builders" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
              >
                <Building className="h-4 w-4 mr-2" />
                Builders
              </Link>
              <Link 
                to="/admin-users" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
              >
                <Users className="h-4 w-4 mr-2" />
                Admin Users
              </Link>
              <Link 
                to="/admin-settings" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
              >
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full bg-muted">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/')}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => navigate('/')}
              className="hidden md:flex"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
