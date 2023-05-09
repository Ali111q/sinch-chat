import "../new.css";
import { useState, useEffect } from "react";

function Intro(props) {
  const [don, setdon] = useState(false);
  useEffect(() => {
    var e = document.getElementById("intro");
    if (props.go && don) {
        for (let index = 0; index < 10; index = index+0.1) {
            setTimeout(() => {
                e.style.webkitBackdropFilter = `blur(${ 50 - index*5}px)`;
                e.style.backdropFilter = `blur(${ 50 - index*5}px)`;
                e.style.mozBackdropFilter = `blur(${ 50 - index*5}px)`;

                if(index > 9.9){
                    setdon(false)
                    e.style.display="none"
                }
            }, index*100);
        } 
    }
    if (!props.go) {
    for (let index = 0; index < 10; index = index+0.1) {
      if (index < 0.2) {
        e.style.display="flex"
      }
        setTimeout(() => {
            e.style.webkitBackdropFilter = `blur(${index*5}px)`;
            e.style.backdropFilter = `blur(${index*5}px)`;
            e.style.mozBackdropFilter = `blur(${index*5}px)`;

        }, index*100);
        if(index > 9.9){
            setdon(true)
        }
    }
    }
  }, [props.go]);
  return (
    <>
      <div>
          <div id="intro">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.71 99.097">
              <g
                id="Group_6546"
                data-name="Group 6546"
                transform="translate(-572.501 -440.649)"
              >
                <g
                  id="Group_6545"
                  data-name="Group 6545"
                  transform="translate(572.501 440.649)"
                >
                  <path
                    id="Path_7203M"
                    data-name="Path 7203"
                    d="M319.127,152.7c1.111,5.941-3.7,10.328-9.161,8.706a26.481,26.481,0,0,1-7.115-3.816,19.926,19.926,0,0,0-4.309-2.417,4.408,4.408,0,0,0-3.628.246,8.778,8.778,0,0,0-4.51,10.129,14.149,14.149,0,0,0,4.177,6.476,61.488,61.488,0,0,0,8.616,6.506,38.985,38.985,0,0,1,11.917,12.092c.534.864.878,1.148,1.7.247,2.756-3,6.122-5.3,9.271-7.851a38.641,38.641,0,0,0,4.965-4.785,13.428,13.428,0,0,0,2.6-4.532,8.667,8.667,0,0,0-4.12-10.67,4.75,4.75,0,0,0-4.861-.136,33.774,33.774,0,0,0-4.567,3.148,24.793,24.793,0,0,1-5.48,3.377c-4.727,1.955-9.289-.561-10.133-5.6a8.233,8.233,0,0,1-.075-2.674c.345.539.684,1.082,1.036,1.616,1.92,2.907,4.619,3.669,7.8,2.231a26.314,26.314,0,0,0,4.879-3.213,29.863,29.863,0,0,1,4.365-2.911,9.212,9.212,0,0,1,8.658-.154,13.205,13.205,0,0,1,6.925,16.032,20.694,20.694,0,0,1-6.087,9.135,53.741,53.741,0,0,1-5.263,4.463c-7.335,5.224-12.478,12.153-16.267,20.422a15.242,15.242,0,0,1,.232-7.687c1.735-5.294.239-9.6-3.525-13.407a47.209,47.209,0,0,0-7.23-5.832c-3.774-2.556-7.52-5.139-10.517-8.649-5.078-5.945-5.222-13.645-.318-18.984,3.938-4.286,8.642-5.029,13.662-2.093,1.684.984,3.278,2.118,4.938,3.144a18.614,18.614,0,0,0,2.509,1.344c3.612,1.525,6.125.669,8.128-2.7.2-.337.427-.658.786-1.206"
                    transform="translate(-274.243 -143.924)"
                    fill="#f7227f"
                  ></path>
                  <path
                    id="Path_7204"
                    data-name="Path 7204"
                    d="M248,261.065c.109-1.29.188-2.589.341-3.879.1-.807.277-1.738,1.321-1.7,1.081.037,1.058.971,1.121,1.8.416,5.512,1.059,10.981,3.746,15.952a20.7,20.7,0,0,0,7.717,7.814,8.072,8.072,0,0,0,2.215.9c2.962.738,4.751-.676,4.939-3.716a6.6,6.6,0,0,0-2.671-6.029,9.626,9.626,0,0,1-2.974-3.331,3.308,3.308,0,0,1,.891-4.424c.7-.455,1.293-.564,1.635.407a8.415,8.415,0,0,0,3.814,4.287,25.89,25.89,0,0,1,11.836,15.482c.881,3.2.449,6.06-2.222,8.312-2.257,1.9-4.662,2.033-6.873.195a48.306,48.306,0,0,0-9.354-5.926c-9.428-4.732-13.949-12.8-15.22-22.979-.13-1.041-.176-2.092-.262-3.154"
                    transform="translate(-247.999 -217.456)"
                    fill="#0199ec"
                  ></path>
                  <path
                    id="Path_7205"
                    data-name="Path 7205"
                    d="M413.254,261.388c-.774,11.722-5.306,21.136-16.488,26.346a36.975,36.975,0,0,0-8.6,5.7,4.16,4.16,0,0,1-4.326.769,7.149,7.149,0,0,1-4.778-8.446,24.621,24.621,0,0,1,9.463-14.7q1.631-1.2,3.313-2.336a7.252,7.252,0,0,0,3.094-3.749c.384-1.183.982-1.042,1.764-.453a3.53,3.53,0,0,1,.694,4.616,11.822,11.822,0,0,1-3.164,3.374c-2.363,1.9-2.812,4.394-2.129,7.171a3.027,3.027,0,0,0,3.3,2.464,8.381,8.381,0,0,0,4.715-1.738c5.415-3.693,8.274-8.946,9.4-15.29a59.518,59.518,0,0,0,.939-7.739c.037-.821.032-1.767,1.089-1.843,1.166-.085,1.222.919,1.373,1.775a29.841,29.841,0,0,1,.339,4.078"
                    transform="translate(-339.545 -217.49)"
                    fill="#0199ec"
                  ></path>
                  <path
                    id="Path_7211M"
                    data-name="Path 7211"
                    d="M361.744,138.97a5.013,5.013,0,1,1,5.149-4.858,4.85,4.85,0,0,1-5.149,4.858"
                    transform="translate(-324.142 -128.947)"
                    fill="#f7227f"
                  ></path>
                  <path
                    id="Path_7213"
                    data-name="Path 7213"
                    d="M272.211,284.031c-3.643-2.574-6.233-5.838-6.8-10.425a36.393,36.393,0,0,1-.636-6.4c.022-.426-.164-1.074.332-1.2.609-.15.73.564.93.973a16.274,16.274,0,0,1,1.366,4.426c.067.394.13.79.229,1.177.091.358.3.7.7.66.485-.043.407-.48.412-.821.013-1.041-.438-2.055-.151-3.392a4.78,4.78,0,0,1,1.578,3.5,54.812,54.812,0,0,0,.737,6.7,24.409,24.409,0,0,0,1.3,4.8"
                    transform="translate(-259.719 -224.804)"
                    fill="#0199ec"
                  ></path>
                  <path
                    id="Path_7214"
                    data-name="Path 7214"
                    d="M451.187,283.821c2.3-4.543,1.452-9.56,2.97-14.111a1.249,1.249,0,0,1,.819-.815,9.618,9.618,0,0,1-.165,3.042c-.016.407-.258,1.023.393,1.1.558.07.677-.475.768-.932a19.952,19.952,0,0,1,1.756-5.714,5.984,5.984,0,0,1,.538-.718c2.76,3.725-1.812,15.641-7.08,18.142"
                    transform="translate(-390.126 -224.589)"
                    fill="#0199ec"
                  ></path>
                </g>
                <g
                  id="Group_6548"
                  data-name="Group 6548"
                  transform="translate(578.917 522.584)"
                >
                  <path
                    id="Path_7215"
                    data-name="Path 7215"
                    d="M17.146-161.6H10.983l-1.158,3.439H6.17l5.97-16.731h3.95l5.925,16.731H18.224Zm-.976-2.883-2.089-6.583-2.157,6.583Zm27.013,6.322H30.164v-2.951L38.8-171.931H30.38v-2.963H43.16v2.8l-8.751,10.976h8.774Zm19.465-6.447v-10.284H66.2v10.284a8.614,8.614,0,0,1-.829,4.154q-1.544,2.724-5.891,2.724t-5.9-2.724a8.614,8.614,0,0,1-.829-4.154v-10.284H56.3v10.284a5.807,5.807,0,0,0,.409,2.52q.636,1.407,2.77,1.407a2.7,2.7,0,0,0,2.758-1.407A5.807,5.807,0,0,0,62.648-164.61Z"
                    transform="translate(-6.17 174.894)"
                    fill="#2a2d37"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

      </div>
    </>
  );
}

export default Intro;
