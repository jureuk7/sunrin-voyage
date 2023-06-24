import React, { useState } from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";
import {profile} from "../data/profile";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProfilePage = () => {
  return (
      <>
        <Header />
        <Container nav>
          <Wrapper>
            <PageHeader>
              <PageTitle>
                프로필 사진
              </PageTitle>
              <PageDescription>
                116기 콘텐츠디자인과 학생들 프로필입니다.
              </PageDescription>
            </PageHeader>
            <ArtworkContainer>
              {
                profile.map((v, i) => (
                    <Profile
                        key={i}
                        name={v}
                    />
                ))}
            </ArtworkContainer>
          </Wrapper>
        </Container>
        <Footer/>
      </>
  );
};

const ArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 35px;
  column-gap: 30px;
  margin-top: 64px;
  @media(max-width: 3844px) and (min-width: 3833px) {
    grid-template-columns: repeat(15, 1fr);
  }
  @media(max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


const Container = styled.div<{nav:boolean}>`
  margin-top: 80px;
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

`

const Wrapper = styled.div`
    max-width: 890px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  @media (max-width: 900px) {
    padding: 0 32px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.div`
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  color: #212629;
@media screen and (max-width:420px) {
  font-size: 29px;
}
`

const PageDescription = styled.div`
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  text-align: center;
  color: #7B8287;
  margin-top: 20px;
  @media screen and (max-width:420px) {
  font-size: 14px;
  margin-top: 13px;
  }
`


export default ProfilePage;
