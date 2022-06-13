
import React, { useState } from "react";
import {Redirect, useHistory} from "react-router-dom";
import styled from "styled-components";


const LoginPage = () => {
  const {push} = useHistory();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
 
  const Entrar = async () =>{
    if(login == 'adm@adm' && senha == '1234'){
      push('/home')
    }else{
      <Redirect to="/error"/>
    }
    }
  
  return (
    <Banner>
      <LoginBox>
      <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
        <input type="password" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <button type="submit" onClick={() => Entrar()}>ENTRAR</button>
        </LoginBox>
    </Banner>
  );
}
export default LoginPage;
export const Banner = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #020202;
    background-blend-mode: soft-light;
    background-size: 180vh;
  `;
export const LoginBox = styled.div`
 
  width: 400px;
    height: 300px;
    margin-top: 30vh;
    background: #503B31;
    margin-left: 80vh;
    border-width: medium;
    border-radius: 10px 12px;
    border-color: #ebeaff;
    border-style: solid;
 input{
  color: #ebeaff;
    width: 50vh;
    margin: 5px;
    text-align: center;
        margin-top: 5vh;
        margin-left: 3vh;
        font-size: 20px;
        border: none;
        height: 5vh;
        background: transparent;}
button{
  cursor: pointer;
  color: #FFF;
  text-align: center;
  height: 5vh;
  margin-left: 10vh;
  margin-top: 5vh;
  width: 40vh;
  background-color: #444;
}
a{
  text-decoration: none;
  display: flex;
  margin-left: 20vh ;
}
`;


