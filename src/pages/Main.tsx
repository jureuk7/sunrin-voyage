import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useNavigate} from "react-router";

export default function Main() {
  const navigate = useNavigate();
  return (
      <>
        <Header />
  <Container>
    <Section1>
        <Images>
            <Ship src={"http://sunrin.graphics/2023/images/ship.svg"} alt={"ship"} width={598} height={345} />
            <Logo src={"http://sunrin.graphics/2023/images/logo.png"} alt="logo" width={430} height={127} />
            <Typo data={"http://sunrin.graphics/2023/images/typo.svg"} width={320} height={52} />
        </Images>

      <Row>
          <Button onClick={() => navigate("/work")}>
              <Play className="material-symbols-rounded">play_arrow</Play>
              전시회 작품 보러가기
          </Button>
          <ButtonA href={"https://youtu.be/q-_XgfyH3AU"} target={"_blank"}>
              <Icon className="material-symbols-rounded">movie</Icon>
              메인 영상 보러가기
          </ButtonA>
      </Row>
    </Section1>
  </Container>
          <Footer />
          </>
  )
}

const slideIn = keyframes`
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 0;
  }

@media (max-width: 750px) {
  0% {
    margin-top: 0;
  }

  50% {
    margin-top: 10px;
  }

  100% {
    margin-top: 0;
  }
}
`;

const Typo = styled.object`
  position: absolute;
  top: calc(((100vh - 75px - 644px) / 2) + 405px + 140px);
  @media (max-width: 1000px) {
    top: calc(((100vh - 75px - 404px) / 2) + 310px + 70px);
    width: 278px;
    height: 62px;
  }
  @media (max-width: 550px) {
    top: calc(((100vh - 75px - 404px) / 2) + 310px);
    width: 198px;
    height: 32px;
  }
`

const Logo = styled.img`
  position: absolute;
  top: calc(((100vh - 75px - 644px) / 2) + 405px);
  @media (max-width: 1000px) {
    top: calc(((100vh - 75px - 554px) / 2) + 370px);
    width: 334px;
    height: 99px;
  }
  @media (max-width: 550px) {
    top: calc(((100vh - 75px - 404px) / 2) + 230px);
    width: 234px;
    height: 69px;
  }
`


const Ship = styled.img`
  animation: ${slideIn} 3s ease-in-out infinite;
  position: absolute;
  top: calc((100vh - 75px - 644px) / 2);
  @media (max-width: 1000px) {
    top: calc((100vh - 75px - 404px) / 2);
    width: 411px;
    height: 279px;
  }
  @media (max-width: 550px) {
    top: calc((100vh - 75px - 404px) / 2);
    width: 311px;
    height: 179px;
  }
`

const Icon = styled.div`
  font-size: 22px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
  }
`

const Play = styled.span`
  font-variation-settings:
          'FILL' 1,
          'wght' 400,
          'GRAD' 0,
          'opsz' 48;
          @media (max-width: 1000px) {
            font-size: 20px;
          }
          @media (max-width: 550px) {
            font-size: 18px;
          }
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  margin-top: 75px;
  background-image: url("http://sunrin.graphics/2023/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const Section1 = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const Row = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  position: absolute;
  top: calc(((100vh - 75px - 644px) / 2) + 630px);
  @media (max-width: 1000px) {
    top: calc(((100vh - 75px - 644px) / 2) + 560px);
    gap:23px;
  }
  @media (max-width: 550px) {
    top: calc(((100vh - 75px - 644px) / 2) + 500px);
    flex-direction: column;
    gap:13px;
  }
`

const Button = styled.button`
  height: 60px;
  border-radius: 30px;
  display: flex;
  text-decoration: none;
  padding: 0 28px;
  align-items: center;
  font-weight: 600;
  gap: 16px;
  font-size: 23px;
  line-height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.13);
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease-out;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 1000px) {
    gap: 19px;
    font-size: 16px;
    width: 217px;
    padding: 0 20px;
    height: 44px;
  }
  @media (max-width: 550px) {
    gap: 19px;
    font-size: 16px;
    width: 240px;
    padding: 0 20px;
    height: 44px;
  }
`

const ButtonA = styled.a`
  height: 60px;
  border-radius: 30px;
  display: flex;
  text-decoration: none;
  padding: 0 28px;
  align-items: center;
  font-weight: 600;
  gap: 16px;
  font-size: 23px;
  line-height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.13);
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease-out;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 1000px) {
    gap: 19px;
    font-size: 16px;
    width: 217px;
    padding: 0 20px;
    height: 44px;
  }
  @media (max-width: 550px) {
    gap: 19px;
    font-size: 16px;
    width: 217px;
    padding: 0 20px;
    height: 44px;
  }
`

