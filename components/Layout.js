import Header from "./Header";
import NavBar from "./NavBar";
import Head from 'next/head';

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

const Layout = (props) => (
    <div style={layoutStyle}>
        <Head>
            <title>{props.title}</title>
        </Head>
        <NavBar active={props.active}/>
        <div className="content" style={contentStyle}>
            {props.children}
        </div>
    </div>
);

export default Layout;