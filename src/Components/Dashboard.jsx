import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Welcome! You're logged in 🎉</h2>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
