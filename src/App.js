import React from "react";
import MainScreen from "./screen/mainScreen";
import { CssBaseline } from "@mui/material";
import AppErrorBoundry from "./App.errorBoundry";

// import AppFirebase from "./App.firebase"; //For Push Notification thing

const App = () => {
  return (
    <AppErrorBoundry>
      <CssBaseline />
      <MainScreen />
    </AppErrorBoundry>
  );
};
export default App;
