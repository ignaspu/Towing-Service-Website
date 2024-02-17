import styled from "styled-components";

const StyledPaslaugos = styled.section`
  width: 60%;
  margin: 0 auto;
  > h1{
    text-align: center;
    padding: 20px;
    font-size: 2.3rem;
  }
  > div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 60px;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 100px;
      }
      >p{
        text-align: center;
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 768px){
    > div{
    display: grid;
    grid-template-columns: 1fr;
    }
  }
`;


const Paslaugos = () => {
  return (
    <StyledPaslaugos id="paslaugos">
      <h1>Mūsų teikiamos paslaugos</h1>
      <div>
        <div>
          <img src="https://pagalbatech.lt/svg/transportavimas.svg" alt="Automobilių, motociklų, statybinės ir žemės ūkio technikos transportavimas" />
          <p>Įvairaus tipo transporto priemonių (automobilių, motociklų, statybinės ir žemės ūkio technikos) transportavimas</p>
        </div>
        <div>
          <img src="https://pagalbatech.lt/svg/baterija.svg" alt="Automobilio ar kitos transporto priemonės užvedimas išsikrovus akumuliatoriui" />
          <p>Automobilio ar kitos transporto priemonės užvedimas išsikrovus akumuliatoriui</p>
        </div>
        <div>
          <img src="https://pagalbatech.lt/svg/remontas.svg" alt="Smulkus remontas bei diagnostika kelyje" />
          <p>Smulkus remontas bei diagnostika kelyje</p>
        </div>
        <div>
          <img src="https://pagalbatech.lt/svg/kuras.svg" alt="Kuro pristatymas jam pasibaigus" />
          <p>Kuro pristatymas jam pasibaigus</p>
        </div>
        <div>
          <img src="https://pagalbatech.lt/svg/dauztu-automobiliu-transportavimas.svg" alt="Daužtų automobilių užvilkimas ir pervežimas" />
          <p>Daužtų automobilių užvilkimas ir pervežimas</p>
        </div>
        <div>
          <img src="https://pagalbatech.lt/svg/statybiniu.svg" alt="Statybinių medžiagų bei didelių matmenų krovinių transportavimas" />
          <p>Statybinių medžiagų bei didelių matmenų krovinių transportavimas</p>
        </div>
      </div>
    </StyledPaslaugos>
  );
}

export default Paslaugos;