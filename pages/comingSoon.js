import Layout from "../components/Layout";
import { Container, Typography } from "@material-ui/core";

function comingSoon() {
  return (
    <Layout title={"PIL | Coming Soon"}>
      <Container style={{display:"flex",justifyContent: "center", alignItems: "center", minHeight: "50vh"}}>
        <Typography
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "1.4rem",
            fontWeight: "Bold",
          }}
        >
          Coming Soon...
        </Typography>
      </Container>
    </Layout>
  );
}

export default comingSoon;
