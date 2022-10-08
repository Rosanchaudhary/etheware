import React from "react";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import LoginScreen from "../LoginScreen/LoginScreen";
import Dashboard from "../Dashboard/Dashboard";

const UsersScreen = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, [auth]);

  if (pending) {
    return <LoadingScreen />;
  } else {
    if (currentUser) {
      return <Dashboard/>;
    } else {
      return (
        <div className="containers">
          <LoginScreen />
          <BottomBar />
        </div>
      );
    }
  }
};

export default UsersScreen;
