import styled from "styled-components";
import { Link } from 'react-scroll';

const StyledRezervacija = styled.div`
padding: 30px;
display: flex;
justify-content: center;
gap: 40px;
background-color: #F4F4F4;
> div{
  >h1{
    margin: 0;
    font-size: 1.5rem;
  }
   >h2{
    margin: 0;
    text-align: right;
    font-size: 1rem;
   }
}
> div.rezDiv{
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
}
> div.rezDiv:hover{
  background-color: #E79B2F;
  border: 1px solid #E79B2F;
  cursor: pointer;
  color: white;
}
@media (max-width: 768px){
  flex-direction: column;
  align-items: center;
  gap: 15px;
  > div{
    > h1{
      text-align: center;
      padding: 10px;
    }
    > h2{
      text-align: center;
    }
  }
  > div.rezDiv{
    width: 200px;
    justify-content: center
  }
}
`;

const Rezervacija = () => {
  return (
    <StyledRezervacija>
      <div>
        <h1>Įvairiausios technikos pervežimas</h1>
        <h2>Rezervuokite traliuką jau dabar</h2>
      </div>
      <div className="rezDiv">
        <Link to='kontaktai' spy={true} smooth={true} offset={-100} duration={500}><p>TRALIUKO REZERVACIJA</p></Link>
      </div>
    </StyledRezervacija>
  );
}

export default Rezervacija;