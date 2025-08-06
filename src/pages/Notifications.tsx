import React from 'react';
import { Bell, Clock, Check, AlertCircle, FileText, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'warranty' | 'onboarding' | 'property' | 'system';
  isRead: boolean;
  priority: 'low' | 'medium' | 'high';
}

const Notifications = () => {
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'New Warranty Application',
      message: 'Property: 123 Main St has a new warranty claim for HVAC system',
      timestamp: '2 hours ago',
      type: 'warranty',
      isRead: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Onboarding Status Updated',
      message: 'Your application for ABC Builders is now approved and ready for review',
      timestamp: '1 day ago',
      type: 'onboarding',
      isRead: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Property Inspection Required',
      message: '456 Oak Avenue requires final inspection before warranty activation',
      timestamp: '2 days ago',
      type: 'property',
      isRead: true,
      priority: 'medium'
    },
    {
      id: '4',
      title: 'System Maintenance',
      message: 'Scheduled maintenance window on Sunday 3:00 AM - 5:00 AM EST',
      timestamp: '3 days ago',
      type: 'system',
      isRead: true,
      priority: 'low'
    },
    {
      id: '5',
      title: 'Energy Guarantee Expiring',
      message: 'Energy guarantee for 789 Pine Street expires in 30 days',
      timestamp: '5 days ago',
      type: 'warranty',
      isRead: true,
      priority: 'medium'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warranty':
        return <FileText className="h-5 w-5" />;
      case 'onboarding':
        return <Check className="h-5 w-5" />;
      case 'property':
        return <Home className="h-5 w-5" />;
      case 'system':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            Settings
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <div className={`p-4 rounded-lg border transition-all hover:bg-accent/50 cursor-pointer ${!notification.isRead ? 'bg-accent/20 border-primary/20' : 'bg-card'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${notification.type === 'warranty' ? 'bg-blue-100 text-blue-600' : notification.type === 'onboarding' ? 'bg-green-100 text-green-600' : notification.type === 'property' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'}`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-semibold ${!notification.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h3>
                          {!notification.isRead && (
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                          {notification.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {notification.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {index < notifications.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;