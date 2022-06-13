import React from "react";
import styled from "styled-components";

const Header = () =>{
  return(
<Container>
  <div className="carrinho">
    <h2>HEADER</h2>
    <strong></strong>
    <span></span>
  </div>
</Container>
  );
}
export default Header;
export const Container = styled.div`
  display: flex;
  height: 30vh;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
   background-image: linear-gradient(to bottom, #4169e1, white);
   .reserva{
  display: flex;
  align-items: center;
  text-decoration: none;
}

.reserva div{
  text-align: right;
  margin-right: 10px;
}

.reserva strong{
  color: #FFF;
  display: block;
  
}

.reserva span{
  color: #FFF;
  font-size: 15px
}

`;