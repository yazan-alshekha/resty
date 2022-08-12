"use strict";
import Request from "./Request";
import Result from "./Result";

export default function ResponseSection(props) {


    return (
        <>
            <section>

                <div className="textarea" >
                    {props.apiResponse ? <Result data={props.apiResponse} /> : <Result />}

                </div>

                {props.arrayRequests.map((item, idx) => {
                    return <Request
                        type={item.type}
                        request={item.request}
                        key={idx}
                    />
                })}
            </section>
        </>
    );
} 