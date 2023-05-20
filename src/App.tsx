import React from 'react';
import { EuiProvider } from '@elastic/eui';
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
  return (
    <EuiProvider>
       <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/create" element={<CreateMeeting />} /> */}
            {/* <Route path="/create1on1" element={<OneOnOneMeeting />} /> */}
            {/* <Route path="/videoconference" element={<VideoConference />} />
            <Route path="/mymeetings" element={<MyMeetings />} />
            <Route path="/join/:id" element={<JoinMeeting />} />
            <Route path="/meetings" element={<Meeting />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Login />} />
          </Routes>
    </EuiProvider>
  );
}

export default App