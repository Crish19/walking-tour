import React from "react";
import "./about.css";
import photo from "../../media/stad2.jpg";
import photo2 from "../../media/chris.PNG";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="title">
        <h2>About Us</h2>
      </div>
      <div className="title-underline-about"></div>
      <div className="about-inf">
        <div className="image">
          <img src={photo} alt="luis" />
        </div>

        <div className="vision-profile">
          <div className="vision-profile-text">
            <p className="title-vision">Our Vision Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Sed enim quod est officia ut 
            ipsum?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iusto architecto omnis molestias? Cum iste perspiciatis velit
              fugiat vel sequi incidunt dolorem commodi voluptate ullam! Esse
              sunt doloribus repudiandae labore. Doloribus obcaecati tempora ad,
              reiciendis voluptas dicta ea quod deleniti, magnam nemo placeat.
              Neque, dolores mollitia culpa praesentium blanditiis ullam libero
              deleniti harum nobis ratione autem laborum voluptatem expedita
              amet recusandae. Reiciendis omnis a voluptatum ullam doloribus
              voluptates cum tempora.
            </p>
          </div>

          <div className="about-us-card-container">
            <div className="about-us-card">
              <img src={photo} alt="Cristhian" className="about-us-image" />
              <h3>Cristhian</h3>
              <p>
                I am a professional from Colombia with a Master's degree in
                Business Administration. I came to Sweden to find better job
                opportunities and to improve my quality of life. However,
                finding a job in my field has proven to be difficult. That's why
                I decided to start this small business with my partner Jorge, to
                help other professionals like myself who are struggling to find
                work in Stockholm.
              </p>
            </div>
            <div className="about-us-card">
              <img src={photo2} alt="Jorge" className="about-us-image" />
              <h3>Jorge</h3>
              <p>
                I am a professional from Peru with a Master's degree in Computer
                Science. I came to Sweden to improve my skills in the technology
                field and to find better job opportunities. However, finding a
                job in my field has also proven to be difficult. That's why I
                decided to join Cristhian in this small business, to help other
                professionals like ourselves who are struggling to find work in
                Stockholm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
