import { Route, Routes } from "react-router-dom";

import { Emails } from "./admin/pages/Emails";
import { ListContact } from "./admin/pages/ListContact";
import { AuthProvider } from "./context/auth";
import { Admin } from "./pages/Admin";
import { Announce } from "./pages/Announce";
import { Car } from "./pages/Car";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { DetailsCar } from "./pages/DetailsCar";
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

        <Route
          path="/carros"
          element={
            <PublicRoute>
              <Car />
            </PublicRoute>
          }
        />

        <Route
          path="/carros/detalhes/:id"
          element={
            <PublicRoute>
              <DetailsCar />
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

          <Route
            path="/dashboard/emails"
            element={
              <PrivateRoute>
                <Emails />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
