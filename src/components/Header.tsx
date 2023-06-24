import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useNavigate, useLocation} from "react-router";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [nav,setNav] = useState(false);

    useEffect(() => {
        if(nav)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "unset";
    },[nav])

    return (
        <>
            { nav &&
            <SideBarContainer>
                <SideBar>
                    <SidebarWrapper>
                        <Close onClick={() => setNav(false)}></Close>
                        <LinkSide selected={location.pathname === "/"} onClick={() => navigate("/")}>HOME</LinkSide>
                        <LinkSide selected={location.pathname.startsWith("/work")} onClick={() => navigate("/work")}>WORKS</LinkSide>
                        <LinkSide selected={location.pathname === "/profile"} onClick={() => navigate("/profile")}>PROFILE</LinkSide>
                    </SidebarWrapper>
                </SideBar>
            </SideBarContainer>
            }
        <Container>
            <Wrapper>
                <ThreeLine onClick={() => setNav(true)}></ThreeLine>
                <Logo data="http://sunrin.graphics/2023/images/logo.svg" width={74} height={30} onClick={()=>navigate("/")}/>
                <Links>
                    <li>
                        <Link selected={location.pathname === "/"} onClick={() => navigate("/")}>HOME</Link>
                    </li>
                    <li>
                        <Link selected={location.pathname.startsWith("/work")} onClick={() => navigate("/work")}>WORKS</Link>
                    </li>
                    <li>
                        <Link selected={location.pathname === "/profile"} onClick={() => navigate("/profile")}>PROFILE</Link>
                    </li>
                </Links>
            </Wrapper>
        </Container>
            </>
    );
};

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Link = styled.div<{selected?:boolean}>`
  font-weight: ${(props) => props.selected ? `600;
    ` : `
    400;
    `};
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.selected ? `#374148` : `#b9b9b9`};
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.selected ? `#293136` : `#777777`};
  }
`

const LinkSide = styled.div<{selected?:boolean}>`
  font-weight: ${(props) => props.selected ? `600;
    ` : `
    400;
    `};
  font-size: 19px;
  line-height: 24px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.selected ? `#374148` : `#b9b9b9`};
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.selected ? `#293136` : `#777777`};
  }
`


const Logo = styled.object`

`;

const Container = styled.header`
  display: flex;
  height: 75px;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 1);
  border: 0.5px solid #FFFFFF;
  box-shadow: 0 0 10px 0 rgba(34,34,34,.15);
  backdrop-filter: blur(12px);
  top:0;
  z-index: 99;
`

const SideBar = styled.div`
  z-index:99999;
  position: absolute;
    height: 100vh;
    left:0;
    top:0;
    width: 60%;
    background: white;
    box-shadow: 3px 0px 4px rgba(185, 197, 241, 0.25);
`

const SidebarWrapper = styled.div`
  margin-top: 50px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    gap:42px;
    align-items: flex-start;
`

const SideBarContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.49);
`

const Wrapper = styled.div`
  display: flex;
  max-width: 970px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    padding: 0 40px;
  }
  @media (max-width: 600px) {
    justify-content: start;
    padding: 0;
    height: 100vh;
  }
`
const ThreeLine = styled.div`
  @media (max-width: 600px){
      width: 18px;
      height: 14px;
      margin: 30px 25px 31px 25px;
      background-image: url("http://sunrin.graphics/2023/images/three-line.svg");
    display: block;
  }
  display: none;
`

const Close = styled.div`
  @media (max-width: 600px){
      width: 32px;
      height: 32px;
      background-image: url("http://sunrin.graphics/2023/images/close.svg");
      background-size: cover;
    display: block;
  }
  display: none;
`
export default Header;
