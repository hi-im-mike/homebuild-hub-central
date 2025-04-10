
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

interface ContactsListProps {
  title: string;
  contacts: Contact[];
}

const ContactsList: React.FC<ContactsListProps> = ({ title, contacts }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h2 className="dashboard-card-title">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-start space-x-4 border-b border-border pb-4 last:border-0">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{contact.name}</h4>
              <p className="text-sm text-muted-foreground">{contact.role}</p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm">
                  <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                  <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
