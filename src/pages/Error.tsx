import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Error = () => {
  const { push } = useHistory();

  return (
    <Banner>
      <div className="details">
        <h2>Acesso Não Autorizado...</h2>
        
        <a
          href="/"
          rel="noreferrer">
          Voltar
        </a>
      </div>
    </Banner>
  );
};
export default Error;

const Banner = styled('div')(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: gray;
    background-blend-mode: soft-light;
    background-size: 180vh;

    .details {
      text-align: center;
      position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
      h2 {
        font-size: 40px;
        color: #000;
      }
      a {
        text-decoration: none;
        color: white;
        display: flex;
        margin-top: 2%;
        margin-left: 30vh;
        font-size: 20px;
      }
      p{
        
        color: #000;
        font-size: 20px;
      }

    }
  `
);