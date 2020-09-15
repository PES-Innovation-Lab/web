import NavBar from "./NavBar";
import Head from 'next/head';
import Footer from "./Footer";
import { Container } from '@material-ui/core';

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
        </Head>
        <NavBar active={props.active} search={props.search} searchSettings={props.searchSettings} />
        <div style={layoutStyle}>
            {props.children}
        </div>
        <Footer/>
    </div>
);

export default Layout;