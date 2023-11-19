import Header from "../components/Header";
import UsersPage from "./UsersPage";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="grid place-items-center min-h-screen">
        <UsersPage />
      </div>
    </div>
  );
};

export default Homepage;
