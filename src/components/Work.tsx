import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router";

const Work = (
    {
      title,
      author,
      id,
      thumbnail
    }: {
      title: string,
      id: number,
      author: string,
      thumbnail: string
    }
) => {

  const navigate = useNavigate();

  return (
      <Container
          onClick={() => navigate("/work/" + id)}
      >
        <Art src={
          `assets/work/${id}/${thumbnail}`
        }
             loading="lazy"
             width="100" height="100"
             decoding="async"
        />
        <Title>
          {title}
        </Title>
        <AuthorName>
          {author}
        </AuthorName>
      </Container>
  );
};

const AuthorName = styled.div`

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  margin-top: 16px;

  color: #999999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Art = styled.img`
  width: 225px;
  height: 225px;
  border-radius: 5px;
  @media (max-width: 980px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 940px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 740px) {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 580px) {
    width: 230px;
    height: 230px;
  }
  @media (max-width: 462px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 420px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 370px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 310px) {
    width: 270px;
    height: 270px;
  }
  cursor: pointer;
  border: 1px solid lightgray;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  margin-top: 20px;
  color: #000000;
  @media (max-width: 460px) {
    font-size: 16px;
    margin-top: 20px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
    margin-top: 30px;
  }
`;


export default Work;
