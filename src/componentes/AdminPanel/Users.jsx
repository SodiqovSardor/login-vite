import { useState, useEffect } from "react";
import Table from "./Table";
import AddUserModalWindow from "./ModalWindows/AddUserModalWindow";
import DeleteUserModalWindow from "./ModalWindows/DeleteUserModalWindow";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Add Modal handlers
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Delete Modal handlers
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleUserDeleted = (deletedId) => {
    setUsers(users.filter((user) => user.id !== deletedId));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <button
            onClick={handleAddClick}
            className="px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Add User
          </button>
        </div>
        <p className="text-gray-500">Loading users...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <button
          onClick={handleAddClick}
          className="px-3 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          Add User
        </button>
      </div>
      <Table data={users} deleteUser={handleDeleteClick} />

      {/* Delete Modal */}
      <DeleteUserModalWindow
        show={showModal}
        userId={selectedId}
        onClose={handleCloseModal}
        onDeleted={handleUserDeleted}
      />

      {/* Add Modal */}
      <AddUserModalWindow
        show={showAddModal}
        onClose={handleCloseAddModal}
        onAdded={handleUserAdded}
      />
    </div>
  );
};

export default Users;
