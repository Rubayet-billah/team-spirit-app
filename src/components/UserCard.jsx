/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../redux/features/user/userApi";

const UserCard = ({ user }) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleUserDelete = (id, name) => {
    const confirmation = window.confirm(`Are you sure to delete ${name}`);
    if (confirmation) {
      deleteUser(id).then(() => {
        window.alert("User deleted successfully");
      });
    }
  };
  return (
    <div className="w-full max-w-xs bg-slate-50 p-6 rounded space-y-2 mx-auto">
      <header className="flex justify-between items-center">
        <div></div>
        <Link
          to={`/edit-user/${user?.id}`}
          className="text-sm text-teal-400 font-bold hover:text-teal-500 duration-100"
        >
          Edit Profile
        </Link>
      </header>
      <main className="flex">
        <div>
          <img
            className="w-20 rounded-3xl"
            src={user?.avatar}
            alt={`user-${user?.id}-image`}
          />
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <h2 className="text-xl font-bold leading-none">
            {user?.first_name} {user?.last_name}
          </h2>
          <small>{user?.email}</small>
          {/* <small>@{user?.email.split("@")[0]}</small> */}
          <p>{user?.domain}</p>
        </div>
      </main>
      <footer className="flex justify-between items-center">
        <div>
          <small className="font-bold text-xs leading-none">Gender</small>
          <h4 className="text-center leading-3">{user?.gender}</h4>
        </div>
        <div>
          <small className="font-bold text-xs leading-none">Active</small>
          <h4 className="text-center leading-3">
            {user?.available ? "Yes" : "No"}
          </h4>
        </div>
        <div>
          <button
            onClick={() => handleUserDelete(user?.id, user?.first_name)}
            className="px-2 py-[2px] bg-red-400 text-white text-sm font-bold uppercase rounded mt-[12px]"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserCard;
