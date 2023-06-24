import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Work from "../components/Work";
import {work} from "../data/work";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WorkList = () => {

    const [selected, setSelected] = useState<number>(0);
    const categories:string[] = ["3D", "Illust", "Graphic", "Video", "UI/UX", "Special"];
    const [query,setQuery] = useState("")
    const [finalData,setFinalData] = useState(work);

    useEffect(() => {
        setFinalData(work.filter(v => selected !== 0 ? v.category === categories[selected] : v))
    },[selected, query])

    return (
        <>
          <Header />
        <Container>
            <Wrapper>
                <PageHeader>
                    <PageTitle>
                        학생들 작품
                    </PageTitle>
                    <PageDescription>
                        116기 콘텐츠디자인과 학생들의 졸업작품입니다.
                    </PageDescription>
                </PageHeader>
                <SearchContainer>
                    <SearchInput placeholder={"작품명으로 검색"} value={query} onChange={(e) => setQuery(e.target.value)} />
                    <Icon className="material-symbols-rounded">search</Icon>
                </SearchContainer>
                <CategorySelector>
                    {
                        categories.map((category, i) => (
                            <Category
                                key={i}
                                selected={selected === i}
                                onClick={() => setSelected(i)}
                            >
                                {category}
                            </Category>
                        ))
                    }
                </CategorySelector>
                <ArtworkContainer>
                    {finalData.map((v, i) => (
                            <Work
                                id={v.id}
                                key={i}
                                title={v.name}
                                author={v.author.join(",")}
                                thumbnail={v.thumbnail}
                            />
                    ))}
                </ArtworkContainer>
            </Wrapper>
        </Container>
            <Footer />
            </>
    );
};

const Icon = styled.div`
margin-right: 10px;
`

const SearchInput = styled.input`
  width: 100%;
  outline: none;
  height: auto;
  border: none;
  background: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: rgb(26, 26, 26);

  &::placeholder {
    color: #808080;
  }
`

const SearchContainer = styled.div`
  max-width: 756px;
  width: 90%;
  height: 30px;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:12px;
  margin-top: 80px;
`

const ArtworkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  margin-top: 56px;
  row-gap: 40px;
  column-gap: 20px;
  @media screen and (max-width: 980px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 735px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    column-gap: 15px;
  }
    @media (max-width: 370px) {
      grid-template-columns: repeat(1,1fr);
    }
    `;


const Container = styled.div`
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
    display:flex;
    flex-direction:column;
    align-items:center;
  margin-top: 80px;
  @media (max-width: 900px) {
    padding: 0 32px;
  }
`;

const CategorySelector = styled.div`
  display: flex;
  gap:25px;
  margin-top: 50px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (max-width: 900px) {
    gap:16px;
  }
`

const Category = styled.div<{selected?:boolean}>`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.selected ? `#FFFFFF` : `#9f9f9f`};
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 45px;
  background: ${(props) => props.selected ? `linear-gradient(180deg, #005395 14.14%, #3687C8 87.68%);
border: 0.5px solid rgba(255, 255, 255, 0.9);` : `#FFFFFF`};
  border:  ${(props) =>  !props.selected && `1px solid #E6E6E6`};
  border-radius: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${(props) => props.selected ? `linear-gradient(180deg, #044477 14.14%, #2877B6 87.68%);
border: 0.5px solid rgba(255, 255, 255, 0.9);` : `#f1f1f1`};
  }
  @media (max-width: 745px) {
    width: 80px;
    height: 40px;
    font-size: 14px;
    line-height: 18px;
    border-radius: 14px;
  }
`


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



export default WorkList;
