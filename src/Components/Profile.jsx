import { useAuth } from './AuthContext';
import Login from './Login';
import Dashboard from './Dashboard';

const Profile = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
};

export default Profile;
