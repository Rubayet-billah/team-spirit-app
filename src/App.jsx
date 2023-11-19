import UserCard from "./components/UserCard";
import AddUser from "./pages/AddUser";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        {/* <UserCard /> */}
        {/* <UsersPage /> */}
        <AddUser />
      </div>
    </>
  );
}

export default App;
