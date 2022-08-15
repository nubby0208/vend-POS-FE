import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { AiTwotonePrinter, AiOutlineAreaChart, AiTwotoneSetting } from "react-icons/ai";
import { FaTags, FaBoxes } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";

const navigation = [
  {
    id: "tab_0",
    title: "Home",
    to: "/",
    icon: <BiHome/>,
  },
  {
    id: "tab_1",
    title: "Sell",
    to: "sell/index",
    icon: <AiTwotonePrinter />,
  },
  {
    id: "tab_2",
    title: "Online",
    to: "online/overview",
    icon: <GoGlobe/>,
  },
  {
    id: "tab_3",
    title: "Reporting",
    to: "reporting/retailDashboard",
    icon: <AiOutlineAreaChart/>,
  },
  {
    id: "tab_4",
    title: "Catalog",
    to: "catalog/products",
    icon: <FaTags/>,
  },
  {
    id: "tab_5",
    title: "Inventory",
    to: "inventory/stockControl",
    icon: <FaBoxes/>,
  },
  {
    id: "tab_6",
    title: "Customers",
    to: "",
    icon: <FiUsers />,
  },
  {
    id: "tab_8",
    title: "Setup",
    to: "",
    icon: <AiTwotoneSetting/>,
  },
];

const Sidebar = (props) => {
  const changeBackground = (id) => {
    props.getTabId(id)
    var elems = document.querySelectorAll(".nav-link.text-secondary.py-3.active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
    document.getElementById(id).className += " active"
  }

  return (
    <div>
      <div>
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg sideNavTab" onClick={() => changeBackground(navi.id)}>
              <Link id={navi.id} to={navi.to} className="nav-link text-secondary py-3">
                <span>{navi.icon}</span>
                <span className="d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>

    </div>

  );
};

export default Sidebar;
