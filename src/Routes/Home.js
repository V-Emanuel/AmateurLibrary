import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import art from "../assets/imgCategories/art.jpg";
import chemistry from "../assets/imgCategories/chemistry.png"
import biology from "../assets/imgCategories/biology.png"
import literature from "../assets/imgCategories/literature.jpg"
import mathematics from "../assets/imgCategories/mathematics.jpg"
import physics from "../assets/imgCategories/physics.png"
import interestelar from "../assets/imgBackgrounds/interestelar.jpg";

export default function Home() {

    const options = [{ id: 1, image: physics, category: "Physics" },
    { id: 2, image: literature, category: "Literature" },
    { id: 3, image: biology, category: "Biology" },
    { id: 4, image: art, category: "Art" },
    { id: 5, image: mathematics, category: "Math" },
    { id: 6, image: chemistry, category: "Chemistry" }];

    function search(e) {
        e.preventDefault();
    }

    return (
        <>
            <TopPage>
                <Header>
                    <h4>Amateur Library</h4>
                    <HeaderOptions>
                        <li>
                            <p>Gallery</p>
                            <ion-icon name="library"></ion-icon>
                        </li>
                        <li>
                            <p>Sign up</p>
                            <ion-icon name="person-add"></ion-icon>
                        </li>
                        <li>
                            <p>Sign in</p>
                            <ion-icon name="person"></ion-icon>
                        </li>
                        <li>
                            <p>About</p>
                            <ion-icon name="information-circle"></ion-icon>
                        </li>
                    </HeaderOptions>
                </Header>
                <Description>
                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                    <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</h2>
                </Description>
                <Search>
                    <form onSubmit={search}>
                        <input type="text" placeholder="Search"></input>
                        <button type="submit"><ion-icon name="search-outline"></ion-icon></button>
                    </form>
                </Search>
                <Categories>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>
                        {options.map(i => <Link key={i.id} to={"/"} style={{ textDecoration: 'none' }}>
                            <div>
                                <div className="externalCircle">
                                    <div className="middleCircle">
                                        <div className="internalCircle">
                                            <img src={i.image} alt={`${i.category}`}>
                                            </img>
                                        </div>
                                    </div>
                                </div>
                                <p>{i.category}</p>
                            </div>
                        </Link>)}
                    </span>
                </Categories>
                <Link to={"/"} style={{ textDecoration: 'none' }}><h3>See all Categories</h3></Link>
            </TopPage>
            <MiddleContent>
            </MiddleContent>
            <CharactersContent>

            </CharactersContent>
        </>
    );
}
const TopPage = styled.section`
    width: 100%;
    height: 660px;
    display: flex;
    flex-direction: column;
    //background-image: linear-gradient(to bottom, #051937, #003f63, #006a8a, #0097aa, #3cc6c0);
    background-color: black;
    scroll-snap-align: start;
    Link{
    width: 100%
    }
    Link, h3{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h3{
            height: 70px;
            font-weight: 400;
            font-size: 20px;
            font-family: 'Mynerve';
            font-style: normal;
            color: #006686;
            &:hover{
                font-size: 22px;
                color: #eee9e5;
                transition: 0.5s;
            }
            &:not(:hover){
                transition: 0.7s;
            }
        }
`;
const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    position: relative;
    h4{
        font-weight: 300;
        font-size: 25px;
        font-family: 'Saira Stencil One';
        font-style: normal;
        color: #eee9e5;
        position: absolute;
        top: 25px;
        left: 30px;
    }

`;
const HeaderOptions = styled.ul`
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-right: 20px;
        li{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 30PX;
            box-sizing: border-box;
            padding: 5px;
            ion-icon {
                margin-left: 5PX;
                color: #eee9e5;
                font-size: 12px;
            }
            P{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 18px;
                color: #eee9e5;
            }
            :hover{
                    cursor: pointer;
                    border-bottom: 1px;
                    border-style: solid;
                    border-color: #FFFFFF;
                    margin-bottom: 10px;
                    transition: 0.5s;
                }
            &:not(:hover){
                transition: 0.5s;
            }
        }
`;
const Description = styled.span`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-bottom: 15px;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    color: #eee9e5;
    h1, h2{
        width: 70%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-bottom: 10px;
    }
    h1{
        font-weight: 700;
        font-size: 18px;
    }
    h2{
        font-weight: 400;
        font-size: 15px;
    }
`;
const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            width: 550px;
            height: 38px;
            background: #FFFFFF;
            box-sizing: border-box;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            color: #000000;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border: none;
            padding-left: 20px;
            &:placeholder-shown{
                line-height: 25px;
                padding-left: 20px;
                color: #DBDBDB;
            }
        }
        button{
            width: 55px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #33384e;
            border: none;
            ion-icon {
                color: #FFFFFF;
                font-size: 25px;
                --ionicon-stroke-width: 50px;
            }
            &:hover{
                cursor: pointer;
                background-color: #ddcaa2;
                transition: 0.5s;
                ion-icon {
                    --ionicon-stroke-width: 70px;
                    color: #33384e;
                    transition: 0.5s;
            }
            }
            &:not(:hover){
                transition: 0.5s;
                ion-icon {
                    transition: 0.5s;
                }
            }
        }
    }
    
    
`;
const Categories = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .text{
        width: 70%;
        height: 65px;
        font-weight: 400;
        font-size: 18px;
        font-family: 'Roboto';
        font-style: normal;
        color: #eee9e5;
    }
    span, .text, div, p{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span{
        width: 75%;
        justify-content: space-around; 
        div{
            height: 230px;
            flex-direction: column;
            justify-content: flex-end;
            .externalCircle{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 134px;
                height: 134px;
                position: relative;
                z-index: 1;
                background-color: #ffffff;
                clip-path: circle(50.0% at 50% 50%);
                .middleCircle{
                    position: absolute;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 132px;
                    height: 132px;
                    background-color: #000000;
                    clip-path: circle(50.0% at 50% 50%);
                    .internalCircle{
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 3;
                        display: flex;
                        background-color: #fee8e8;
                        width: 125px;
                        height: 125px;
                        clip-path: circle(50.0% at 50% 50%);
                        border-style:double;
                        border-color: #051937;
                        filter: brightness(75%);
                        img{
                            width: 180px;
                        }
                        &:hover{
                            filter: brightness(100%);
                            transition: 0.5s;
                        }
                        &:not(:hover){
                            transition: 0.5s;
                        }
                    }
                }
            }
            p{
                height: 50px;
                font-weight: 400;
                font-size: 22px;
                font-family: 'Mynerve';
                font-style: normal;
                line-height: 18px;
                color: #eee9e5;
            }
    }
    }
    
`;
const MiddleContent = styled.section`
    width: 100%;
    height: 550px;
    scroll-snap-align: start;
    background-image:url(${interestelar});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(60%);
`;
const CharactersContent = styled.section`
    width: 100%;
    height: 650px;
    scroll-snap-align: start;
    background-color: #000000;
`;
