import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}


function Avatar(){
  return <img className="avatar" src="natrix.jpg" alt="Han Lynn Aung" />
}

function Intro(){
  return (<div>
    <h1>Han Lynn Aung</h1>
    <p>Immersed in the dynamic realm of Computer Science and Technology,
       I am a driven, self-motivated learner. Through independent study,
        I uncover complexities, weaving threads of knowledge into a tapestry of dedication.
         I thrive in collaborative settings, harmonizing with teams to bring concepts to life. 
         My versatility spans backend and frontend, embracing Spring's elegance and React's creativity.
          Inquisitiveness guides me, while adaptability paves the way for success. As a full-stack enthusiast,
           I bridge concepts and reality with passion and proficiency,
            shaping the future, one line of code at a time.</p>
  </div>)
}

function SkillList(){
  return (<div className="skill-list">
    <Skill skill = "JavaSE" emoji = "💪" color = "blue" />
    <Skill skill = "JavaEE" emoji = "👶" color = "red" />
    <Skill skill = "Spring" emoji = "💪" color = "green" />
    <Skill skill = "HTML + CSS + Bootstrap" emoji = "💪" color = "orange" />
    <Skill skill = "SQL+MySQL" emoji = "💪" color = "blue" />
    <Skill skill = "Javascript" emoji = "💪" color = "blue" />
    <Skill skill = "React" emoji = "👶" color = "red" />
  </div>);
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor : props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );

}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
