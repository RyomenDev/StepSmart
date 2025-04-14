import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
// import { Home, Login } from "../pages";
import { HomePage, SignIn, SignUp } from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>
    </Route>
  )
);

export { router };
