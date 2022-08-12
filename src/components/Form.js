"use strict";

export default function Form(props) {
    return (
        <>

            <a>URL</a>
            <input type="text" className="UrlInput" onChange={props.getUrl}></input>
            <button onClick={ props.goButton }>Go</button>

            <div className="buttons">
                <button onClick={() => props.buttonValue('get')}>GET</button>
                <button onClick={() => props.buttonValue('post')}>POST</button>
                <button onClick={() => props.buttonValue('put')}>PUT</button>
                <button onClick={() => props.buttonValue('delete')}>DELETE</button>
                <input type="text" className="UrlInput"></input>
            </div>

        </>
    );
}