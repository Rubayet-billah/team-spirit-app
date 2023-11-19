import { createBrowserRouter } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/create-user",
    element: <AddUser />,
  },
  {
    path: "/edit-user",
    element: <EditUser />,
  },
]);

export default router;
