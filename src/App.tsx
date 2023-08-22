import React from 'react';
import './App.css';
import styled from "styled-components";
import background from './images/pic1.jpg';
import {ActionBtn} from "./components/Button.styled";
import {ImgContainer} from "./components/ImgContainer.styled";
import {Title, Article} from "./components/TextContent.styled";
import {WrapperBox} from "./components/WrapperBox";


function App() {
    return (
        <div className="App">
            <Box>
                <ImgContainer img={background}/>
                <WrapperBox>
                    <Title>Headline</Title>
                    <Article>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</Article>
                </WrapperBox>
                <WrapperBox>
                    <ActionBtn primary>See more</ActionBtn>
                    <ActionBtn outlined>Save</ActionBtn>
                </WrapperBox>

            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
  width: 300px;
  height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);

  ${WrapperBox}:last-of-type {
    margin-top: 19px;
    margin-bottom: 22px;
  }
`



