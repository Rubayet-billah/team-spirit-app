import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-xs bg-slate-50 p-6 rounded space-y-2 mx-auto">
      <header className="flex justify-between items-center">
        <div></div>
        <button className="text-sm text-teal-400 font-bold hover:text-teal-500 duration-100">
          Edit Profile
        </button>
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
          <button className="px-2 py-[2px] bg-teal-400 text-white text-sm font-bold uppercase rounded mt-[12px]">
            Button
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserCard;
