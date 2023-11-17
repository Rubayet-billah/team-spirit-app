const UserCard = () => {
  return (
    <div className="w-full max-w-xs bg-slate-50 p-6 rounded space-y-2">
      <header className="flex justify-between items-center">
        <div>{`<=`}</div>
        <div>Edit Profile</div>
      </header>
      <main className="flex">
        <div>
          <img
            className="w-20 rounded-3xl"
            src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"
            alt="user-image"
          />
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <h2 className="text-xl font-bold leading-none">John Doe</h2>
          <small>@johndoe</small>

          <p>Animator</p>
        </div>
      </main>
      <footer className="flex justify-between items-center">
        <div>
          <small className="font-bold text-xs leading-none">Post</small>
          <h4 className="text-center leading-3">41</h4>
        </div>
        <div>
          <small className="font-bold text-xs leading-none">Ratings</small>
          <h4 className="text-center leading-3">4.5</h4>
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
