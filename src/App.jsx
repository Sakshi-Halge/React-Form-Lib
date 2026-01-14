import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppThemeConfig from "./theme";
import routes from "../routes";
import Header from "./components/Header";

function App() {
  return (
    <AppThemeConfig>
      <Header />
      <RouterProvider router={routes} />
    </AppThemeConfig>
  );
}

export default App;
