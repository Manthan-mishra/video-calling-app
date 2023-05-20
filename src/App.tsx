import React from 'react';
import { EuiProvider,EuiThemeProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css";
import { Route, Routes } from "react-router-dom";
// import CreateMeeting from "./pages/CreateMeeting";
import Dashboard from "./pages/Dashboard";
// import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
// import Meeting from "./pages/Meeting";
// import MyMeetings from "./pages/MyMeetings";
// import OneOnOneMeeting from "./pages/OneOnOneMeeting";
// import VideoConference from "./pages/VideoConference";


const App = () => {
  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };
  return (
    <EuiProvider>
       <EuiThemeProvider modify={overrides}>

       <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Login />} />
          </Routes>
       </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App