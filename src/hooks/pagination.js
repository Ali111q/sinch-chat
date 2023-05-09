import React, { useState, useEffect } from "react";
function usePagination(props) {
  const { data, setData, lastCard ,isMalty } = props;
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    setIsChecked(true);
  }, [data]);
  function handelScroll(event) {
    const conH = event.currentTarget.offsetHeight;
    const itemH = lastCard.current.offsetHeight;
    const inView = conH / itemH;
    const scroll = event.currentTarget.scrollTop;
    var  myCheck =conH * data.length /inView - conH - itemH < scroll
    if (isMalty) {
      myCheck =(conH * data.length /inView - conH - itemH)/isMalty < scroll
    }
    if (myCheck) {
      if (isChecked) {
        setIsChecked(false);
        setData();
      }
    }
  }
  return { handelScroll };
}

export default usePagination;
