// import {useSpring, animated } from 'react-spring';
// import React from 'react';
// import { Spring } from "react-spring/renderprops";

// import styled from "styled-components";


//  function Exam() {

//   const props = useSpring({ scrollY: 100, from: { scrollY: 0 } })

//   return(
//     <Wrapper>
//       {/* 날짜 올라가기 */}
//       <Spring
//         from={{ number: 0 }}
//         to={{ number: 100 }}>
//         {props => <div>{props.number}</div>}
//       </Spring>
      
//       <Spring>
//       <animated.div scrollTop={props.scroll}></animated.div>
//       </Spring>
//     </Wrapper>
//   ) 
  

// }
// export default Exam;


// const Wrapper = styled.div`
// width: 1920px;
// height: 2080px;
// border: 1px red solid;
// margin: 30px;
// `;

// ************************************************* exam 1

// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

// const Exam = () => {

//   const animation = useSpring({ 
//     from: {opacity: 0, transition: "2s"},
//     to: {opacity: 1}
//   });

//   const clolorAnimation = useSpring({
//     from: {color: "blue", transition: "2s"},
//     to: {color: "red"}
//   });

//   const multAnimation = useSpring({
//     from: {opacity: 0, color: "red", transition: "2s"},
//     to: [
//       {opacity: 0, color: "pink", transition: "2s"},
//       {opacity: 1, color: "orange", transition: "2s"},
//       {opacity: 5, color: "yellow", transition: "2s"},
//       {opacity: 9, color: "brown", transition: "2s"}
//     ]
//   })

//   return(
//     <>
//       <animated.h1 style={animation} >No.1</animated.h1>
//       <animated.h1 style={clolorAnimation}>No.2</animated.h1>
//       <animated.h1 style={multAnimation}>No.3</animated.h1>
//     </>
//   );
// }

// export default Exam;

// ************************************exam 2

// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

// const Exam = () => {
//   const [on, setOnSwicth] = useState(false);

//   const animation = useSpring({
//     color: on ? "blue" : "red"
//   })

//   return(
//     <>
//       <animated.h1 style={animation}> {!on ? "I'm red" : "I'm blue!"} </animated.h1>
//       <button onClick={ () => setOnSwicth(!on) }> change! </button>
//     </>
//   );
// }
// export default Exam;


// ************************************exam 3

// /**@jsx jsx */
// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { css, jsx } from '@emotion/core';

// const Exam = () => {

//   const [on, onSet] = useState(false); // setState 셋팅

    
//   const { xy } = useSpring({ // 좌표 0,0을 만드려는 부분
//     from: { xy: [0, 0] },    // from(시작)값에 x y에 0,0 배열형태로 두개 값 넣어준다 
//     xy: on ? [500, 200] : [0, 0] // xy가 true, false에 따라 좌표 값(배열 값) 바뀜
//   }); // result(ture일 경우): xy 일때 500,200 값 들어가있음

  
//   return(
//     <div>
//       <animated.h1 style={{ 
//         transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)}} // transfrom: translate 이용. (보간을 활용해 x y 전달)
//       >
//         {!on ? "정지" : "슈르르윽~"}  {/* 화면에 렌더링 될 요소 */}
//       </animated.h1>
//       <button onClick={() => onSet(!on)}>Change</button>
//     </div>
//   );
// }
// export default Exam;

//***************************************실전 */

// /**@jsx jsx */
// import React, {useState, useEffect} from "react";
// import { useSpring, animated } from "react-spring";
// 

// const Exam = () => {

//   const [scrollY, setScrollY] = useState(0);

//   const date = new Date();
//   // const CURRENT_YEAR = date.getFullYear();
//   // const CURRENT_MONTH = date.getMonth() + 1;
//   // const CURRENT_DAY = date.getDay();

//   const { year, month, day } = useSpring({  // heigth(1080) * 0.1 = 108 , height * 0.9 = 972
//     from: { year: 0, month: 0, day: 0},

//     //108 ~ 972 사이에만 날짜 표시
//     year: scrollY < 972 && scrollY > 108 ? date.getFullYear() : 0,
//     month: scrollY < 972 && scrollY > 108 ? Math.round(date.getMonth()) + 1 : 0,
//     day: scrollY < 972 && scrollY > 108 ? date.getDay() : 0
//   }) 

//   useEffect(() => { // scrollY 받아오기
//     window.addEventListener("scroll", scrollOn);  
//   })

//   const scrollOn = () => { // scrollY 값을 set으로 입력
//     setScrollY(window.scrollY);
//   }

//   // 스크롤값 확인 
//   console.log("ScrollY ",scrollY)

//   return(

//     <div css={wrapper}>
//       <div css={topInner}></div>
//       <div css={inner}>
//         <div>
//           <animated.span css={number}>{year}</animated.span>
//           <animated.span css={number}>{month}</animated.span>
//           <animated.span css={number}>{day}</animated.span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Exam;

// const wrapper = css`
//   width: 1920px;
//   height: 2160px;
//   margin: 30px;
//   border: 1px solid red;
// `;

// const topInner = css`
//   border-bottom: 1px green dashed;
//   height: 108px;
//   margin: 30px;
// `;

// const inner = css`
//   border-bottom: 1px blue dashed;
//   height: 1080px;
//   margin: 30px;
//   position: relative;
//   div {
//     text-align: center;
//     position: absolute; 
//     top: 100%;
//     left: 50%;
//   }
// `;

// const number = css`
//   padding: 0 30px;
//   font-size: 40px;
// `;

//************************* 연습1*/

/**@jsx jsx */
import React, {useState, useEffect} from "react";
import { useSpring, animated } from "react-spring";
import { css, jsx } from '@emotion/core';
import video from "./video.mp4";

const Exam = () => {
  // const [top, setTop] = useState(0)

  const firstTitle = useSpring({
    from: {
      position: "relative",
      top: "0%",
    },
    transition: "0.8s all", 
    top: "10%", 
    zIndex: 1
  })

  const secondTitle = useSpring({
    from: {
      position:"relative",
      top: "0%",
      display: "none",
    },
    transition: "2s all",
    display: "block",
    top: "10%",
    zIndex: 2
  })

  const arrowInfinite = useSpring({
    from:{bottom: "0%"},
    to: async next=> {
      while(true) {
        await next({bottom: "2%"})
        await next({bottom: "0%"})
      }
    }
  })

  
  
  return(
    <div css={wrapper}>
      <animated.h1 style={firstTitle}>URBANIA</animated.h1>
      <animated.h1 style={secondTitle}>SANS FILTRE</animated.h1>
      <div css={videoInner}>
        <video src={video}
        fliuid="fasle"
          loop autoPlay
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          height="300px"
          width="350px"
          z-index="-1"
        />
        <div css={angle}></div>
      </div>
      <animated.i style={arrowInfinite} class="fas fa-arrow-up"></animated.i> 
    </div>
  );
}

export default Exam;

const wrapper = css`
  border: 1px red solid;
  width: 400px;
  height: 600px;
  margin: 100px auto
  ;
  background-color: rgb(140,47,65);

  h1 {
    color: white;
    line-height: 0.2em;
    text-align: center;
  }

  i {
    color: white;
    /* border: 1px white solid; */
    display: block;
    height: 50px;
    text-align: center;
    position: relative;
  }
`;

const videoInner = css`
  position: relative;
  text-align: center;
`;

const angle = css`
  border: 1px red solid;
  border-width: 0 34px 34px 0;
  border-color: transparent #8c2f41 hotpink transparent;
  position: absolute;
  top: 74.5%;
  right: 6%;
  transform: rotate( 90deg );
`;
