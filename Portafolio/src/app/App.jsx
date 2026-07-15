import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;