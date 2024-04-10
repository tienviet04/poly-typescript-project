import { createBrowserRouter } from "react-router-dom";
import ListProduct from "./pages/List";
import { getAll, getDetail } from "./api/product.api";
import AddPrd from "./pages/add";
import UpdatePrd from "./pages/update";
import Login from "./pages/login";


const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/admin",
    loader: async () => {
      const { data } = await getAll();
      return data;
    },
    element: <ListProduct />,
  },
  {
    path: "/admin/add",

    element: <AddPrd />,
  },
  {
    path: "/admin/update/:id",
    loader: async ({ params }) => {
      if (params.id) {
        const { data } = await getDetail(params.id);
        return data;
      }
      return {};
    },
    element: <UpdatePrd />,
  },
]);
export default router;
