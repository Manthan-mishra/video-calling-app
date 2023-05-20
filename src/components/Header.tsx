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
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
    const [breadCrumbs, setBreadCrumbs] = useState([{text:"Dashboard"}]);
    const [isResponsive, setIsResponsive] = useState(false);
    const dispatch = useDispatch();
    const section = [{
        items: [
            <Link to="/">
              <EuiText>
                <h2 style={{ padding: "0 1vw" }}>
                  <EuiTextColor color="#0b5cff">Talky-Talky</EuiTextColor>
                </h2>
              </EuiText>
            </Link>,
          ],
    }];
    const responsiveSection = [{
        items: [
            <Link to="/">
              <EuiText>
                <h2 style={{ padding: "0 1vw" }}>
                  <EuiTextColor color="#0b5cff">Talky-Talky</EuiTextColor>
                </h2>
              </EuiText>
            </Link>,
          ],
    }];

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