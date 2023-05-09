import "../../../../new.css";
import { useSelector } from "react-redux";

import useOrientationchange from "../../../../hooks/orientationchange";
function Forward(props) {
  const { io } = useSelector((state) => state.channel.data);
  const isPC = useOrientationchange();
  return (
    <>
      {isPC ? (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>مشاركة</h2>
          <span className="alert-serch">
            <input type="text" name="" id="" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                viewBox="0 0 42 42"
              >
                <g id="search" transform="translate(0.359 -0.209)">
                  <rect
                    id="Rectangle_12125"
                    data-name="Rectangle 12125"
                    width="42"
                    height="42"
                    transform="translate(-0.359 0.209)"
                    fill="none"
                  />
                  <path
                    id="icons8-search"
                    d="M17.217,3A14.217,14.217,0,1,0,26.2,28.215L34.693,36.7A1.422,1.422,0,1,0,36.7,34.693L28.215,26.2a14.2,14.2,0,0,0-11-23.2Zm0,2.843A11.373,11.373,0,1,1,5.843,17.217,11.352,11.352,0,0,1,17.217,5.843Z"
                    transform="translate(1.674 1.674)"
                    fill="#2a2d37"
                  />
                </g>
              </svg>
            </button>
          </span>

          <div className="sher-alert-list" id="style1">
            <ul className="sher-alert-list-scroll">
              {props.data &&
                props.data.map((e, index) => {
                  console.log("ForWard Users")
                  console.log(e)
                  return (
                    <a
                      onClick={() => {
                        console.log("wefjefjwfijwfoijweofijewojweijfoijeofijfeoiwjfeoi");
                        console.log({
                          command: "forward",
                          userId: e.users[0].id,
                          forwardId: props.messageId,
                        });
                        io.send({
                          command: "forward",
                          userId: e.users[0].id,
                          forwardId: props.messageId,
                        });
                        props.off(false);
                      }}
                      className="forward-message-container"
                    >
                      <div className="sher-us-data">
                        <span className="sher-us-data-img">
                          <img src={e.users[0].image} alt="" />
                        </span>
                        <span className="sher-us-data-name">
                          <h2>{e.users[0].name}</h2>
                        </span>
                      </div>
                    </a>
                  );
                })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="request-alert2233">
          <span className="top-alert"></span>
          <h2>مشاركة</h2>
          <span className="alert-serch">
            <input type="text" name="" id="" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                <g id="search" transform="translate(0.359 -0.209)">
                  <rect
                    id="Rectangle_12125"
                    data-name="Rectangle 12125"
                    width="42"
                    height="42"
                    transform="translate(-0.359 0.209)"
                    fill="none"
                  />
                  <path
                    id="icons8-search"
                    d="M17.217,3A14.217,14.217,0,1,0,26.2,28.215L34.693,36.7A1.422,1.422,0,1,0,36.7,34.693L28.215,26.2a14.2,14.2,0,0,0-11-23.2Zm0,2.843A11.373,11.373,0,1,1,5.843,17.217,11.352,11.352,0,0,1,17.217,5.843Z"
                    transform="translate(1.674 1.674)"
                    fill="#2a2d37"
                  />
                </g>
              </svg>
            </button>
          </span>

          <div className="sher-alert-list" id="style1">
            <ul className="sher-alert-list-scroll">
              {props.data &&
                props.data.map((e) => {
                  return (
                    <a
                      onClick={() => {
                        console.log({
                          command: "forward",
                          userId: e.users[0].id,
                          forwardId: props.messageId,
                        });
                        io.send({
                          command: "forward",
                          userId: e.users[0].id,
                          forwardId: props.messageId,
                        });
                        props.off(false);
                      }}
                      className="forward-message-container"
                      key={e.id}
                    >
                      <div className="sher-us-data">
                        <span className="sher-us-data-img">
                          <img src={e.users[0].image} alt="" />
                        </span>
                        <span className="sher-us-data-name">
                          <h2>{e.users[0].name}</h2>
                        </span>
                      </div>
                    </a>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      <div
        className="alert"
        onClick={(e) => {
          props.off(false);
        }}
      ></div>
    </>
  );
}
export default Forward;
