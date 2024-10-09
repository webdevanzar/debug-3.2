import React, { useState } from "react";
import "./Accordion.css";
import banner from "./images/banner.jpg";
import arrow from "./images/arrow.jpg";

const Accordion = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      title: "How does react work?",
      content:
        "Content 1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae officiis ",
    },
    {
      id: 2,
      title: "What is SPA?",
      content:
        "Content 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae officiis ",
    },
    {
      id: 3,
      title: "How work virtual DOM?",
      content:
        "Content 3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae officiis ",
    },
    {
      id: 4,
      title: "What is vite?",
      content:
        "Content 4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae officiis ",
    },
  ]);

  const [isVisible, setIsVisible] = useState("");

  const handleView = () => {
    setIsVisible((prev) => (prev == id ? "" : id));
  };

  return (
    <div className="container">
      <div>
        <img className="banner" src={banner} alt="" />
      </div>
      <h1 className="faq-heading">FAQ</h1>

      {faq.map((data) => {
        return (
          <div className="faq-section">
            <div className="below-faq">
              <div className="accordions">
                <button
                  className="button-faq"
                  onClick={(id) => setIsVisible(data.id)}
                >
                  {data.title}
                  <span>
                    <img className={` ${data.id == isVisible ? "arrow-rotate" : "arrow"}`} src={arrow} alt="" />
                  </span>
                </button>
                {data.id == isVisible && <p>{data.content}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
