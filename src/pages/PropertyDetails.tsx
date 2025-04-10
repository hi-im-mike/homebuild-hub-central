
import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract the tab parameter from the URL if present
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get('tab') || 'details';
  
  const handleBack = () => {
    // Go back in history instead of navigating to a specific page
    navigate(-1);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Property Details</h1>
          <p className="text-muted-foreground">ID: {id}</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-2">Active Tab: {activeTab}</h2>
        <p className="text-muted-foreground">This is the property details page with the {activeTab} tab active.</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
