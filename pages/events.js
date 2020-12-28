 // pages/events.js
import Layout from "../components/Layout";
import { Container, Typography } from "@material-ui/core";
import "../css/events.css";
import Link from "next/link";

function Events() {
  return (
    <Layout title={"PIL | Events"} active={"Events"}>
      <Container>
        <Typography className={"pageHeader"}>What we do</Typography>
        <br></br>
        <Typography
          style={{ textAlign: "center", color: "white", fontSize: "1.4rem" }}
        >
          We've got the perfect platform and events for your skills and ideas to
          explore new heights
        </Typography>

        <div className="eventSection">
          <div className="eventSectionImage">
            <img
              src={`${process.env.ASSET_PREFIX}/images/mlab/hackathon.png`}
            />
          </div>
          <div className="eventSectionText">
            <Link
              className="eventPageLink"
              href={`${process.env.ASSET_PREFIX}/hashcode`}
            >
              <Typography className="eventHeading">HashCode</Typography>
            </Link>
            <Typography className="eventText">
              HashCode is the annual 24-hour hackathon organised by the Lab,
              with students proposing interesting ideas and presenting projects
              from several domains. The hackathon also provides a learning
              platform to participating teams, with mentors and members of
              academia assisting them. Esteemed personalities from different
              industrial backgrounds come to judge the show, evaluating projects
              from all possible angles. HashCode 2020 is the 9th edition of the
              annual hackathon. The winners bag cash prizes worth up to one lakh
              indian rupees.
            </Typography>
          </div>
        </div>

        <div className="eventSection">
          <div className="eventSectionText">
            <Link
              className="eventPageLink"
              href={`${process.env.ASSET_PREFIX}/summer`}
            >
              <Typography className="eventHeading">
                Summer Internship Program
              </Typography>
            </Link>
            <Typography className="eventText">
              We, at PES Innovation Lab, organise an annual summer internship
              for new recruits to work on cutting-edge research projects in
              varied domains such as Robotics, Machine Learning, Artificial
              Intelligence, Sensor Networking, Virtual Reality, Brain-Computer
              Interface, Cloud computing and App Development. The results and
              prototype demonstrations of these projects are presented at
              Roadshow, an event attended by a large number of students across
              disciplines at PES University.
            </Typography>
          </div>
          <div className="eventSectionImage">
            <img
              src={`${process.env.ASSET_PREFIX}/images/mlab/internship.png`}
            />
          </div>
        </div>

        <div className="eventSection">
          <div className="eventSectionImage">
            <img src={`${process.env.ASSET_PREFIX}/images/mlab/roadshow.png`} />
          </div>
          <div className="eventSectionText">
            <Link
              className="eventPageLink"
              href={`${process.env.ASSET_PREFIX}/roadshow`}
            >
              <Typography className="eventHeading">Roadshow</Typography>
            </Link>
            <Typography className="eventText">
              Roadshow is an Innovation Expo organized by the Lab each year
              after the Summer Internship Program. PES Lab summer interns
              present the projects that they have worked on during the
              internship. This serves as a great platform for students from PES
              University to interact with members and gain knowledge about the
              cutting-edge technologies that we work on. Roadshow also serves as
              a platform where our interns receive constructive feedback and
              further insights on their projects from experienced professionals,
              professors and their peers.
            </Typography>
          </div>
        </div>

        <div className="eventSection">
          <div className="eventSectionText">
            <Link
              className="eventPageLink"
              href={`${process.env.ASSET_PREFIX}/incito`}
            >
              <Typography className="eventHeading">Incito</Typography>
            </Link>
            <Typography className="eventText">
              Incito is the ideathon organized by PES Lab. It is a conglomerate
              of brilliant minds, all incubating innovative ideas. The
              shortlisted 10 best ideas battle it out in the final round to win
              cash prizes up to Rs. 40,000 in all. The participants test the
              design and feasibility of their ideas without the constraints of
              implementing the same, hence encouraging innovative thinking. The
              best ideas are also provided the platform and resources to
              implement their ideas and make these a reality.
            </Typography>
          </div>
          <div className="eventSectionImage">
            <img src={`${process.env.ASSET_PREFIX}/images/mlab/ideathon.png`} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Events;
