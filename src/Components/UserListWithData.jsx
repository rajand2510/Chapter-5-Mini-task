import React, { useEffect, useState } from "react";


function withUser(WrappedComponent, userId) {
  return function WithUserComponent(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      setError(null);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [userId]);

    return (
      <WrappedComponent
        user={user}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
}


function UserProfile({ user, loading, error }) {
  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user data available.</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
    </div>
  );
}


const UserProfileWithUser = withUser(UserProfile, 1);


function UserListWithData() {
  return (
    <div>
      <h2>User Profile</h2>
      <UserProfileWithUser />
    </div>
  );
}

export default UserListWithData;
