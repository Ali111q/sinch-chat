import SnackBar from "../../snackBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../component/else/back";
import { httpHelper } from "../../helper/http_helper";
import { url } from "../../utils/constants";
function Drugs(props) {
  const [SnackBarGo, setSnackBarGo] = useState(false);
  const [SnackBarType, setSnackBarType] = useState(false);
  const [SnackBarMs, setSnackBarMs] = useState("");
  const [path, setpath] = useState();
  const [selected, setselected] = useState(false);
  const [showdelete, setshowdelete] = useState(false);
  const [edit, setedit] = useState(false);
  const [data, setdata] = useState();
  const [text, settext] = useState({
    name: "",
    by: "",
  });
  const [edetedata, setedetedata] = useState({
    name: "",
    by: "",
    id: "",
  });
  const [deleteData, setdeleteData] = useState({
    id: "",
    name: "",
    by: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    path && navigate(path);
  }, [path]);
  useEffect((e) => {
    httpHelper(
      `${url}/profile/drugs?id=${localStorage.getItem("id")}`,
      [
        {
          key: "Authorization",
          value: `Bearer ${localStorage.getItem("token")}`,
        },
      ],
      {},
      "get"
    ).then((e) => {
      setdata(e);
    });
  }, []);
  return (
    <>
      <div
        className={showdelete ? "alert" : ""}
        onClick={() => {
          setshowdelete(false);
        }}
      ></div>
      <div
        style={{ bottom: showdelete ? "3vh" : "-100vh" }}
        className="AlertDeleteDrugItem"
      >
        <svg
          onClick={() => {
            setshowdelete(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width=""
          viewBox="0 0 96 9"
        >
          <rect
            id="Rectangle_12157"
            data-name="Rectangle 12157"
            width="96"
            height="9"
            rx="2"
            fill="#ccc"
          />
        </svg>
        {edit ? (
          <>
            <h1>تعديل الدواء</h1>
            <span>
              <h1>اسم الدواء</h1>
              <input
                type={"text"}
                defaultValue={edetedata.name}
                onChange={(e) => {
                  setedetedata((k) => {
                    return { ...k, name: e.target.value };
                  });
                }}
              />
              <h1>اسم الشركة المصنعة</h1>
              <input
                type={"text"}
                defaultValue={edetedata.by}
                onChange={(e) => {
                  setedetedata((k) => {
                    return { ...k, by: e.target.value };
                  });
                }}
              />
            </span>
            <button
              style={{
                backgroundColor: "#0199EC",
              }}
              onClick={() => {
                httpHelper(
                  `${url}/profile/drugs/edit`,
                  [
                    {
                      key: "Content-Type",
                      value: "application/json",
                    },
                    {
                      key: "Authorization",
                      value: `Bearer ${localStorage.getItem("token")}`,
                    },
                  ],
                  {
                    name: edetedata.name,
                    company_name: edetedata.by,
                    id: edetedata.id,
                  },
                  "PUT"
                ).then((e) => {
                  setSnackBarType(e.status);
                  setSnackBarGo(true);
                  setSnackBarMs(e.message);
                  setTimeout(() => {
                    if (e.status) {
                      window.location.reload();
                    }
                  }, 1000);
                });
              }}
            >
              تعديل
            </button>
          </>
        ) : (
          <>
            <h1>حذف الدواء</h1>
            <span>
              <h1>{edetedata.name}</h1>
              <p>{edetedata.by}</p>
            </span>
            <h2>هل تريد حذف الدواء ؟</h2>
            <button
              onClick={() => {
                httpHelper(
                  `${url}/profile/drugs/delete?id=${edetedata.id}`,
                  [
                    {
                      key: "Content-Type",
                      value: "application/json",
                    },
                    {
                      key: "Authorization",
                      value: `Bearer ${localStorage.getItem("token")}`,
                    },
                  ],
                  {},
                  "DELETE"
                ).then((e) => {
                  setSnackBarType(e.status);
                  setSnackBarGo(true);
                  setSnackBarMs(e.message);
                  setTimeout(() => {
                    if (e.status) {
                      window.location.reload();
                    }
                  }, 1000);
                });
              }}
            >
              حذف
            </button>
          </>
        )}
      </div>
      <SnackBar
        run={SnackBarGo}
        off={setSnackBarGo}
        data={SnackBarMs}
        type={SnackBarType}
      />
      <div id="mediaQueryForPc">
        <div className="DrugsMainContainer">
          <div className="DrugsMainContainerScroll">
            <div className="DrugsMainContainerContent">
              {selected ? (
                <>
                  <div className="addDrugs">
                    <span>
                      <h1> اسم الدواء</h1>
                      <br></br>
                      <input
                        placeholder="ادخل اسم الدواء"
                        type={"text"}
                        onChange={(e) => {
                          settext((k) => {
                            return { ...k, name: e.target.value };
                          });
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      <h1>اسم الشركة المصنعة</h1>
                      <br></br>
                      <input
                        type={"text"}
                        placeholder="ادخل اسم الشركة المصنعة"
                        onChange={(e) => {
                          settext((k) => {
                            return { ...k, by: e.target.value };
                          });
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <button
                      onClick={() => {
                        httpHelper(
                          `${url}/profile/drugs/store`,
                          [
                            {
                              key: "Content-Type",
                              value: "application/json",
                            },
                            {
                              key: "Authorization",
                              value: `Bearer ${localStorage.getItem("token")}`,
                            },
                          ],
                          {
                            name: text.name,
                            company_name: text.by,
                          },
                          "post"
                        ).then((e) => {
                          setSnackBarType(e.status);
                          setSnackBarGo(true);
                          setSnackBarMs(e.message);
                        });
                      }}
                    >
                      إضافة
                    </button>
                  </div>
                </>
              ) : (
                <ul className="DrugsMainContainerContentUl">
                  {data &&
                    data.data.map((Element) => {
                      return (
                        <>
                          <li>
                            <div>
                              <button
                                style={{ backgroundColor: "red" }}
                                onClick={() => {
                                  setedit(false);
                                  setshowdelete(true);
                                  setdeleteData((k) => {
                                    return {
                                      ...k,
                                      name: Element.name,
                                      by: Element.company_name,
                                      id: Element.id,
                                    };
                                  });
                                }}
                              >
                                حذف
                              </button>
                              <button
                                onClick={() => {
                                  setedit(true);
                                  setshowdelete(true);
                                  setedetedata((k) => {
                                    return {
                                      ...k,
                                      name: Element.name,
                                      by: Element.company_name,
                                      id: Element.id,
                                    };
                                  });
                                }}
                              >
                                تعديل
                              </button>
                            </div>
                            <span>
                              <h1>{Element.name}</h1>
                              <p>{Element.company_name}</p>
                            </span>
                          </li>
                          <br></br>
                          <br></br>
                        </>
                      );
                    })}
                </ul>
              )}
            </div>
            <ul className="DrugsMainContainerList">
              <li
                onClick={() => {
                  setselected((e) => !e);
                }}
                style={{
                  color: selected ? "#0199EC" : "white",
                  backgroundColor: selected ? "" : "#0199EC",
                }}
              >
                الادوية
              </li>
              <li
                onClick={() => {
                  setselected((e) => !e);
                }}
                style={{
                  color: selected ? "white" : "#0199EC",
                  backgroundColor: selected ? "#0199EC" : "",
                }}
              >
                إضافة دواء
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mediaQueryForMobile">
        <div className="containerForDrugs">
          <Back title={"Add Post"} path={-1} run={props.run} />
          <div className="DrugsMainContainerScroll">
            <div className="DrugsMainContainerContent">
              {selected ? (
                <>
                  <div className="addDrugs">
                    <span>
                      <h1> اسم الدواء</h1>
                      <br></br>
                      <input
                        placeholder="ادخل اسم الدواء"
                        type={"text"}
                        onChange={(e) => {
                          settext((k) => {
                            return { ...k, name: e.target.value };
                          });
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      <h1>اسم الشركة المصنعة</h1>
                      <br></br>
                      <input
                        type={"text"}
                        placeholder="ادخل اسم الشركة المصنعة"
                        onChange={(e) => {
                          settext((k) => {
                            return { ...k, by: e.target.value };
                          });
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <button
                      onClick={() => {
                        httpHelper(
                          `${url}/profile/drugs/store`,
                          [
                            {
                              key: "Content-Type",
                              value: "application/json",
                            },
                            {
                              key: "Authorization",
                              value: `Bearer ${localStorage.getItem("token")}`,
                            },
                          ],
                          {
                            name: text.name,
                            company_name: text.by,
                          },
                          "post"
                        ).then((e) => {
                          setSnackBarType(e.status);
                          setSnackBarGo(true);
                          setSnackBarMs(e.message);
                        });
                      }}
                    >
                      إضافة
                    </button>
                  </div>
                </>
              ) : (
                <ul className="DrugsMainContainerContentUl">
                  {data &&
                    data.data.map((Element) => {
                      return (
                        <>
                          <li>
                            <div>
                              <button
                                style={{ backgroundColor: "red" }}
                                onClick={() => {
                                  setedit(false);
                                  setshowdelete(true);
                                  setdeleteData((k) => {
                                    return {
                                      ...k,
                                      name: Element.name,
                                      by: Element.company_name,
                                      id: Element.id,
                                    };
                                  });
                                }}
                              >
                                حذف
                              </button>
                              <button
                                onClick={() => {
                                  setedit(true);
                                  setshowdelete(true);
                                  setedetedata((k) => {
                                    return {
                                      ...k,
                                      name: Element.name,
                                      by: Element.company_name,
                                      id: Element.id,
                                    };
                                  });
                                }}
                              >
                                تعديل
                              </button>
                            </div>
                            <span>
                              <h1>{Element.name}</h1>
                              <p>{Element.company_name}</p>
                            </span>
                          </li>
                          <br></br>
                          <br></br>
                        </>
                      );
                    })}
                </ul>
              )}
            </div>
          </div>
          <ul className="DrugsMainContainerList">
            <li
              onClick={() => {
                setselected((e) => !e);
              }}
              style={{
                color: selected ? "#0199EC" : "white",
                backgroundColor: selected ? "" : "#0199EC",
              }}
            >
              الادوية
            </li>
            <li
              onClick={() => {
                setselected((e) => !e);
              }}
              style={{
                color: selected ? "white" : "#0199EC",
                backgroundColor: selected ? "#0199EC" : "",
              }}
            >
              إضافة دواء
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drugs;
