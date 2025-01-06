/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import ScrollToBottom from "react-scroll-to-bottom";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Enigma</p>
        <img src={assets.avtar} alt="" />
      </div>
      <div className="main-contanier">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev!</span>
              </p>
              <p>How Can I help you today?</p>
            </div>
            <div className="cards">
              <div
                onClick={() =>
                  setInput(
                    "Suggest beautiful places to see on upcoming road trips"
                  )
                }
                className="card"
              >
                <p>Suggest beautiful places to see on upcoming road trips</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  setInput("Breadly summrize this concept:Urban Planning")
                }
                className="card"
              >
                <p>Breadly summrize this concept:Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                onClick={() => setInput("write a mail for a job application")}
                className="card"
              >
                <p>write a mail for a job application</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                onClick={() => setInput("Improve the readability of this code")}
                className="card"
              >
                <p>Improve the readability of this code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title notapp">
              <img src={assets.avtar} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.cropped_image} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="notapp"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="serch-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
