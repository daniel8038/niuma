// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
// import OxHorseSurvey from "../components/OxHorseSurvey";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/survey",
  //   element: <OxHorseSurvey />,
  // },
]);

export default router;
