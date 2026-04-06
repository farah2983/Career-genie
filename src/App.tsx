import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home-page";
import HrDashboard from "./components/Hr-dashboard";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route
          path="/"
          element={
            <div className="relative w-full min-h-screen">

              {/* Background */}
              <div className="absolute inset-0 bg-[url('/Login.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 grid w-full min-h-screen place-items-center p-4">
                <Login />
              </div>

            </div>
          }
        />

        {/* Home page */}
        <Route
          path="/home"
          element={
            <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
              
              <Home />
            </div>
          }
        />

        {/* HR Dashboard page */}
        <Route
          path="/hr-dashboard"
          element={
            <div className="w-full min-h-screen bg-slate-900 text-white flex items-center justify-center">
              <HrDashboard />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;