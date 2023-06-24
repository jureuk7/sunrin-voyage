import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {work} from "../data/work";
import {profile} from "../data/profile";
import {useParams} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Work = () => {
  const [data, setData] = useState<Work | null>();
  const {id} = useParams();

  useEffect(() => {
    // @ts-ignore
    id != null && setData(work.find(v => v.id == id))
    console.log(data);
  }, [id, data])

  const formatter = (i: number) => {
    if (i.toString().length === 1)
      return "00" + i.toString();
    if (i.toString().length === 2)
      return "0" + i.toString();
  }


  interface Work {
    name: string;
    author: string[];
    category: string;
    id: number;
    thumbnail: string;
    description: string;
    profile: {
      name: string;
      instagram?: string;
      email?: string;
    }
    works: {
      type: string;
      path: string;
    }[]
  }
  return (
      <>
        <Header />
        <Container>
          {data &&
              <Wrapper>
                  <Info>
                      <InfoBox>
                          <ArtTitle>
                            {data.name}
                          </ArtTitle>
                          <InfoContents>
                              <Content>
                                {data.author}
                              </Content>
                            {
                                data.profile.instagram &&
                                <Content>
                                    instagram : {data.profile.instagram}
                                </Content>
                            }
                              <Content>
                                  e-mail: {data.profile.email}
                              </Content>
                          </InfoContents>
                      </InfoBox>
                      <Profile
                          url={`http://sunrin.graphics/2023/assets/profile/profile${formatter(profile.findIndex(e => e === data.profile.name) + 1)}.JPG`}/>
                  </Info>
                  <Description>
                    {data.description.split("\n").map((line, index) => (
                        <span key={index}>{line}<br/></span>))}
                  </Description>
                  <ArtContainer>
                    {
                      data.works.map((v, i) => (
                          v.type == "picture" ?
                              <Art key={i} src={`http://sunrin.graphics/2023/assets/work/${id}/${v.path}`}/>
                              :
                      
                              <Youtube key={i}  src={v.path} frameBorder="0"
                                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen />
                            
                      ))
                    }
                  </ArtContainer>
              </Wrapper>
          }
        </Container>
        <Footer/>
      </>
  );
};



const Youtube = styled.iframe`
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 545px;
  @media (max-width: 980px) {
    height: calc((100vw - 64px) * 0.562);
  }

`

const Art = styled.img`
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`

const Description = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #333333;
  margin-top: 40px;
  @media screen and (max-width:760px) {
  font-size: 16px;
}
  @media screen and (max-width:420px) {
  font-size: 14px;
}
`

const InfoContents = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`

const Profile = styled.div<{ url: string }>`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-position: 50% 30%;
  background-size: cover;
  background-image: url(${props => props.url});
    @media screen and (max-width:580px) {
  width: 60px;
  height: 60px;
  
}
`

const Content = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  color: #333333;
  @media screen and (max-width:580px) {
  font-size: 16px;
  
}
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;


const Wrapper = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  justify-content: space-between;
  @media (max-width: 980px) {
    padding: 0 32px;
  }
`

const ArtTitle = styled.div`
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
  color: #000000;
  @media screen and (max-width:580px) {
  font-size: 29px;
}
@media screen and (max-width:462px) {
  font-size: 20px;
}
`

const Info = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;


const ArtContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
`;

const Container = styled.div`
  margin-top: 75px;
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`


export default Work;
