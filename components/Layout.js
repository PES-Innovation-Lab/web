// components/Layout.js

import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => (
    <div className="Layout" style={layoutStyle}>
        <Header />
        <div className="content" style={contentStyle}>
            {props.children}
        </div>
        <NavBar />
    </div>
);

export default Layout;