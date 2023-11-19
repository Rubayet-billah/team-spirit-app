import { RouterProvider } from "react-router-dom";
import UserCard from "./components/UserCard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UsersPage from "./pages/UsersPage";
import router from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
