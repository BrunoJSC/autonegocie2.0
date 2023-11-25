import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { Admin } from "./pages/Admin";
import { Announce } from "./pages/Announce";
import { Contact } from "./pages/Contact";
import { Finance } from "./pages/Finance";
import { Home } from "./pages/Home";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/contato"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PublicRoute>
              <Admin />
            </PublicRoute>
          }
        />

        <Route
          path="/anunciar"
          element={
            <PublicRoute>
              <Announce />
            </PublicRoute>
          }
        />

        <Route
          path="/finananciamento"
          element={
            <PublicRoute>
              <Finance />
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
