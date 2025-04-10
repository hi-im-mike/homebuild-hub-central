
import { Navigate } from 'react-router-dom';

const Index = () => {
  // This file is now just a redirect to the Dashboard component
  return <Navigate to="/" replace />;
};

export default Index;
