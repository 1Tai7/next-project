// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import type { JSX } from "react";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
}

function PublicRoute({ children }: { children: JSX.Element }) {
  const token = sessionStorage.getItem("token");
  return token ? <Navigate to="/home" replace /> : children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Si hay token → redirige a /home */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        {/* Si no hay token → bloquea acceso a /home */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
