import { Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import SignUpPage from "./pages/AuthPage/SignUpPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import EmailVerificationPage from "./pages/AuthPage/EmailVerificationPage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/AuthPage/ResetPasswordPage";

import DashboardPage from "./pages/AuthPage/DashboardPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { CurriculumPage } from "./pages/CurriculumPage/CurriculumPage";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<MainLayout />}>
      <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
      </Route>

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
