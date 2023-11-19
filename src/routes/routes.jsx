import { createBrowserRouter } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
