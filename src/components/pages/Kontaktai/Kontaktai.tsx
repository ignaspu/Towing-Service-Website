import styled from "styled-components";
import KontaktuForma from "../../UI/KontaktuForma/KontaktuForma";

const StyledSection = styled.section`
background-color: #F4F4F4;
padding-bottom: 20px;
 >h1{
  margin: 0;
  text-align: center;
  padding: 20px;
  font-size: 2.3rem;
 }
 > div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
 }
 > div >div.forma{
  width: 30%;
 }
 > div >div.kontaktai{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  >i{
    font-size: 2.3rem;
  }
  > span{
    font-size: 1.1rem;
    >a{
      font-size: 1.1rem;
      text-decoration: none;
      color: black;
    }
  }
  
 }
 @media (max-width: 768px){
  > div{
    flex-direction: column;
  }
  > div >div.forma{
  width: 100%;
 }
 }
`;

const Kontaktai = () => {
  return (
    <StyledSection id="kontaktai">
      <h1>Kontaktai</h1>
      <div>
        <div className="forma">
          <KontaktuForma />
        </div>
        <div className="kontaktai">
          <i className="bi bi-clock"></i><span>I - VII DIRBAME VISĄ PARĄ</span>
          <i className="bi bi-telephone"></i><span><a href="tel:+37068664721"> Telefonas: +370 686 64721</a></span>
          <i className="bi bi-whatsapp"></i><span><a href="https://wa.link/7zhagh"> WhatsApp: +370 686 64721</a></span>
          <i className="bi bi-envelope"></i><span><a href="mailto:info@pagalbatech.lt"> El. paštas: info@pagalbatech.lt</a></span>
        </div>
      </div>
    </StyledSection>
  );
}

export default Kontaktai;