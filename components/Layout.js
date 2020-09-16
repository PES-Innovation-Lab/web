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


function Layout(props){
    const background_img = `${process.env.ASSET_PREFIX}/images/mlab/prism.png`;
    const intro_img = `${process.env.ASSET_PREFIX}/images/mlab/intro.jpg`;
    const hws_img = `${process.env.ASSET_PREFIX}/images/mlab/hws.jpg`;
    return(
    <div style={layoutStyle}>
        <Head>
            <title>{props.title}</title>
            <link rel="shortcut icon" href={`${process.env.ASSET_PREFIX}/images/favicon.ico`} />
            <style>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    background-image: url(${background_img});
                    background-repeat: repeat;
                    min-height: 100vh;
                }
                .introSection {
                    background-image: url(${intro_img});
                    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
                }
                .statSection {
                    background-image: url(${hws_img});
                    padding: 70px 0px;
                    clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
                }
                                
            `}</style>
        
        </Head>
        <NavBar active={props.active} search={props.search} searchSettings={props.searchSettings} />
        <div style={layoutStyle}>
            {props.children}
        </div>
        <Footer/>
    </div>
    );
}

export default Layout;