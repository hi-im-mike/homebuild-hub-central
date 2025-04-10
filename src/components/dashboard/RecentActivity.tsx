
import React from 'react';
import { CalendarIcon } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'warranty' | 'onboarding' | 'property' | 'energy' | 'risk';
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'warranty':
        return <span className="h-2 w-2 rounded-full bg-info"></span>;
      case 'onboarding':
        return <span className="h-2 w-2 rounded-full bg-success"></span>;
      case 'property':
        return <span className="h-2 w-2 rounded-full bg-warning"></span>;
      case 'energy':
        return <span className="h-2 w-2 rounded-full bg-primary"></span>;
      case 'risk':
        return <span className="h-2 w-2 rounded-full bg-danger"></span>;
      default:
        return <span className="h-2 w-2 rounded-full bg-muted-foreground"></span>;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h2 className="dashboard-card-title">Recent Activity</h2>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-4 border-b border-border pb-4 last:border-0">
            <div className="mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{activity.title}</h4>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <CalendarIcon className="h-3 w-3 mr-1" />
                <span>{activity.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
