import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }

  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Please Log In</h2>
      {loading ? (
        <p className="text-gray-500">Logging in...</p>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;
