import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FloatingShape from "./components/authPageComponents/FloatingShape";
import ErrorDisplay from "./components/globalComponents/ErrorDisplay"; // Import the error display component

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {CurriculumPage} from "./pages/CurriculumPage/CurriculumPage";
import {GameZonePage} from "./pages/GameZonePage/GameZonePage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { ParentDashboard } from "./pages/ParentDashboard/ParentDashboard";
function App() {
  const location = useLocation();
  const isNoFloating = [
    "/curriculum", 
    "/home", 
    "/game-zone", 
    "/settings", 
    "/parent-dashboard"
  ].includes(location.pathname);

  return (
    <div
  //     className="min-h-screen bg-gradient-to-br
  // from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Error display will appear over everything when there's an error */}
      <ErrorDisplay />

      {!isNoFloating && (
        <>
          <FloatingShape
            color="bg-[#6499E9]"
            size="w-64 h-64"
            top="-5%"
            left="10%"
            delay={0}
          />
          <FloatingShape
            color="bg-[#9EDDFF]"
            size="w-48 h-48"
            top="70%"
            left="80%"
            delay={5}
          />
          <FloatingShape
            color="bg-[#A6F6FF]"
            size="w-32 h-32"
            top="40%"
            left="-10%"
            delay={2}
          />
        </>
      )}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/game-zone" element={<GameZonePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
