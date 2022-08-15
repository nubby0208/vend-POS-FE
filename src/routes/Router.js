import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/***** Pages ****/

const Home = lazy(() => import("../views/Home"));


const Sell = lazy(() => import("../views/sell/Sell"));
const OpenClose = lazy(() => import("../views/sell/OpenClose"));
const SaleHistory = lazy(() => import("../views/sell/SaleHistory"));
const CashManagement = lazy(() => import("../views/sell/CashManagement"));
const Status = lazy(() => import("../views/sell/Status"));
const Quotes = lazy(() => import("../views/sell/Quotes"));
const Settings = lazy(() => import("../views/sell/Settings"));

const Overview = lazy(() => import("../views/online/Overview"));
const Webstore = lazy(() => import("../views/online/Webstore"));
const Facebook = lazy(() => import("../views/online/Facebook"));
const Instagram = lazy(() => import("../views/online/Instagram"));
const OnlineSettings = lazy(() => import("../views/online/Settings"));

const Products = lazy(() => import("../views/catalog/Products"));
const AddProduct = lazy(() => import("../views/catalog/AddProduct"));
const Promotions = lazy(() => import("../views/catalog/Promotions"));
const PriceBooks = lazy(() => import("../views/catalog/PriceBooks"));
const Brands = lazy(() => import("../views/catalog/Brands"));
const Suppliers = lazy(() => import("../views/catalog/Suppliers"));
const ProductTags = lazy(() => import("../views/catalog/ProductTags"));
const ProductType = lazy(() => import("../views/catalog/ProductType"));
const GiftCards = lazy(() => import("../views/catalog/GiftCards"));

const StockControl = lazy(() => import("../views/inventory/StockControl"));


const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Home" /> },
      // { path: "/login", exact: true, element: <Login /> },
      // { path: "/register", exact: true, element: <Register /> },
      { path: "/Home", exact: true, element: <Home /> },
      { path: "/sell/index", exact: true, element: <Sell /> },
      { path: "/sell/openClose", exact: true, element: <OpenClose /> },
      { path: "/sell/saleHistory", exact: true, element: <SaleHistory /> },
      { path: "/sell/cashManagement", exact: true, element: <CashManagement /> },
      { path: "/sell/status", exact: true, element: <Status /> },
      { path: "/sell/quotes", exact: true, element: <Quotes /> },
      { path: "/sell/settings", exact: true, element: <Settings /> },

      { path: "/online/overview", exact: true, element: <Overview /> },
      { path: "/online/webstore", exact: true, element: <Webstore /> },
      { path: "/online/facebook", exact: true, element: <Facebook /> },
      { path: "/online/instagram", exact: true, element: <Instagram /> },
      { path: "/online/settings", exact: true, element: <OnlineSettings /> },

      { path: "/catalog/products", exact: true, element: <Products /> },
      { path: "/catalog/products/add", exact: true, element: <AddProduct /> },
      { path: "/catalog/promotions", exact: true, element: <Promotions /> },
      { path: "/catalog/priceBooks", exact: true, element: <PriceBooks /> },
      { path: "/catalog/brands", exact: true, element: <Brands /> },
      { path: "/catalog/suppliers", exact: true, element: <Suppliers /> },
      { path: "/catalog/productTags", exact: true, element: <ProductTags /> },
      { path: "/catalog/productTypes", exact: true, element: <ProductType /> },
      { path: "/catalog/giftCards", exact: true, element: <GiftCards /> },

      { path: "/inventory/stockControl", exact: true, element: <StockControl /> },


      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
