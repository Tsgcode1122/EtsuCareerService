// src/App.js
import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Home from "./Pages/Home";
import Alumni from "./Pages/Alumni";
import Student from "./Pages/Student";
import FacultyStaff from "./Pages/FacultyStaff";
import Families from "./Pages/Families";
import PasswordReset from "./Authentication/PasswordReset";
import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";

import LoginPage from "./Authentication/LoginPage";
import ResetPasswordPage from "./Authentication/ResetPasswordPage";
import RegisterPage from "./Authentication/RegisterPage";
import WorkInProgress from "./FixedComponent/WorkInProgress";
import Staff from "./Component/Staff";
// Global styles

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    /* background-color:#121933 !important; */
 
  font-family: "Roboto", sans-serif;
    min-height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StyledResult = styled(Result)`
  .ant-result-title {
    color: white !important;
  }
  .ant-result-subtitle {
    color: white !important;
  }
`;

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <StyledResult
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "register/:referralId", element: <Register /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },

      { path: "work-in-progress", element: <WorkInProgress /> },
      { path: "alumni", element: <Alumni /> },
      { path: "student", element: <Student /> },
      { path: "faculty-staff", element: <FacultyStaff /> },
      { path: "families", element: <Families /> },

      { path: "*", element: <InvalidPath /> },
      // { path: "/admin/*", element: <ProtectedAdminDashboardPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
