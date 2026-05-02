import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import RootLayout from "./components/layout/RootLayout";
import AccountLayout from "./components/layout/AccountLayout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Explore from "./pages/Explore";
import Web3Apps from "./pages/Web3Apps";
import CoinbaseAdvanced from "./pages/CoinbaseAdvanced";
import DarkLayout from "./components/layout/DarkLayout";
import Learn from "./pages/Learn";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Profile from "./pages/account/Profile";
import Security from "./pages/account/Security";
import Activity from "./pages/account/Activity";
import Statements from "./pages/account/Statements";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/web3" element={<Web3Apps />} />
            <Route path="/learn" element={<Learn />} />
          </Route>
          <Route element={<DarkLayout />}>
            <Route path="/advanced-trade" element={<CoinbaseAdvanced />} />
          </Route>
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Navigate to="/account/profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="activity" element={<Activity />} />
            <Route path="statements" element={<Statements />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
