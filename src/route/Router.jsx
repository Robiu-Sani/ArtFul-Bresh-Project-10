import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../nav,footer and error/Error";
import Home from "../components/home/Home";
import About from "../components/about/About";
import CarftItem from "../components/carftItem/CarftItem";
import AddCarftItem from "../components/addCarftItem/AddCarftItem";
import MyCraftList from "../components/myCraftList/MyCraftList";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Profile from "../components/auth/Profile";
import AddCraftPrivate from "../PrivateRoute/AddCraftPrivate";
import Details from "../components/carftItem/Details";
import UpdateCraft from "../components/updateCraft/UpdateCraft";
import Subcetagory from "../components/carftItem/Subcetagory";
import CardByCatogery from "../components/carftItem/CardByCatogery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-10-taupe.vercel.app/addCraft"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/carftItem",
        element: <CarftItem></CarftItem>,
        loader: () => fetch("https://server-10-taupe.vercel.app/addCraft"),
      },
      {
        path: "/addCarftItem",
        element: (
          <AddCraftPrivate>
            <AddCarftItem></AddCarftItem>
          </AddCraftPrivate>
        ),
      },
      {
        path: "/myCraftList",
        element: (
          <AddCraftPrivate>
            <MyCraftList></MyCraftList>
          </AddCraftPrivate>
        ),
        loader: () => fetch("https://server-10-taupe.vercel.app/addCraft"),
      },
      {
        path: "/CardByCatogery",
        element: (
          <AddCraftPrivate>
            <CardByCatogery></CardByCatogery>
          </AddCraftPrivate>
        ),
        loader: () => fetch("https://server-10-taupe.vercel.app/addCraft"),
      },
      {
        path: "/details/:id",
        element: (
          <AddCraftPrivate>
            <Details></Details>
          </AddCraftPrivate>
        ),
        loader: ({ params }) =>
          fetch(`https://server-10-taupe.vercel.app/addCraft/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: (
          <AddCraftPrivate>
            <Profile></Profile>
          </AddCraftPrivate>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <AddCraftPrivate>
            <UpdateCraft></UpdateCraft>
          </AddCraftPrivate>
        ),
        loader: ({ params }) =>
          fetch(`https://server-10-taupe.vercel.app/addCraft/${params.id}`),
      },
      {
        path: "/Subcetagory",
        element: (
          <AddCraftPrivate>
            <Subcetagory></Subcetagory>
          </AddCraftPrivate>
        ),
        loader: () => fetch("https://server-10-taupe.vercel.app/addCraft"),
      },
    ],
  },
]);

export default router;
