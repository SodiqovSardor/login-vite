import { useState, useEffect } from "react";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
        <p className="text-gray-500">Loading users...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
      <table className="w-full border border-gray-300" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Username</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{user.id}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">{user.name?.firstname} {user.name?.lastname}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{user.username}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{user.email}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
