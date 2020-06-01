// /**@jsx jsx */
// import React from "react";
// import { css, jsx } from '@emotion/core';

// const Card = () => {

//     return(
//         <div css={wrapper}>hi</div>
//     );
// }

// export default Card;

// const wrapper = css`
//     border: 1px red solid;
//     background-color: #9e1a3a;
//     width: 400px;
//     height: 600px;
//     margin: 100px 0;
// `;

// ****************************** 연습

/**@jsx jsx */
import React, {useRef} from "react";
import {css, jsx } from "@emotion/core";
import { useSpring, animated, useChain } from "react-spring";

function Card() {

    const innerRef = useRef();
    const header1Ref = useRef();
    const heder2Ref = useRef();
    const menuBtnRef = useRef();
    const iconRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const text3Ref = useRef();
    const text4Ref = useRef();
    const pointRef = useRef();

    const header1Style = useAnimation(header1Ref);
    const header2Style = useAnimation(heder2Ref);
    const menuBtnStyle = useMenuBtn(menuBtnRef);
    const text1Style = useAnimation(text1Ref);
    const text2Style = useAnimation(text2Ref);
    const text3Style = useAnimation(text3Ref);
    const text4Style = useAnimation(text4Ref);

    const innerStyle = useSpring({
        from: {
            marginTop: "-50%",
        },
        to: {
            marginTop: "0%",
        },
        ref: innerRef
    });

    const iconStyle = useSpring({
        from: {
            transitionDelay: "0.1s",
            transform: "rotate(140deg)",
            display: "none",
        },
        to: {
            transform: "rotate(180deg)",
            display: "block",
        },
        ref: iconRef
    })

    const pointStyle = useSpring({
        from: {
            transform: "scale(0.01)",
            transition: "2s",
            position: "absolute",
            bottom: "-3%",
            right: "-4.5%",
        },
        to: {
            bottom: "3%",
            right: "4.5%",
            transform: "scale(2)",
        },
        ref: pointRef
    });

    useChain([innerRef, header1Ref, heder2Ref, menuBtnRef, iconRef, text1Ref, text2Ref, text3Ref, text4Ref]);
    useChain([pointRef]);

    return(
        <div>
            <div css={wrapper}>
                <animated.div css={inner} style={innerStyle}>
                    <animated.div css={point} style={pointStyle}></animated.div>
                    <animated.h1 style={header1Style}>Place aux</animated.h1>
                    <animated.h1 style={header2Style}>Idees</animated.h1>
                    <animated.div css={menuBtn} style={menuBtnStyle}>
                        <animated.i style={iconStyle} class="fas fa-bars"></animated.i>
                    </animated.div> 
                    <animated.span style={text1Style}>when true, stops the spring once it overshoots</animated.span>
                    <animated.span style={text2Style}>linear by default, you can use any easing you want</animated.span>
                    <animated.span style={text3Style}>Spring are configurable and can be tuned.</animated.span>
                    <animated.span style={text4Style}>spring energetic load</animated.span>
                </animated.div>
            </div>
        </div>
    );
}

const useAnimation = (ref) => {
    const spring = useSpring({
        from:{
            opacity: 0,
            marginTop: "100px",
            transition: "1s all" 
        },

        config: {duration : 200},

        to: { opacity: 1, marginTop: "1px",},

        ref: ref
    });
    return spring;
}

const useMenuBtn = (ref) => {
    const btn = useSpring({
        from: {
            position: "absolute",
            top: "20%",
            left: "7%",
            transform: "scale(0.01)",
            transition: "1.5s all",
        },
        to: {
            transform: "scale(1.5)",
            
        },
        ref: ref
    })
    return btn;
}

export default Card;

//********************** style 

const wrapper = css`
    width: 400px;
    height: 600px;
    margin: 50px auto;
    border: 1px hotpink solid;
    color: white;
    position: relative;

`;

const inner = css`
    position: relative;
    margin: 0 20px;
    padding: 20px;
    height: 500px;
    background-color: #971536;
    /* background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple); */
    

    h1 {
        margin: 0;
    }

    span {
        display: block;
        position: relative;
        top: 10%;
    }
`;

const menuBtn = css`
    color: white;
    border-radius: 50%;
    background-color: #ff4652;
    padding: 4px 5px;
    i {
        font-size: 12px;
    }
`;

const point = css`
    border: 1px solid;
    border-width: 34px 34px 0px 0px;
    border-color: #ff4652 white;

`;

