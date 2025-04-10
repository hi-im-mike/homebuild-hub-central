
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Try to get saved sidebar state from localStorage
  const getSavedSidebarState = () => {
    const saved = localStorage.getItem('sidebar-state');
    // Default to open if no saved state
    return saved ? saved === 'open' : true;
  };

  const [sidebarOpen, setSidebarOpen] = useState(getSavedSidebarState);
  const isMobile = useIsMobile();
  
  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem('sidebar-state', sidebarOpen ? 'open' : 'closed');
    }
  }, [sidebarOpen, isMobile]);

  // On mobile, always start with closed sidebar
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(getSavedSidebarState());
    }
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Calculate main content padding based on sidebar state
  const mainContentClass = React.useMemo(() => {
    return `flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
      !isMobile && !sidebarOpen ? 'ml-[4.5rem]' : isMobile ? 'ml-0' : 'ml-64'
    }`;
  }, [sidebarOpen, isMobile]);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      
      <div className={mainContentClass}>
        <TopBar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
