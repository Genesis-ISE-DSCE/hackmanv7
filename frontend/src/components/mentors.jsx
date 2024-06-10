import React from "react";
import "../css/mentors.css";
import Farhaan from "../assets/farhaan bukhsh.jpg";
import Pratik from "../assets/Pratik Anurag.jpeg";
import Ashish from "../assets/Ashish Kumar Mishra.jpeg";
import Ritik from "../assets/Ritik Dutt.jpg";
import Ashutosh from "../assets/Ashutosh Pandey.jpeg";
import Sreeniketh from "../assets/Sreeniketh Madgula.jpeg";

const Mentors = () => {
  return (
      <div className="mentors-container">
          <h1 className="mentors-heading">M E N T O R S</h1>
          <div className="upper-row">
              <MentorCard
                  imgSrc={Farhaan}
                  name="Farhaan Bukhsh"
                  designation="Senior Software Engineeer at OpenCraft,Co-Founder at Metamind"
              />
              <MentorCard
                  imgSrc={Pratik}
                  name="Pratik Anurag"
                  designation="Software Engineer at PhonePe"
              />
              <MentorCard
                  imgSrc={Ashish}
                  name="Ashish Kumar"
                  designation="Software Developer at Razor Network"
              />
          </div>
          <div className="lower-row">
              <MentorCard
                  imgSrc={Ritik}
                  name="Ritik Dutt"
                  designation="Software Developer at Amazon"
              />
              <MentorCard
                  imgSrc={Ashutosh}
                  name="Ashutosh Pandey"
                  designation="Software System Designer at AMD"
              />
              <MentorCard
                  imgSrc={Sreeniketh}
                  name="Sreeniketh Madgula"
                  designation="Associate Software Engineer at Sentinelone"
              />
          </div>
      </div>
  );
};

const MentorCard = ({ imgSrc, name, designation }) => {
  return (
      <div className="mentor-card">
          <img src={imgSrc} alt={name} className="mentor-img" />
          <h3 className="mentor-name">{name}</h3>
          <p className="mentor-designation">{designation}</p>
      </div>
  );
};

export default Mentors;