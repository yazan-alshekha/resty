"use strict";


export default function Result(props) {
    console.log(props.data);
    return (
        <>
            <pre>
                {props.data.headers ? 'Headeeeers:' : ""}
                {JSON.stringify(props.data.headers, null, 2)}
            </pre>
            <pre>
                {props.data.data ? 'Results:' : ""}
                {JSON.stringify(props.data.data, null, 2)}
            </pre>
        </>

    );
};