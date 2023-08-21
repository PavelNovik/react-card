import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import background from './images/pic1.jpg';

function App() {
    return (
        <div className="App">
            <Box>
                <ImgContainer/>
                <Title>Headline</Title>
                <Article>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Article>
                <ActionBtn>See more</ActionBtn>
                <ActionBtn>Save</ActionBtn>

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
`
const ImgContainer = styled.div`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  background: center / cover no-repeat url(${background}), lightgray 50%;

`
const Title = styled.h1`
  color: #000;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const Article = styled.p`
  color: #ABB3BA;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`
const ActionBtn = styled.button`
  width: 5.375rem;
  height: 1.875rem;
  border-radius: 0.3125rem;
  background: #4E71FE;
`