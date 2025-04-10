
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary/20">404</h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
