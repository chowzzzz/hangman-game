import React from "react";

const Fail = (props) => {
    return (
        <>
            <div className="fail-text">
                You Died! Answer: {props.word}
            </div>
            <div class='container'>
                <div class='tear'></div>
                <div class='tear2'></div>
                <div class='face'>
                    <div class='eyebrow'>︶</div>
                    <div class='eyebrow'>︶</div>
                    <div class='eye'></div>
                    <div class='eye'></div>
                    <div class='mouth'></div>
                </div>
            </div>
        </>
    );
};

export default Fail;
