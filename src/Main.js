"use strict";
import axios from "axios";
import { useState, useEffect } from "react";

// import "./Header.css";
import "./style.css";
import Form from "./components/Form";
import ResponseSection from "./components/ResponseSection";

export default function Main() {

    const [choosenButton, setChoosenButton] = useState("null");
    const [apiRequest, setApiRequest] = useState("null");
    const [apiResult, setApiResult] = useState("null");
    const [resultComponentValue, setResultComponentValue] = useState("null");
    const [arrayRequests,setArrayrequest]=useState([]);
   
    // useEffect(() => {

    //     console.log('useEffect');
    //     // axios.get("https://jsonplaceholder.typicode.com/users").then(response => response )
    //     // .then( json1 => console.log(json1.data) );

    // }, [choosenButton]);

    const buttonValueFunc = (value) => {
       

        setChoosenButton(value);
    }

    const goButton = async () => {
        let body = null;

        let result = null;

        if (choosenButton == 'get') {
            result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            // result = await axios.get(apiRequest);
        }
        else if (choosenButton == 'delete') {
            result = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
            

        }
        else if (choosenButton == 'put') {
            result = await axios.put("https://jsonplaceholder.typicode.com/todos/1", body);

        }
        else if (choosenButton == 'post') {
            // result = await axios.post("https://jsonplaceholder.typicode.com/todos/1", body);
            result = await axios.post(apiRequest,body);


        }
        await setApiResult(result);

        await setResultComponentValue(result.data.id);

        arrayRequests.push(
            {
                request:apiRequest,
                type:choosenButton
            }
            );

        await setArrayrequest(arrayRequests);
        

    }

    const getUrl = (e) => {
        // console.log(e.target.value);
        setApiRequest(e.target.value);

    }
    
    return (
        <>
            <Form buttonValue={buttonValueFunc} goButton={goButton} getUrl={getUrl} />
            
            <ResponseSection apiResponse={apiResult} arrayRequests={arrayRequests} choosenButton={choosenButton}/>
        </>
    );
}

