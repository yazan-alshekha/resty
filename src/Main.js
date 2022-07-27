"use strict";
import axios from "axios";
import { useState, useEffect } from "react";

// import "./Header.css";
import "./style.css";
import Form from "./components/Form";

export default function Main() {

    const [choosenButton, setChoosenButton] = useState("null");
    const [apiRequest, setApiRequest] = useState("null");
    const [apiResult, setApiResult] = useState("null");

    // useEffect(() => {

    //     console.log('useEffect');
    //     // axios.get("https://jsonplaceholder.typicode.com/users").then(response => response )
    //     // .then( json1 => console.log(json1.data) );

    // }, [choosenButton]);

    const buttonValueFunc = (value) => {
        // console.log(value);

        setChoosenButton(value);
    }

    const goButton = async () => {
        let body = null;

        let result = null;

        if (choosenButton == 'get') {
            result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        }
        else if (choosenButton == 'delete') {
            result = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");

        }
        else if (choosenButton == 'put') {
            result = await axios.put("https://jsonplaceholder.typicode.com/todos/1", body);

        }
        else if (choosenButton == 'post') {
            result = await axios.post("https://jsonplaceholder.typicode.com/todos/1", body);

        }
        

        console.log(result);
        setApiResult(result);



    }

    const getUrl = (e) => {

        setApiRequest(e.target.value);

    }

    return (
        <>
            <p>Hello main</p>

            <Form buttonValue={buttonValueFunc} goButton={goButton} getUrl={getUrl} />
            <section>
                <textarea>

                </textarea>
            </section>
        </>
    );
}

