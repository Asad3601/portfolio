import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import multi from "../../Assets/Projects/searchbar.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import ecom from "../../Assets/Projects/ecom.png";
import suicide from "../../Assets/Projects/suicide.png";
import budget from "../../Assets/Projects/b.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Serenabeds Ecommerce"
              description="This eCommerce platform is built with React and Next.js for the frontend and Node.js with Express for the backend. It features an admin panel for managing products, including adding, updating, and deleting products with variations based on size, fabric, and fabric color. Users can browse a variety of furniture products, add items to their cart, and proceed to checkout. The system includes user authentication, order placement, and order tracking. Customers can view their order history and status in their profile. The platform ensures a seamless shopping experience with efficient product and order management"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://d33hovo81lbpxc.cloudfront.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Budget Tracker"
              description="This budget tracking system helps companies manage expenses efficiently. Employees can sign up with a total budget and log project expenses with dates. The system calculates the percentage of expenses from the total budget and restricts further additions once the budget limit is reached. Users can analyze their expenses through a line bar graph. The profile section includes personal, educational, and professional details. Real-time notifications (Socket.io) inform users when the admin adds, updates, or deletes expenses. Admins can manage employees, track their expenses, and modify or delete expense records, ensuring streamlined financial oversight."
              ghLink="https://github.com/Asad3601/Budget-Tracker"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tour Booking Management"
              description="This tour booking system enables users to explore and book tours seamlessly. Users can view detailed tour information, including destination, duration, price, images, departure location, and return day. The system integrates with the OpenWeatherMap API to display weather conditions during the tour dates. Users can book tours by providing their details (name, email, number of adults and children) and proceed with secure payments via Stripe. Additionally, users can manage their bookings by editing, updating, or canceling them. Admins have full control over tour management, including adding and deleting tours and destinations, ensuring a smooth and efficient booking experience."
              ghLink="https://github.com/Asad3601/Booking-Management"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multi}
              isBlog={false}
              title="Multi Jobs Platform"
              description="This final year project is a job aggregator platform that scrapes job listings from Pakistan's top job platforms, including Indeed, Byat, Job Ustad, and more. The platform displays job details such as job title, description, company name, and job URL based on user search queries. Users can save job listings along with all relevant details, and the job URL provides a direct link to the source website for more information. This project offers a streamlined way for users to search, track, and apply for jobs across multiple platforms in one place."
              ghLink="https://github.com/Asad3601/multi-jobs-fyp-"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
