import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import SparklingStar from "@core/SparklingStar";
import "./styles.css";

import BalloonImg1 from "@assets/img/balloon1.svg";
import BalloonImg2 from "@assets/img/balloon2.svg";
import BalloonImg3 from "@assets/img/balloon3.svg";
import EmImg from "@assets/img/IMG_6289.JPG";
import HatImg from "@assets/img/hat.svg";
import Button from "@core/Button3D";
import SongAudio from '@assets/audio/betterplace.mp3'

const ideaTextTrans = {
  opacity: 0,
  y: -20,
  rotationX: 5,
  skewX: "15deg",
};

const ideaTextTransLeave = {
  opacity: 0,
  y: 20,
  rotationY: 5,
  skewX: "-15deg",
};

const SlideShow = () => {
  const [rerender, setRerender] = useState(false);
  const slideRef = useRef(null);
  const audioRef = useRef(null);

  const handleClick = () => setRerender(!rerender);

  useLayoutEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    };

    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(slideRef.current, 0.1, {
          visibility: "visible",
        })
        .from(".one", 0.7, {
          opacity: 0,
          y: 10,
        })
        .from(".two", 0.4, {
          opacity: 0,
          y: 10,
          display: 'none'
        })
        .to(
          ".one",
          0.7,
          {
            opacity: 0,
            y: 10,
            display: "none",
          },
          "+=2.5"
        )
        .to(
          ".two",
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          "-=1"
        )
        .from(".three", 0.7, {
          opacity: 0,
          y: 10,
          // scale: 0.7
        })
        .to(
          ".three",
          0.7,
          {
            opacity: 0,
            y: 10,
            display: "none",
          },
          "+=2"
        )
        .from(".four", 0.7, {
          scale: 0.2,
          opacity: 0,
        })
        .from(".fake-btn", 0.3, {
          scale: 0.2,
          opacity: 0,
        })
        .staggerTo(
          ".hbd-chatbox span",
          0.5,
          {
            visibility: "visible",
          },
          0.05
        )
        .to(".fake-btn", 0.1, {
          backgroundColor: "rgb(127, 206, 248)",
        })
        .to(
          ".four",
          0.5,
          {
            scale: 0.2,
            opacity: 0,
            y: -150,
          },
          "+=0.7"
        )
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
          scale: 1.2,
          x: 10,
          backgroundColor: "rgb(21, 161, 237)",
          color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
        .from(
          ".idea-5",
          0.7,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
          },
          "+=0.5"
        )
        .to(
          ".idea-5",
          0.7,
          {
            scale: 0.2,
            opacity: 0,
          },
          "+=2"
        )
        .staggerFrom(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: "Expo.easeOut",
          },
          0.2
        )
        .staggerTo(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: "Expo.easeOut",
          },
          0.2,
          "+=1"
        )
        .staggerFromTo(
          ".baloons img",
          2.5,
          {
            opacity: 0.9,
            y: 1400,
          },
          {
            opacity: 1,
            y: -1000,
          },
          0.2
        )
        .from(
          ".birthday-girl",
          0.5,
          {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
          },
          "-=2"
        )
        .from(".hat", 0.5, {
          x: -100,
          y: 350,
          rotation: -180,
          opacity: 0,
        })
        .staggerFrom(
          ".wish-hbd span",
          0.7,
          {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: "Elastic.easeOut.config(1, 0.5)",
          },
          0.1
        )
        .staggerFromTo(
          ".wish-hbd span",
          0.7,
          {
            scale: 1.4,
            rotationY: 150,
          },
          {
            scale: 1,
            rotationY: 0,
            color: "#29AAE3",
            ease: "Expo.easeOut",
          },
          0.1,
          "party"
        )
        .from(
          ".wish h5",
          0.5,
          {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
          },
          "party"
        )
        .staggerTo(
          ".eight svg",
          1.5,
          {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
          },
          0.3
        )
        .to(".six", 0.5, {
          opacity: 0,
          y: 30,
          zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2);
    }, slideRef);

    return () => {
      ctx.revert();
      audioRef.current.pause();
    }
  }, [rerender]);

  return (
    <div className="container" ref={slideRef}>
      <audio ref={audioRef} src={SongAudio} loop />
      <div className="one">
        <SparklingStar>
          <h1 className="one">
            <span data-node-name="greeting">
              Fancy 24<sup>th</sup> Birthday
            </span>
          </h1>
          <p className="two" data-node-name="greetingText">
            I really like youuu. Nói điêu làm chó
          </p>
        </SparklingStar>
      </div>
      <div className="three">
        <p data-node-name="text1">It's your birthday ✨✨✨</p>
        <SparklingStar>
          <p data-node-name="text2">We're gonna celebrate cho đến hết ngày</p>
        </SparklingStar>
      </div>
      <div className="four">
        <div className="text-box">
          <p className="hbd-chatbox" data-node-name="textInChatBox">
            {"Happy birthday to you! Wish you have a wonderful year ahead"
              .split("")
              .map((c, i) => (
                <span key={c + i}>{c}</span>
              ))}
          </p>
          <p className="fake-btn" data-node-name="sendButtonLabel">
            Send
          </p>
        </div>
      </div>
      <div className="five">
        <p className="idea-1" data-node-name="text2">
          <SparklingStar>
            You are the prettiest girl I've ever met.
          </SparklingStar>
        </p>
        <p className="idea-2" data-node-name="text3">
          You are the best ❤️❤️❤️
        </p>
        <p className="idea-3">
          <span data-node-name="text4">
            I realized, I wanted to do something&nbsp;
          </span>
          <strong data-node-name="text4Adjective">special</strong>.
        </p>
        <p className="idea-4" data-node-name="text5Entry">
          Because,
        </p>
        <p className="idea-5">
          <span data-node-name="text5Content">You are Special&nbsp;</span>
          <span className="smiley" data-node-name="smiley">
            👉👈
          </span>
        </p>
        <p className="idea-6">
          <span data-node-name="bigTextPart1">S</span>
          <span data-node-name="bigTextPart2">O</span>
        </p>
      </div>
      <div className="six">
        <img
          src={EmImg}
          alt="Em"
          className="birthday-girl"
          data-node-name="imagePath"
          width={420}
        />
        <img src={HatImg} alt="hat" className="hat" />
        <div className="wish">
          <h3 className="wish-hbd" data-node-name="wishHeading">
            {"Happy Birthday!!!".split("").map((c, i) => (
              <span key={c + i}>{c}</span>
            ))}
          </h3>
          <h5 data-node-name="wishText">
            May your days be merry and bright!!!
          </h5>
        </div>
      </div>
      <div className="seven">
        <div className="baloons">
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg2} alt="Blue Balloon" />
          <img src={BalloonImg1} alt="Red balloon" />
          <img src={BalloonImg3} alt="Green balloon" />
        </div>
      </div>
      <div className="eight">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
      <div className="nine">
        <p data-node-name="outroText">I hope you enjoy this love</p>
        <p id="replay" data-node-name="replayText">
          <Button onClick={handleClick}>Play</Button>
        </p>
      </div>
    </div>
  );
};

export default SlideShow;
