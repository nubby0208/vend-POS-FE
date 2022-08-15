import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  const Routing = useRoutes(Themeroutes);
  return <div className="dark">{Routing}</div>;
};

export default App;
