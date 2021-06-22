import React, { useState } from "react";
import Picker from "emoji-picker-react";
import ReactLoading from "react-loading";
import { getChatData } from "../../../stores/pasartrading/functions";
import axios from "axios";
import { baseUrlTrade, baseUrlTradeVersion } from "../../../stores/index";
import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Chat() {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);
  let [Messages, setMessages] = useState([]);
  let [inputMessage, setInputMessage] = useState("");
  let [showEmoji, setShowEmoji] = useState("d-none");
  let [isLoading, setIsLoading] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    if (
      inputMessage &&
      typeof inputMessage === "string" &&
      inputMessage.length < 90
    ) {
      setInputMessage((inputMessage += emojiObject.emoji));
    }
  };

  function onShowEmoji() {
    if (showEmoji === "d-none") {
      setShowEmoji("d-block");
    } else if (showEmoji === "d-block") {
      setShowEmoji("d-none");
    }
  }

  function SendChat(e) {
    e.preventDefault();
    setIsLoading(true);
    axios({
      url: `${baseUrlTrade}${baseUrlTradeVersion}/chatting/me`,
      method: "POST",
      headers: {
        jwttoken: localStorage.getItem("token"),
      },
      data: {
        Message: inputMessage,
      },
    })
      .then(({ data }) => {
        setInputMessage("");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  function SendChatDisabled(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  React.useEffect(() => {
    getChatData({ dispatch: setMessages });
  }, [setMessages]);

  React.useEffect(() => {
    if (IoWebSocketTrade) {
      IoWebSocketTrade.removeEventListener(`Chatting`);
      IoWebSocketTrade.on(`Chatting`, (data) => {
        setMessages(data);
      });
      return () => IoWebSocketTrade.removeEventListener(`Chatting`);
    }
  }, []);

  return (
    <div className={mode ? "bg-trade2-dark" : "bg-trade2"}>
      <div
        style={{
          background: "transparent",
          borderRadius: "5px",
        }}
        className="m-1 hcr-inside"
      >
        <div
          style={{
            overflow: "scroll",
            transform: "scale(1, -1)",
          }}
          className="px-2 chat-field hcr-outside"
        >
          {Messages && Array.isArray(Messages) ? (
            Messages.sort((a, b) => a.createdAt - b.createdAt).map(
              (item, itemIndex) => {
                return (
                  <div
                    className="row m-0 mt-0 mb-0"
                    key={itemIndex}
                    style={{
                      transform: "scale(1, -1)",
                    }}
                  >
                    <div className="col-12 p-0 pb-1 d-flex align-items-center">
                      <button
                        className={`btn p-0 font-14-tr ${
                          mode
                            ? "chat-text-color-dark chatcolor"
                            : "chat-text-color"
                        }`}
                        onClick={() =>
                          setInputMessage(
                            (inputMessage += " @" + item.user.username + " "),
                          )
                        }
                      >
                        {item.user ? item.user.username : "-"} : {"   "}
                        {item.message}
                      </button>
                    </div>
                  </div>
                );
              },
            )
          ) : (
            <div className="row m-0 mt-1 mb-1">
              <div className="col-12 p-0 text-center pt-1 pb-1">
                chat not found
              </div>
            </div>
          )}
        </div>
      </div>
      {isLoginPages ? (
        <div className="mt-2 mx-2">
          <form
            onSubmit={isLoginPages ? SendChat : SendChatDisabled}
            autoComplete="off"
          >
            <div className="">
              <div
                className="input-group"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  value={inputMessage}
                  name="message"
                  placeholder="Press Enter To Send Message ..."
                  maxLength={90}
                  autoComplete="false"
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading ? true : false}
                  required
                  style={{ border: "1px solid #161616" }}
                />
                {isLoading ? (
                  <div>
                    <div className="p-3">
                      <ReactLoading
                        type="spin"
                        color="#fff"
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="pt-2 pb-2 pl-2 pr-2 font-12 text-white">
                      {90 - inputMessage.length >= 0
                        ? 90 - inputMessage.length
                        : 0}
                    </div>
                  </div>
                )}
                <div className="pr-2">
                  <button
                    type="button"
                    onClick={onShowEmoji}
                    className="btn cg-btn-chat"
                    style={{ color: "#f9ba42" }}
                  >
                    <i className="fas fa-smile-beam"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row ${showEmoji}`}
              style={{ position: "absolute", right: "0", zIndex: "999" }}
            >
              <div className="col-12">
                <Picker onEmojiClick={onEmojiClick} disableSearchBar />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center bg-loginfirst col-12 mt-3">
          <h5 className="mb-0 font-13 font-weight-bold">
            <Link to="/login" className="mr-2">
              Masuk
            </Link>
            atau
            <Link to="/login" className="ml-2">
              Daftar
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
}
