
import React from 'react';
import { cn } from '@/lib/utils';

type Status = 'pending' | 'approved' | 'rejected' | 'incomplete' | 'active' | 'inactive' | 'expired';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const getStatusStyles = (status: Status) => {
    switch (status) {
      case 'pending':
        return 'status-badge-pending';
      case 'approved':
        return 'status-badge-approved';
      case 'active':
        return 'status-badge-approved';
      case 'rejected':
        return 'status-badge-rejected';
      case 'expired':
        return 'status-badge-rejected';
      case 'inactive':
        return 'status-badge-rejected';
      case 'incomplete':
        return 'status-badge-incomplete';
      default:
        return 'status-badge-incomplete';
    }
  };
  
  const getStatusLabel = (status: Status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };
  
  return (
    <span className={cn('status-badge', getStatusStyles(status), className)}>
      {getStatusLabel(status)}
    </span>
  );
};

export default StatusBadge;
