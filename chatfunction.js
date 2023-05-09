import React, { useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import axios from 'axios';

function Chat() {

    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState();
    window.Pusher = require('pusher-js');
    const echo = new Echo({
        broadcaster: 'pusher',
        key: 'osamah',
        cluster: 'mt1',
        wsHost: '192.168.0.114',
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
        authEndpoint: "http://192.168.0.114:3030/api/broadcasting/auth",
        auth: {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }

    });





// console.log(echo);

    echo.connector.pusher.connection.bind('connected', () => {
        console.log('connected');
        // axios.get(`http://192.168.0.114:800/api/count`, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Authorization': 'Bearer 1542|3hVrlJ3A968IeZ23kejqTp8CJ9p4RCkcj66gRK4z'
        //     },
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
    });

    echo.private('App.Models.User.393').notification((e)=>console.log(e));



    //   echo.connector.pusher.connection.bind('disconnected', () => {
    //     console.log('disconnected');
    //  });

    // echo.private('pnoti').listen('PNoti', (event) => {
    //     console.log(event.message);
    // });


    // echo.private('PNoti.393').notification((e)=>console.log(e.user));


    // const echo1 = new Echo({
    //     broadcaster: 'pusher',
    //     key: 'osamah',
    //     cluster: 'mt1',
    //     wsHost: 'localhost',
    //     wsPort: 6001,
    //     forceTLS: false,
    //     disableStats: true,
    //     authEndpoint: "http://localhost:8000/api/broadcasting/auth",
    //     auth: {
    //         headers: {
    //             'Accept':'application/json',
    //             'Authorization': 'Bearer 2|cWgrHIVSEubeCKh76Zg0dmrRgX9SjoK8AVEzJLNY' 
    //         },
    //     }

    // });

    // echo1.private('App.Models.User.4').notification((e)=>console.log('osamah2' + e.message));





    useEffect(() => {
        const ws = new WebSocket('ws://192.168.0.190:8040?token=1537|Rhk4VO6jU2mLnoOrQQmx6sxJNF2UzahbImgQ205p');
        setWs(ws);



        // window.Echo.channel('events').listen('MyEvent', (event) => {
        //     console.log(event.message);
        //  });

        //    ws.onmessage= e=>{
        //     e.data != 'connected' && console.log(JSON.parse(e.data)) ;
        //    }


    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        ws.send(JSON.stringify({ command: 'create_private_channel', user: '1323', data: 'hello' }));
        console.log(event.target.elements.message.value);
        event.target.reset();
    }

    return (

        <div>
            <input onChange={(e) => {
                localStorage.setItem('user', e.target.value)
            }}></input>
            <ul>
                {messages.map((message, index) => {
                    console.log(message);
                    return <li key={index}> <h1>{message.user}</h1> <p> {message.message}</p></li>
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" placeholder="Enter your message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export { Chat }