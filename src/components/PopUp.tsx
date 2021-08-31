import React from "react";
import styled from 'styled-components'
import card from "react-subscribe-card"
import { Text } from "@pancakeswap/uikit";
import CountDownTimer from "./CountDownTimer"

const SubscribeCard = card as React.ElementType

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
const Modalbody = styled.div`
  background-color: white;
  position: relative;
  top: 30%;
  left: 25%;
  width: 50%;
  padding: 40px 20px;
  border-radius: 5px;
  align-items: center;
  display: block;

  @media (max-width: 946px) {
    width: 90%;
    left: 5%;
  }
`

const Close = styled.div`
  
  font-family: Arial, Helvetica, sans-serif;
  background: #a66df2;
  color: #fff;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 34px;
  height: 34px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
  padding-top: 5px;

  &:hover {
    background: #b590e6;
    cursor: pointer;
  }
`

const TimerContainer = styled.div`
  color: #333;
  margin: 0 auto;
  text-align: center;
`

const Headline = styled.h1`
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: .125rem;
  text-transform: uppercase;
`

const mailchimpURL =  `https://gmail.us6.list-manage.com/subscribe/post?u=ef29a70f038e5300bf7424c0e&amp;id=2c8f20e283`

const outerCardStyle = `
      padding: 0;
      margin: auto;
    `

const subContainerStyle = `
      box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
      align-items: center;
    `

const subInputStyle = `
      border-width: 0;
      margin: 0;
    `

const subButtonStyle = `
      border-radius: 3px;
      flex-grow: 1;
      background-color: #a66df2;
      color: #fdfdfd;
    `

const titleStyle = `
  font-size: 20px;
  font-weight: 500;
  margin: 10px 10px;
  text-align: center;
  word-break: break-word;

`

const descriptionStyle = `
  display: none;
`

const Contact = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`
const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };

  const hoursMinSecs = {days:3, hours:1, minutes:20, seconds:40}

  return (
    <Modal>
      <Modalbody>
        <Close role="button" onClick={handleClick} onKeyDown={handleClick} tabIndex={0}>
          &times;
        </Close>
        <TimerContainer>
          <Headline>Game starts in:</Headline>
          <CountDownTimer hoursMinSecs={hoursMinSecs} />
        </TimerContainer>
        <SubscribeCard
          mailchimpURL={mailchimpURL}
          title='Subscribe e-mail to get notification'
          titleStyle={titleStyle}
          descriptionStyle={descriptionStyle}
          outerCardStyle={outerCardStyle}
          subContainerStyle={subContainerStyle}
          subInputStyle={subInputStyle}
          subButtonStyle={subButtonStyle}
        />
        <Contact>
          {/* <p>Want to donate to the start jackpot</p> */}
          <p>Contact : <a href="mailto:emailaddress@email.com">emailaddress@email.com</a></p>
        </Contact>
      </Modalbody>
    </Modal>
  );
};

export default PopUp;