
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, Users, FileText, Shield, Zap, ClipboardList, Settings, 
  Bell, LogOut, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  isMobile: boolean | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, isMobile }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Users },
    { name: 'Onboarding Applications', path: '/onboarding', icon: FileText },
    { name: 'Warranty Applications', path: '/warranty', icon: Shield },
    { name: 'Energy Guarantees', path: '/energy', icon: Zap },
    { name: 'Risk Policies', path: '/risk-policies', icon: ClipboardList },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/30 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 ease-in-out",
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-center border-b border-sidebar-border">
          <h1 className="text-xl font-bold">HomeBuild Hub</h1>
        </div>
        
        {/* Nav items */}
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="space-y-1 mb-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  isActive(item.path) 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="border-t border-sidebar-border pt-4">
            <Link 
              to="/profile"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors duration-200"
            >
              <User className="h-5 w-5 mr-3" />
              <span>Profile</span>
            </Link>
            <Link 
              to="/settings"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors duration-200"
            >
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </Link>
            <Link 
              to="/notifications"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors duration-200"
            >
              <Bell className="h-5 w-5 mr-3" />
              <span>Notifications</span>
            </Link>
            <Button
              variant="link"
              className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors duration-200 justify-start"
              onClick={() => console.log('Logout clicked')}
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
