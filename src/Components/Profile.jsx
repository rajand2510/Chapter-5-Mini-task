import { useParams, Link, Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Profile = () => {
  const { name } = useParams();
  const userName = name.toLowerCase();

  const users = {
    john: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+91-9876543210",
      address: "123 Main Street, New York, USA",
      age: 28,
      role: "User",
    },
    emma: {
      id: 2,
      name: "Emma Watson",
      email: "emma.watson@example.com",
      contact: "+44-1234567890",
      address: "221B Baker Street, London, UK",
      age: 32,
      role: "Admin",
    },
    raj: {
      id: 3,
      name: "Raj Mehta",
      email: "raj.mehta@example.com",
      contact: "+91-9871234560",
      address: "Mumbai, Maharashtra, India",
      age: 26,
      role: "Moderator",
    },
    li: {
      id: 4,
      name: "Li Wei",
      email: "li.wei@example.cn",
      contact: "+86-13800138000",
      address: "Beijing, China",
      age: 30,
      role: "User",
    },
  };

  const user = users[userName];
  console.log(user);
  const currentTab = location.pathname.includes("friends") ? "friends" : "posts";
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-xl font-semibold">
        User not found
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen  bg-gray-100 p-5">
      <div className="bg-white h-fit p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">{user.name}'s Profile</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact:</strong> {user.contact}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="m-4  w-44">
          <Tabs value={currentTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full gap-2">
              <TabsTrigger value="posts" asChild className='bg-white'>
                <Link to={`/user/${userName}/posts`}>Posts</Link>
              </TabsTrigger>
              <TabsTrigger value="friends" asChild className='bg-white'>
                <Link to={`/user/${userName}/friends`}>Friends</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
