import { RouterProvider } from "react-router-dom";
import BaseRouter from "./router/BaseRouter";

const App = () => {
  return <RouterProvider router={BaseRouter} />;
};

export default App;
