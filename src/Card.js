/**@jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core';

const Card = () => {

    return(
        <div css={wrapper}>hi</div>
    );
}

export default Card;

const wrapper = css`
    border: 1px red solid;
    background-color: #9e1a3a;
    width: 400px;
    height: 600px;
`;