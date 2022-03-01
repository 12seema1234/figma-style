import React from "react";

import styled from "styled-components";

const CardDesign = styled.div`
  height: 176px;
  width: 240px;
  background: #ffffff;
  box-shadow: 0px 2px 31px #efefef;
  border-radius: 22px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;
const Image = styled.img`
  position: relative;
  left:40%;
  height: 32px;
  width: auto;
  top: 30px;
  
`;
const Span = styled.span`
  padding-left:40px;
  padding-right: 40px;
  font-weight: bold;
`;

// const text = styled.span`
//   text-align: center;
// `
const Div1 = styled.div`
height: 50%;
width: 100%;
display: flex;
flex-wrap: wrap;
`
const Div2 = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
`


function Card(props) {
  const {cardFor , iconSrc} = props;
  return (
    <div>
      <CardDesign>
      <Div1>
        <Image src={iconSrc} alt="hash_img" />
        </Div1>
        <Div2>
        <Span>{cardFor}</Span>
        </Div2>
      </CardDesign>
    </div>
  );
}

export default Card;
