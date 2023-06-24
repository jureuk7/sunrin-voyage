import React from 'react';
import styled from "styled-components";
import {profile} from "../data/profile";

const Profile = ({name} : { name: string}) => {

    const formatter = (i:number) => {
        if(i.toString().length === 1)
            return "00"+i.toString();
        if(i.toString().length === 2)
            return "0"+i.toString();
    }

    return (
        <Container>
            <Picture url={`assets/profile/profile${formatter(profile.findIndex(e => e === name)+1)}.JPG`} />
            <Name>
                {name}
            </Name>
        </Container>
    );
};

const Container = styled.div`
    display:block;
    `;

const Picture = styled.div<{url:string}>`
    width:225px;
    height:225px;
    border-radius: 50%;
    background-image: url(${props => props.url});
    background-position: 50% 30%;
    background-size: cover; 
    @media (max-width: 500px) {
        width:150px;
        height:150px;
    }
`;

const Name = styled.div`
    margin-top: 20px;
    font-weight: 500;
    font-size: 19px;
    line-height: 21px;
    text-align: center;
    color: #000000;
`;



export default Profile;
