// Imports
import { useContext, useEffect } from "react";
import { HeaderH1Text } from "../main.jsx";
import { Link, useLocation } from "react-router-dom";

// Use context function from react to change h1 text
// added useLocation to remove button on create page without shifting layout
const Header = () => {
  const { HeaderText, headerBtnRight, setHeaderBtnRight } = useContext(HeaderH1Text);
  const location = useLocation();

  // To set the header text, header button text, and disabled state for create page
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderBtnRight({ text: "", to: "", disabled: true });
        break;
      case "/patients":
        setHeaderBtnRight({ text: "Admit", to: "/", disabled: false });
        break;
      default:
        if (location.pathname.includes("details")) {
          setHeaderBtnRight({ text: "Update", to: location.pathname.replace("details", "edit"), disabled: false });
        } else if (location.pathname.includes("edit")) {
          setHeaderBtnRight({ text: "Details", to: location.pathname.replace("edit", "details"), disabled: false });
        }
        break;
    }
  }, [location, setHeaderBtnRight]);

  // conditional to remove background color, border, and drop shadow for create page
  // this way element still renders but doesn't show so layout doesn't change
  const btnRightStyles = location.pathname === "/" ? { backgroundColor: 'transparent', border: 'none', boxShadow: 'none' } : {};

  return (
    <div className="headerContainer">
      <Link to="/patients" className="headerBtnLeft">
        Home
      </Link>
      <h1 className="headerText">{HeaderText}</h1>
      <Link 
        to={headerBtnRight.to} 
        className="headerBtnRight" 
        disabled={headerBtnRight.disabled} 
        style={btnRightStyles}
      >
        {headerBtnRight.text}
      </Link>
    </div>
  );
};

export default Header;
