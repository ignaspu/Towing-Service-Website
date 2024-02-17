import styled from "styled-components";

const AboutStyled = styled.section`
background-color: #F4F4F4;
display: flex;
flex-direction: column;
align-items: center;
 >h1{
  text-align: center;
  padding: 10px;
  font-size: 2.3rem;
 }
 p{
  font-size: 1.1rem;
  width: 80%;
 }
`;

const ApieMus = () => {
  return (
    <AboutStyled id="apiemus">
      <h1>Apie mus</h1>
      <p>Mūsų techninės pagalbos sunkvežimis <span style={{fontWeight: "600"}}>Mercedes-Benz Atego 818</span>. Nuvažiuojanti hidraulinė platforma <span style={{fontWeight: "600"}}>2,20 x 5,80 m</span>. Keliamoji galia <span style={{fontWeight: "600"}}>3,9 t</span>.</p>
      <p>Teikiame paslaugas transportuojant automobilius, statybinę bei žemės ūkio techniką. Mūsų patyrę vairuotojai ir specializuotos transporto priemonės užtikrina saugų bei patikimą jūsų technikos pervežimą į norimą vietą. Esame pasirengę veikti greitai ir efektyviai, kad jūsų technika būtų pristatyta laiku, saugiai ir nepažeista.</p>
      <p>Mūsų tikslas - suteikti klientams aukščiausios kokybės paslaugas, užtikrinant techninės pagalbos ir transportavimo procesų sklandumą bei saugumą. Esame pasiruošę bendradarbiauti su įvairiais klientais ir įmonėmis, siekdami patenkinti jų unikalius poreikius ir užtikrinti patikimą bei profesionalų aptarnavimą.</p>
    </AboutStyled>
  );
}

export default ApieMus;