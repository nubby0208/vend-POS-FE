import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SidebarList from "./SidebarList";

const FullLayout = () => {

  let location = useLocation();
  const [tabId, setTabId] = useState('');
  const [isBlack, setIsBlack] = useState(false)

  const Paths = [
    {
      tabId: 'tab_1',
      path: 'sell'
    },
    {
      tabId: 'tab_2',
      path: 'online'
    },
    {
      tabId: 'tab_3',
      path: 'reporting'
    },
    {
      tabId: 'tab_4',
      path: 'catalog'
    },
    {
      tabId: 'tab_5',
      path: 'inventory'
    },
    {
      tabId: 'tab_6',
      path: 'customers'
    },
    {
      tabId: 'tab_7',
      path: 'setup'
    }
  ]

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const getTabId = (id) => {
    if(id == 'tab_1')
      setIsBlack(true)
    else
      setIsBlack(false)
    setTabId(id)
  }

  useEffect(() => {
    const pathname = location.pathname.split('/')[1]
    const goPage = Paths.find((v) => v.path === pathname)
    if(goPage){
      setTabId(goPage.tabId)
      getTabId(goPage.tabId)
    }
  }, [])
    

  return (
    <main>
      {/********header**********/}
      <Header />
      <div className={isBlack ? "pageWrapper d-lg-flex blackbackground" : "pageWrapper d-lg-flex"} style={{paddingTop: '48px'}}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar getTabId = {getTabId} />
          <SidebarList tabId = {tabId} />
          <div className=" sidebarToggle" onClick={() => showMobilemenu()} >
            <i className="bi bi-x toggleColor"></i>
          </div>
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <div >
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
