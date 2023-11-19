import UserCard from "./components/UserCard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        {/* <UserCard /> */}
        {/* <UsersPage /> */}
        {/* <AddUser /> */}
        <EditUser />
      </div>
    </>
  );
}

export default App;
