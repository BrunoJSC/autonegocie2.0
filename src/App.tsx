import { Route, Routes } from "react-router-dom";

import { ListContact } from "./admin/pages/ListContact";
import { AuthProvider } from "./context/auth";
import { Admin } from "./pages/Admin";
import { Announce } from "./pages/Announce";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { Finance } from "./pages/Finance";
import { Forms } from "./pages/Forms";
import { Home } from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
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

        <Route
          path="/formularios"
          element={
            <PublicRoute>
              <Forms />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard/contatos"
            element={
              <PrivateRoute>
                <ListContact />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
