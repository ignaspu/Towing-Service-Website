import styled from "styled-components";

const StyledHero = styled.section`
    background-image: url('https://pagalbatech.lt/img/technine-pagalba-kelyje-vilnius.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    > div.overlay{
      background-color: rgba(0,0,0,0.5);
    }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
      > h1{
        color: white;
        width: 80%;
        text-align: center;
      }
      > p{
        color: white;
      }
      >a{
        text-decoration: none;
        color: white;
        > span{
          background-color: #E79B2F;
          padding: 10px 20px;
          border-radius: 10px;
          width: 15%;
        }
      }
    }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div className="overlay">
        <div>
          <h1>Techninė pagalba kelyje visą parą, visomis dienomis, visoje Lietuvoje</h1>
          <p>Įvyko problema kelyje? Skambinkite!</p>
          <a href="tel:+37068664721"><span>+370 686 64721</span></a>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;