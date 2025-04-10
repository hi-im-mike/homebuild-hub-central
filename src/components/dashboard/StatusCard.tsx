
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  count: number;
  countSuffix?: string;
  status: 'pending' | 'approved' | 'rejected' | 'incomplete';
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  count, 
  countSuffix = '',
  status, 
  icon,
  className,
  onClick
}) => {
  const statusColors = {
    pending: 'bg-warning/10 text-warning border-warning/30',
    approved: 'bg-success/10 text-success border-success/30',
    rejected: 'bg-danger/10 text-danger border-danger/30',
    incomplete: 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/30',
  };

  return (
    <div 
      className={cn(
        "dashboard-card border rounded-lg p-4", 
        onClick && "cursor-pointer hover:shadow-md transition-all",
        statusColors[status],
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-bold mt-2">{count}{countSuffix}</p>
        </div>
        <div className="p-3 rounded-full bg-white/90 shadow-sm">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
