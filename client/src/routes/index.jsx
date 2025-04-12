import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
// import { Home, Login } from "../pages";
import { HomePage } from "../containers/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Route>
    </Route>
  )
);

export { router };
