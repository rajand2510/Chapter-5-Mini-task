import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Please Log In</h2>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
        Log In
      </button>
    </div>
  );
};

export default Login;
