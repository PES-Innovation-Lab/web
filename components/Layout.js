import NavBar from "./NavBar";;
import Footer from "./Footer";
import Head from "next/head";


const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
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
            <link rel="shortcut icon" href={`${process.env.ASSET_PREFIX}/images/favicon.ico`} />
        </Head>
        <NavBar active={props.active} search={props.search} searchSettings={props.searchSettings} />
        <div style={layoutStyle}>
            {props.children}
        </div>
        <Footer/>
    </div>
);

export default Layout;