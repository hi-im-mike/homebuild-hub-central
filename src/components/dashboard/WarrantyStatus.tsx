
import React from 'react';
import { BarChart, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface WarrantyStatusProps {
  totalProperties: number;
  enrolledProperties: number;
  pendingProperties: number;
  issuesProperties: number;
}

const WarrantyStatus: React.FC<WarrantyStatusProps> = ({
  totalProperties,
  enrolledProperties,
  pendingProperties,
  issuesProperties
}) => {
  const enrolledPercentage = Math.round((enrolledProperties / totalProperties) * 100);
  const pendingPercentage = Math.round((pendingProperties / totalProperties) * 100);
  const issuesPercentage = Math.round((issuesProperties / totalProperties) * 100);

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h2 className="dashboard-card-title">Warranty Enrollment Status</h2>
        <BarChart className="h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-success" />
              <span className="font-medium">Enrolled</span>
            </div>
            <span className="font-medium">{enrolledPercentage}%</span>
          </div>
          <Progress value={enrolledPercentage} className="h-2 bg-muted" />
          <p className="text-xs text-muted-foreground mt-1">{enrolledProperties} of {totalProperties} properties</p>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="h-4 w-4 mr-2 flex items-center justify-center">⏳</span>
              <span className="font-medium">Pending</span>
            </div>
            <span className="font-medium">{pendingPercentage}%</span>
          </div>
          <Progress value={pendingPercentage} className="h-2 bg-muted" />
          <p className="text-xs text-muted-foreground mt-1">{pendingProperties} of {totalProperties} properties</p>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2 text-danger" />
              <span className="font-medium">Issues</span>
            </div>
            <span className="font-medium">{issuesPercentage}%</span>
          </div>
          <Progress value={issuesPercentage} className="h-2 bg-muted" />
          <p className="text-xs text-muted-foreground mt-1">{issuesProperties} of {totalProperties} properties</p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyStatus;
