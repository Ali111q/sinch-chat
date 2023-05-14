import React, { useState, useRef, useEffect } from "react";
import patient from "../../assets/patient";
import Card from "../../UI/patients-card/card-1/card";
import usePagination from "../../hooks/pagination";
import { useNavigate } from "react-router-dom";
import Serch from "../../assets/serch";
import Api from "../../helper/api";
import RXicon from "../../assets/RX";
import H from "../../UI/text/text";
import Input from "../../UI/input/input";
const PcSheet = () => {
  const [selected, setSelected] = useState(1);
  const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const navigate = useNavigate();
  const lastCard = useRef();
  const [nextUrl, setNextUrl] = useState(
    "http://192.168.0.114/api/sheets/get-user-sheet?is_family=1&search=test"
  );
  const { handelScroll } = usePagination({
    isMalty: 5.95,
    data,
    setData: () => {
      Api({
        url: nextUrl,
        method: "get",
      }).then((e) => {
        setData((kk) => [...kk, ...e.data.data]);
        setNextUrl(e.data.next_page_url);
      });
    },
    lastCard,
  });
  // useEffect(() => {
  //   Api({
  //     url: nextUrl,
  //     method: "get",
  //   }).then((e) => {
  //     setData(e.data.data);
  //     setNextUrl(e.data.next_page_url);
  //   });
  // }, []);
  return (
    <div className="archive-con">
      <div className="sheet-bar-con">
        <div
          className="sheet-bar-bac"
          style={{
            width: selected == 3 ? "30vw" : "15vw",
            left: selected == 2 ? "7.5vw" : "0",
            transition: "1s",
            background: selected == 2 && "#F7227F",
          }}
        ></div>
        <div
          onClick={(e) => setSelected(1)}
          className="sheet-bar-patient-sheet"
          style={{
            width: selected == 3 ? "0" : selected == 1 ? "15vw" : "7vw",
            transition: "1s",
          }}
        >
          <a>{patient}</a>
          <H
            style={{
              color: selected == 1 && "white",
              width: selected == 1 ? "10vw" : "0vw",
              overflow: "hidden",
              transition: "1s",
            }}
            t={3}
          >
            Personal
          </H>
        </div>
        <div
          onClick={(e) => setSelected(2)}
          className="sheet-bar-patient-family"
          style={{
            width: selected == 3 ? "0" : selected == 2 ? "15vw" : "7vw",
            transition: "1s",
          }}
        >
          <a>{patient}</a>
          <H
            style={{
              color: selected == 2 && "white",
              width: selected == 2 ? "6vw" : "0vw",
              overflow: "hidden",
              transition: "1s",
            }}
            t={3}
          >
            Family
          </H>
        </div>
        <div
          style={{
            width: selected == 3 && "30vw",
            transition: "1s",
          }}
          onClick={(e) => setSelected(3)}
          className={`sheet-bar-patient-search ${selected == 3 && "full"}`}
        >
          <a>{Serch}</a>
          <Input
            style={{
              color: selected == 3 && "white",
              width: selected == 3 ? "18vw" : "0vw",
              overflow: "hidden",
              transition: "1s",
              borderColor: "white",
            }}
            t={3}
          />
          <a>{RXicon.x}</a>
        </div>
      </div>
      <div
        className="card-items"
        id="style-1"
        onScroll={(e) => {
          handelScroll(e);
        }}
      >
        {data.map((e, i) => {
          return (
            <div
              className="Card-patients-1"
              key={i}
              ref={i == data.length - 1 ? lastCard : null}
            >
              <Card data={e} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PcSheet;
