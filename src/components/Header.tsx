import React,{useState,useEffect} from 'react';
import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiText,
    EuiTextColor,
  } from "@elastic/eui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
    const [breadCrumbs, setBreadCrumbs] = useState([{text:"Dashboard"}]);
    const [isResponsive, setIsResponsive] = useState(false);
    const dispatch = useDispatch();

    const logout = () => {
      signOut(firebaseAuth);
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