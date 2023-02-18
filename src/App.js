import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import Home from "./Routes/Home";

export default function App() {

  const [nome, setNome] = useState("");
  const [token, setToken] = useState("");

  return (
    <Body>
      <GlobalStyle/>
      <UserContext.Provider value = {{nome, setNome, token, setToken}}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`;