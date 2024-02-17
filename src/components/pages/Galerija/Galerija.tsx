import styled from "styled-components";

const StyledGallery = styled.section`
background-color: #FBF8EE;
padding-bottom: 20px;
 >h1{
  text-align: center;
  padding: 20px;
  font-size: 2.3rem;
 }
 > div{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 50px;
  > div:nth-child(2n){
    justify-content: flex-start;
  }
  > div{
    display: flex;
    justify-content: flex-end;
    > img{
      width: 80%;
    }
  }
 }
@media (max-width: 768px){
  > div{
  grid-template-columns: 1fr;
  > div:nth-child(2n){
    justify-content: center;
  }
  > div{
    justify-content: center;
  }
  }
}
`;

const Galerija = () => {
  return (
    <StyledGallery id="galerija">
      <h1>Galerija</h1>
      <div>
        <div>

          <img src="https://pagalbatech.lt/img/ukines-technikos-pervezimas.png" alt="Ūkinės technikos pervežimas" />
        </div>
        <div>

          <img src="https://pagalbatech.lt/img/statybines-technikos-pervezimas.png" alt="Statybinės technikos pervežimas" />
        </div>
        <div>

          <img src="https://pagalbatech.lt/img/kroviniu-pervezimas.png" alt="Didelių gabaritų krovinių pervežimas" />
        </div>
        <div>

          <img src="https://pagalbatech.lt/img/technine-pagalba-lietuvoje.png" alt="Techninė pagalba Lietuvoje" />
        </div>
      </div>
    </StyledGallery>
  );
}

export default Galerija;