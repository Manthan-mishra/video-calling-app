import React,{useState,useEffect} from 'react';
import { EuiThemeColorMode } from "@elastic/eui/src/services/theme";
import { EuiProvider,EuiThemeProvider } from '@elastic/eui';
import ThemeSelector from "./components/ThemeSelector";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
// import CreateMeeting from "./pages/CreateMeeting";
import Dashboard from "./pages/Dashboard";
// import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
// import Meeting from "./pages/Meeting";
// import MyMeetings from "./pages/MyMeetings";
// import OneOnOneMeeting from "./pages/OneOnOneMeeting";
// import VideoConference from "./pages/VideoConference";


const App = () => {

  const dispatch = useDispatch();
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  const [isInitialEffect, setIsInitialEffect] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("zoom-theme");
    if (theme) {
      setTheme(theme as EuiThemeColorMode);
    } else {
      localStorage.setItem("zoom-theme", "light");
    }
  }, []);

  useEffect(() => {
    if (isInitialEffect) setIsInitialEffect(false);
    else {
      window.location.reload();
    }
  }, [isDarkTheme]);

  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };
  return (
    <ThemeSelector>
    <EuiProvider  colorMode={theme}>
       <EuiThemeProvider modify={overrides}>

       <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Login />} />
          </Routes>
       </EuiThemeProvider>
    </EuiProvider>
    </ThemeSelector>
  );
}

export default App