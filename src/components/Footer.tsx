

import React from 'react';
import styled from "styled-components";
const Footer = () => {
    return (
        <Container>
        <Wrapper>
          <Section>
            <TitleRow>
              <Logo />
              <Title>선린인터넷고등학교 콘텐츠디자인과</Title>
            </TitleRow>
            <SubText>
                서울특별시 용산구 원효로97길 33-4<br/>
                선린인터넷고등학교 3호관 2층 콘텐츠디자인과<br/>
                Tel. 713-6213 | Fax. 704-0960<br/>
            </SubText>
            <SubText>
                © 2023. 선린인터넷고등학교 콘텐츠디자인과<br/>
                All Rights Reserved.
            </SubText>
          </Section>
          <Section>
            <Title2>웹사이트</Title2>
            <Block>
              <Title3>디자인</Title3>
              <Name>유민경 주현명 이서율</Name>
            </Block>
            <Block>
              <Title3>개발</Title3>
              <Name>주현명 이서율</Name>
            </Block>
          </Section>
          <Section>
            <Title2>졸업준비위원회</Title2>
            <SubTitle>
              <Light>
                신동민 문정윤 강현빈 김정은
                백승윤 유민경 이수빈 이시연
                이태은 이태훈 차하람 한서연
                황서희
              </Light>
            </SubTitle>
            <IconBox>
                <a href="https://sunrint.sen.hs.kr" target={"_blank"}>
                    <Icon><img src="http://sunrin.graphics/2023/images/sunrin.svg" alt="sunrinIcon"/></Icon>
                </a>
                <a href="https://www.instagram.com/sr_voyage_2023/" target={"_blank"}>
                    <Icon><img src="http://sunrin.graphics/2023/images/instagram.svg" alt="instagramIcon"/></Icon>
                </a>
                <a href="https://www.youtube.com/@user-wi9bc4qg4g" target={"_blank"}>
                    <Icon><img src="http://sunrin.graphics/2023/images/youtube.svg" alt="youtubeIcon"/></Icon>
                </a>
            </IconBox>
          </Section>
        </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  @media (max-width: 970px) {
    padding: 0 40px;
  }
  @media (max-width: 750px) {
    margin-top: 0;
    flex-direction: column;
    gap:24px;
    padding:32px 20px 64px 20px;
    width: 100%;
  }
  `;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 360px;
  background: white;
  //box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.07);
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  @media (max-width: 750px) {
    height: 625px;
  }
`

const Title3 = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #92939A;

`

const Section = styled.div`
    display: block;
`

const IconBox = styled.div`
    display: flex;
    gap:20px;
    height: 40px;
  margin-top: 30px;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 26px;
  @media (max-width: 750px) {
    flex-direction: row;
    &:nth-child(0) {
      margin-top: 16px;
    }
    margin-top: 4px;
  }
  
`

const Name = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: rgba(50, 52, 64, 0.79);
`;

const TitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  
  `;

const Logo = styled.div`
    width: 23px;
    height: 28px;
    background-image: url("http://sunrin.graphics/2023/images/sunrin2.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;


const Icon = styled.div`
    width: 40px;
    height: 40px;
  background: #323440;
    border-radius: 100%;

    display:inline-flex;
    justify-content:center;
    align-items:center;
`
const Light = styled.span`font-weight: 400;
font-size: 15px;
line-height: 150%;
color: rgba(50, 52, 64, 0.79);
`;

const Title = styled.div`
font-weight: 500;
font-size: 21px;
line-height: 150%;
color: #323440;
  @media (max-width: 750px) {
    font-size: 18px;
    line-height: 150%;
  }
`;

const Title2 = styled.div`
font-weight: 500;
font-size: 19px;
line-height: 150%;
color: #323440;
`;

const SubTitle = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 150%;
margin-top: 25px;
color: #000000;
  width: 171px;
  @media (max-width: 750px) {
    margin-top: 16px;
    width: 258px;
  }
`;

const SubText = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: #92939A;
  margin-top: 25px;
  @media (max-width: 750px) {
    margin-top: 16px;
  }
`;


export default Footer;
