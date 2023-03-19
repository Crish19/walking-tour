import React from "react";
import "./stockholm.css";
import photo1 from "../../media/soder1.jpg";
import photo2 from "../../media/soder2.jpg";
import photo3 from "../../media/stad.JPG";
import photo4 from "../../media/stad2.jpg";
import photo5 from "../../media/stad.JPG";
import photo6 from "../../media/tunnel.GIF";

function Stockholm() {
  return (
    <div className="stockholm-container" id="stockholm">
      <div className="title">
        <h2>Stockholm</h2>
      </div>
      <div className="title-underline-stockholm"></div>

      <div className="text-photo-container">
        <div className="text-container-video">
          <div className="text-container">
            <h2>Discover <br/>Stockholm</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut harum
              blanditiis suscipit nesciunt delectus illo, minus dolorum porro
              deleniti itaque perferendis ex et aliquam hic soluta accusamus in!
              Suscipit praesentium sit aliquid. Quasi saepe cum necessitatibus
              magni quod, distinctio veritatis!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut harum
              blanditiis suscipit nesciunt delectus illo, minus dolorum porro
              deleniti itaque perferendis ex et aliquam hic soluta accusamus in!
              Suscipit praesentium sit aliquid. Quasi saepe cum necessitatibus
              magni quod, distinctio veritatis!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut harum
              blanditiis suscipit nesciunt delectus illo, minus dolorum porro
              deleniti itaque perferendis ex et aliquam hic soluta accusamus in!
              Suscipit praesentium sit aliquid. Quasi saepe cum necessitatibus
              magni quod, distinctio veritatis!
            </p>
          </div>

          <div className="video-container">
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src={"https://www.youtube.com/watch?v=gV8Xz6dIaNk&t=296svideo-id"}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="photo-container">
          <img src={photo2} alt="stockholm-city" />
        </div>
      </div>
    </div>
  );
}

export default Stockholm;
