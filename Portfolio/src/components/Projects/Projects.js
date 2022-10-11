// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import notes from "../../Assets/Projects/notes.png";
// import alamy from "../../Assets/Projects/alamy.png";
// import pizza from "../../Assets/Projects/pizza.png";
// import invoice from "../../Assets/Projects/invoice.png";
// import weather from "../../Assets/Projects/weather.png";
// import calc from "../../Assets/Projects/calc.png";
// import quote from "../../Assets/Projects/quote.png";
// import quiz from "../../Assets/Projects/quiz.png";
// import task from "../../Assets/Projects/task.png";
// import school from "../../Assets/Projects/school.png";
// import plan from "../../Assets/Projects/plan.png";
// import chatty from "../../Assets/Projects/chatify.png";
// import url from "../../Assets/Projects/URLShortener.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={pizza}
//               isBlog={false}
//               title="Home Slice"
//               description="A well-balanced meal is a slice in both hands. Home slice service allows customers to pick from different flavours of pizza from the menu according to their taste, place an order. Build using MERN stack and stripe gateway for payment."
//               ghLink="https://github.com/Monishadhanasekar/pizza-app"
//               demoLink="https://awesome-pizza.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={notes}
//               isBlog={false}
//               title="Daily-notes"
//               description="Notes are a great way to keep track of information for yourself build using MERN stack which allows users to create, edit and delete the notes."
//               ghLink="https://github.com/Monishadhanasekar/daily_notes-frontend"
//               demoLink="https://precious-tarsier-9c2eea.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatty}
//               isBlog={false}
//               title="Chatty"
//               description="Personal Chat Room to share resources and hangout with friends build with MERN stack and web socket. Have features which allows user for realtime messaging, set profile picture as well as supports emojis on messages."
//               ghLink="https://github.com/Monishadhanasekar/chatty-frontend"
//               demoLink="https://golden-semifreddo-f29d63.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={invoice}
//               isBlog={false}
//               title="Invoice app"
//               description="Free invoice maker and billing app build using MERN stack. Along with billing, you can use it for inventory management and as an accounting app. This bill book app helps to manage and check inventory status."
//               ghLink="https://github.com/Monishadhanasekar/Invoiceapp-frontend"
//               demoLink="https://funny-moxie-ac22e9.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={url}
//               isBlog={false}
//               title="Miniature"
//               description="Miniature is a tool that creates a short, unique URL that will redirect to the specific website of your choosing. Build using MERN stack."
//               ghLink="https://github.com/Monishadhanasekar/urlshortenerapp-frontend"
//               demoLink="https://superlative-gingersnap-866773.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={alamy}
//               isBlog={false}
//               title="Alamy"
//               description="Monitor your diet easily with this alamy. Build using MERN stack. Users can create their exercise log and can follow it accordingly."
//               ghLink="https://github.com/Monishadhanasekar/Fitness-tracker-frontend"
//               demoLink="https://tourmaline-kangaroo-20b3ef.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={school}
//               isBlog={false}
//               title="School Management"
//               description="A basic web application supporting all CRUD operations to map students to mentors. Build using MERN stack."
//               ghLink="https://github.com/Monishadhanasekar/school-management-app-frontend"
//               demoLink="https://tangerine-medovik-15ebed.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={weather}
//               isBlog={false}
//               title="Weather Finder"
//               description="Weather finder tells us the wind speed, the UV level, humidity levels, and even “feels like” temperature to account for the dreaded wind chill. Build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Weather-finder"
//               demoLink="https://ubiquitous-pothos-4c7038.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={plan}
//               isBlog={false}
//               title="Meal Planner"
//               description="Meal planner offers user-friendly, customizable meal plans that you can tailor to your diet. The app builds your meal plan by taking your calorie preferences and display a day healthy meal plans along with receipes. Build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Meal-planner"
//               demoLink="https://magical-sundae-d616dc.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={quote}
//               isBlog={false}
//               title="Quote Generator"
//               description="Daily quotes will make your day positive. Random quote generator generates random quotes build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Quote-generator"
//               demoLink="https://whimsical-lily-fad7a7.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={calc}
//               isBlog={false}
//               title="Calculator"
//               description="Basic 4-function calculator able to do simple arithmetic, which includes addition, subtraction, multiplication, and division. Build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Calculator"
//               demoLink="https://tubular-creponne-28da58.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={quiz}
//               isBlog={false}
//               title="Quiz Hub"
//               description="Quizzes used to measure growth in knowledge, abilities, or skills. In Quiz hub, users can participate in the quiz based on the categories and the dificulty level. If the wrong answer selected, it will show the correct answer in green box. Final score will be given. Build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Quiz-hub"
//               demoLink="https://neon-pony-4a2765.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={task}
//               isBlog={false}
//               title="Task Manager"
//               description="Keep an eye across all tasks by using this task manager app. With this app users can note down the tasks and can view it whenever wanted. Build using React Js."
//               ghLink="https://github.com/Monishadhanasekar/Task-manager"
//               demoLink="https://ephemeral-kitten-61109f.netlify.app/"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
