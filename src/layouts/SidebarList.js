import { Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import './include.css';

const navigation = [
        {
                tabId: "tab_1",
                title: "Sell",
                href: "/sell/index",
        },
        {
                tabId: "tab_1",
                title: "Open/Close",
                href: "/sell/openClose",
        },
        {
                tabId: "tab_1",
                title: "Sales history",
                href: "/sell/saleHistory",
        },
        {
                tabId: "tab_1",
                title: "Cash Management",
                href: "/sell/cashManagement",
        },
        {
                tabId: "tab_1",
                title: "Status",
                href: "/sell/status",
        },
        {
                tabId: "tab_1",
                title: "Settings",
                href: "/sell/settings",
        },
        {
                tabId: "tab_1",
                title: "Quotes",
                href: "/sell/quotes",
        },
        {
                tabId: "tab_2",
                title: "Overview",
                href: "/online/overview",
        },
        {
                tabId: "tab_2",
                title: "WebStore",
                href: "/online/webStore",
        },
        {
                tabId: "tab_2",
                title: "Facebook",
                href: "/online/facebook",
        },
        {
                tabId: "tab_2",
                title: "Instagram",
                href: "/online/instagram",
        },
        {
                tabId: "tab_2",
                title: "TikTok",
                href: "/online/tikTok",
        },
        {
                tabId: "tab_2",
                title: "Settings",
                href: "/online/settings",
        },
        {
                tabId: "tab_3",
                title: "Retail Dashboard",
                href: "/reporting/retailDashboard",
        },
        {
                tabId: "tab_3",
                title: "Sales Reports",
                href: "/reporting/salesReports",
        },
        {
                tabId: "tab_3",
                title: "Inventory Reports",
                href: "/reporting/inventoryReports",
        },
        {
                tabId: "tab_3",
                title: "Payment Reports",
                href: "/reporting/paymentReports",
        },
        {
                tabId: "tab_3",
                title: "Register Closures",
                href: "/reporting/registerClosures",
        },
        {
                tabId: "tab_3",
                title: "Gift Card Reports",
                href: "/reporting/giftCardReports",
        },
        {
                tabId: "tab_3",
                title: "Store Credit Reports",
                href: "/reporting/storeCreditReports",
        },
        {
                tabId: "tab_3",
                title: "Tax Reports",
                href: "/reporting/taxReports",
        },
        {
                tabId: "tab_4",
                title: "Products",
                href: "/catalog/products",
        },
        {
                tabId: "tab_4",
                title: "Promotions",
                href: "/catalog/promotions",
        },
        {
                tabId: "tab_4",
                title: "Price Books",
                href: "/catalog/priceBooks",
        },
        {
                tabId: "tab_4",
                title: "Brands",
                href: "/catalog/brands",
        },
        {
                tabId: "tab_4",
                title: "Suppliers",
                href: "/catalog/suppliers",
        },
        {
                tabId: "tab_4",
                title: "Product Tags",
                href: "/catalog/productTags",
        },
        {
                tabId: "tab_4",
                title: "Product Types",
                href: "/catalog/productTypes",
        },
        {
                tabId: "tab_5",
                title: "Stock Control",
                href: "/inventory/stockControl",
        },
        {
                tabId: "tab_5",
                title: "Inventory Counts",
                href: "/inventory/inventoryCounts",
        },
        {
                tabId: "tab_5",
                title: "Fulfillments",
                href: "/inventory/fulfillments",
        },
        {
                tabId: "tab_5",
                title: "Serial Numbers",
                href: "/inventory/serialNumbers",
        },
];

const SidebarList = (props) => {
        let location = useLocation();
        
        const printData = (navi, index) => {
                if(props.tabId == navi.tabId) {
                        return <NavItem key={index} className="sidenav-bg" style={{width:'165px'}}>
                                        <Link
                                                to={navi.href}
                                                className={
                                                        location.pathname === navi.href
                                                                ? "active nav-link py-3 sidebarlist"
                                                                : "nav-link text-secondary py-3 sidebarlist"
                                                }
                                        >
                                                <span className="d-inline-block ">{navi.title}</span>
                                        </Link>
                                </NavItem>
                }
                
        }
        
        return (
                <>
                { props.tabId && 
                        <div style={{background: 'white', paddingTop: '15px'}}>
                                <Nav vertical className="sidebarNav">
                                        { navigation.map((navi, index) => (
                                                printData(navi, index)
                                        ))}
                                </Nav>
                        </div>
                }
                </>

        );
};

export default SidebarList;
