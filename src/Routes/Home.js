import { React, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import bg from '../assets/img/bg.jpg';

export default function Home() {

    return (
        <Back>
            <LibraryImg />
            <ClipPage>
            </ClipPage>
            <HomePage>
                <Options>
                    <div>
                        <p>Gallery</p>
                        <ion-icon name="library"></ion-icon>
                    </div>
                    <div>
                        <p>Sign up</p>
                        <ion-icon name="person-add"></ion-icon>
                    </div>
                    <div>
                        <p>Sign in</p>
                        <ion-icon name="person"></ion-icon>
                    </div>
                    <div>
                        <p>About</p>
                        <ion-icon name="information-circle"></ion-icon>
                    </div>
                </Options>
                <Cards>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </Cards>
            </HomePage>
        </Back>
    );
}

const Back = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
  55deg,
  hsl(0deg 0% 0%) 0%,
  hsl(226deg 68% 1%) 9%,
  hsl(226deg 42% 2%) 21%,
  hsl(226deg 30% 3%) 34%,
  hsl(226deg 23% 4%) 48%,
  hsl(225deg 18% 4%) 60%,
  hsl(220deg 78% 9%) 71%,
  hsl(221deg 100% 14%) 80%,
  hsl(225deg 100% 20%) 88%,
  hsl(229deg 100% 25%) 94%,
  hsl(238deg 96% 31%) 100%
);
    
`;
const LibraryImg = styled.div`
    width: 95%;
    height: 92%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-image:linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)),  url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    z-index: 1;
    
`;
const ClipPage = styled.div`
    width: 95%;
    height: 92%;
    border-radius: 8px;
    background-color: #08090d;
    position: absolute;
    z-index: 2;
    clip-path: polygon(38% 0, 100% 0, 100% 100%, 13% 100%);
    //clip-path: polygon(39% 0, 100% 0, 100% 100%, 5% 100%);
`;
const HomePage = styled.div`

    width: 95%;
    height: 92%;
    border-radius: 8px;
    background-color: transparent;
    position: relative;
    z-index: 3;

`;
const Cards =styled.ul`
    position: absolute;
    bottom: 450px;
    left: 300px;
    li {
    border-radius: 5px;
    display: block;
    position: absolute;
    background-color: #fefefe;
    width: 270px;
    height: 370px;
    top: 0;
    left: 0;
    transform:  rotate(10deg) skew(-60deg);
    transform-origin:bottom center;
    box-shadow:10px 10px 30px rgba(0,0,0,0.3) ;
    transition:.4s;
    z-index: -1;
    overflow: hidden;
    background-color: brown;
    }

    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#28fff7', endColorstr='#8128ff',GradientType=1 );
    transition:.6s;

    li:nth-child(1) {
    transform:  rotate(-20deg) skew(20deg) translate(-5px,5px); 
    }
    li:nth-child(2) {
    transform:  rotate(-20deg) skew(20deg) translate(0px,0px); 
    }
    li:nth-child(3) {
    transform:  rotate(-20deg) skew(20deg) translate(5px,-5px); 
    }
    li:nth-child(4) {
    transform:  rotate(-20deg) skew(20deg) translate(10px,-10px); 
    }
    
    :hover li:nth-child(1) {
    transform:  rotate(0deg) skew(0) translate(0px,-340px) ; 
    }
    :hover li:nth-child(2) {
    transform:  rotate(0) skew(0) translate(0px,40px); 
    }
    :hover li:nth-child(3) {
    transform:  rotate(0deg) skew(0) translate(-280px,40px) ; 
    }
    :hover li:nth-child(4) {
    transform:  rotate(0deg) skew(0) translate(-280px,-340px) ; 
    }
`;
const Options = styled.div`
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: fixed;
        right: 0px;
        top: 60px;
        box-sizing: border-box;
        padding-right: 60px;
        div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 30PX;
            box-sizing: border-box;
            padding: 5px;
            ion-icon {
                margin-left: 5PX;
                color: #FFFFFF;
                font-size: 22px;
            }
            P{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 28px;
                color: #FFFFFF;
            }
            :hover{
                    cursor: pointer;
                    border-bottom: 1px;
                    border-style: solid;
                    border-color: #FFFFFF;
                    margin-bottom: 15px;
                    transition: 0.5s;
                }
        }
`;