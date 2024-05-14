import { useContext, useState } from 'react';
import LoginModal from '../Components/LoginModal'; 
import { Context } from '../Providers/AuthProviders';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
 

  if(user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-loading-lg flex justify-center items-center h-screen"></span>;
  }

  if (!user) {
    return (
      <>
        <LoginModal open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        
      </>
    );
  }

  return children;
};



export default PrivateRoute;