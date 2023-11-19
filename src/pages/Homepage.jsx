import Header from "../components/Header";
import UsersPage from "./UsersPage";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center min-h-screen">
        {/* <UserCard /> */}
        <UsersPage />
        {/* <AddUser /> */}
        {/* <EditUser /> */}
      </div>
    </div>
  );
};

export default Homepage;
