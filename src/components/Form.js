"use strict";

export default function Form(props) {
    return (
        <>

            <span>URL : </span>
            <input type="text" className="UrlInput" onChange={props.getUrl}></input>
            <button onClick={ props.goButton }>Go</button>

            <div className="buttons">
                <button onClick={() => props.buttonValue('get')}>GET</button>
                <button onClick={() => props.buttonValue('post')}>POST</button>
                <button onClick={() => props.buttonValue('put')}>PUT</button>
                <button onClick={() => props.buttonValue('delete')}>DELETE</button>
                <input type="text" className="UrlInput" onChange={props.requestBody}></input>
            </div>

        </>
    );
}