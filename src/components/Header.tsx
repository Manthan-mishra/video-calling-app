import React,{useState,useEffect} from 'react';
import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiText,
    EuiTextColor,
  } from "@elastic/eui";
  import {getCreateMeetingBreadCrumbs} from "../utils/breadCrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useAppSelector } from "../app/hooks";
import { changeTheme } from "../app/slices/AuthSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
    const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
    const [breadCrumbs, setBreadCrumbs] = useState([{text:"Dashboard"}]);
    const [isResponsive, setIsResponsive] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      const { pathname } = location;
      if (pathname === "/create") 
      setBreadCrumbs(getCreateMeetingBreadCrumbs(navigate));
      }, [location, navigate]);

    const logout = () => {
      signOut(firebaseAuth);
    };

    const invertTheme = () => {
      const theme = localStorage.getItem("zoom-theme");
      localStorage.setItem("zoom-theme", theme === "light" ? "dark" : "light");
      dispatch(changeTheme({ isDarkTheme: !isDarkTheme }));
    };

    const section = [
      {
        items: [
            <Link to="/">
              <EuiText>
                <h2 style={{ padding: "0 1vw" }}>
                  <EuiTextColor color="#0b5cff">Talky-Talky</EuiTextColor>
                </h2>
              </EuiText>
            </Link>,
          ],
    },
    
      {
        items: [
          <>
            {userName ? (
              <EuiText>
                <h3>
                  <EuiTextColor color="white">Hello, </EuiTextColor>
                  <EuiTextColor color="#0b5cff">{userName}</EuiTextColor>
                </h3>
              </EuiText>
            ) : null}
          </>,
        ],
      },
      {
        items: [
          <EuiFlexGroup
            justifyContent="center"
            alignItems="center"
            direction="row"
            style={{ gap: "2vw" }}
          >
            
             <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            {isDarkTheme ? (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="sun"
                display="fill"
                size="s"
                color="warning"
                aria-label="theme-button-light"
              />
            ) : (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="moon"
                display="fill"
                size="s"
                color="ghost"
                aria-label="theme-button-dark"
              />
            )}
          </EuiFlexItem>
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            <EuiButtonIcon
              onClick={logout}
              iconType="lock"
              display="fill"
              size="s"
              aria-label="logout-button"
            />
          </EuiFlexItem>
        </EuiFlexGroup>,
      ],
      }, 
  ];
    const responsiveSection = [
      {
        items: [
            <Link to="/">
              <EuiText>
                <h2 style={{ padding: "0 1vw" }}>
                  <EuiTextColor color="#0b5cff">Talky-Talky</EuiTextColor>
                </h2>
              </EuiText>
            </Link>,
          ],
    },
    {
      items: [
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          direction="row"
          style={{ gap: "2vw" }}
        >
          
           <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
          {isDarkTheme ? (
            <EuiButtonIcon
              onClick={invertTheme}
              iconType="sun"
              display="fill"
              size="s"
              color="warning"
              aria-label="theme-button-light"
            />
          ) : (
            <EuiButtonIcon
              onClick={invertTheme}
              iconType="moon"
              display="fill"
              size="s"
              color="ghost"
              aria-label="theme-button-dark"
            />
          )}
        </EuiFlexItem>
        <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
          <EuiButtonIcon
            onClick={logout}
            iconType="lock"
            display="fill"
            size="s"
            aria-label="logout-button"
          />
        </EuiFlexItem>
      </EuiFlexGroup>,
    ],
    }  
  
  ];

    useEffect(() => {
        if (window.innerWidth < 480) {
          setIsResponsive(true);
        }
      }, []);

  return (
    <>
      <EuiHeader
        style={{ minHeight: "8vh" }}
        theme="dark"
        sections={isResponsive ? responsiveSection : section}
      />
      <EuiHeader
        style={{ minHeight: "8vh" }}
        sections={[
          {
            breadcrumbs: breadCrumbs,
          },
        ]}
      />
    </>
  )
}

export default Header;