import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import PagesRoutes from "./pages/PagesRoutes";

// import Pay from "./pages/Pay.jsx";
// import Success from "./pages/Success.jsx"



function App() {
  return (
    <BrowserRouter>
      <PagesRoutes />
    </BrowserRouter>
  )
  
}

export default App;
