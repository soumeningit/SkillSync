import React from "react";
import { Routes, Route } from "react-router-dom";
import Entry from "./Pages/Entry";
import ChatRoom from "./Components/Chatroom";
import ChatPage from "./Pages/ChatPage";
import Error from "./Components/Error";
import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Pages/SignUpPage";
import OtpPage from "./Pages/OtpPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UpdatePasswordPage from "./Pages/UpdatePasswordPage";
import PricingPage from "./Pages/PricingPage";
import SkillSyncDemo from "./Pages/SkillSyncDemo";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import FeaturesPage from "./Pages/FeaturesPage";
import SecurityPage from "./Pages/SecurityPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsOfServicePage from "./Pages/TermsOfServicePage";
import CareersPage from "./Pages/CareersPage";
import TestimonialsPage from "./Pages/TestimonialPage";
import Dashboard from "./Pages/Dashboard";
import Main from "./Components/Dashboard/main";
import MyProfile from "./Components/Dashboard/Components/MyProfile";
import Setting from "./Components/Dashboard/Components/Setting";
import Activity from "./Components/Dashboard/Components/Activity";
import Task from "./Components/Dashboard/Components/Task";
import CreateWorkspace from "./Components/Dashboard/Components/CreateWorkspace";
import EditProfile from "./Components/Dashboard/Components/EditProfile";
import InvitationPage from "./Pages/InvitationPage";
import TeamMembers from "./Components/Dashboard/Components/TeamMembers";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard/my-profile" element={<Dashboard />} />
      <Route path="/entry" element={<Entry />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/verify-otp" element={<OtpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/update-password" element={<UpdatePasswordPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/app-demo" element={<SkillSyncDemo />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/chat" element={<ChatRoom />} />
      <Route path="/chat-page/:teamId/chat/:userId" element={<ChatPage />} />
      {/* Here userId is teamCreatorId */}
      <Route
        path="/invite/join/team/:teamName/te-id/:teamId/t-id/:tokenId/inv-id/:invitationId/te-ow-id/:teamCreatorId"
        element={<InvitationPage />}
      />
      <Route element={<Main />}>
        <Route path="/dashboard/profile/:userId" element={<MyProfile />} />
        <Route path="/dashboard/settings" element={<Setting />} />
        <Route path="/dashboard/task" element={<Task />} />
        <Route path="/dashboard/activity" element={<Activity />} />
        <Route
          path="dashboard/create-workspace"
          element={<CreateWorkspace />}
        />
        <Route path="/dashboard/edit-profile" element={<EditProfile />} />
        <Route
          path="/dashboard/team-members/:teamId"
          element={<TeamMembers />}
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
