import { createBrowserRouter, Link } from "react-router-dom";
import Natal from "../page/Natal";

const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        TOP<Link to={"./natal"}>natal</Link>
      </div>
    ),
  },
  {
    path: "/natal",
    element: <Natal />,
  },
]);

export default BaseRouter;
