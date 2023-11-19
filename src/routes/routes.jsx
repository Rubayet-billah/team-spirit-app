import { createBrowserRouter } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Homepage from "../pages/Homepage";
import UsersPage from "../pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/create-user",
    element: <AddUser />,
  },
  {
    path: "/edit-user/:id",
    element: <EditUser />,
  },
]);

export default router;
