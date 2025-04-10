
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
