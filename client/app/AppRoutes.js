import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import LandingPage from "../features/home/LandingPage";
import Properties from "../features/property/Properties";
import Property from "../features/property/Property";
import Tasks from "../features/Task/Tasks";
import Unit from "../features/unit/Unit";
import Units from "../features/unit/Units";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:propertyId" element={<Property />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:unitId" element={<Unit />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
