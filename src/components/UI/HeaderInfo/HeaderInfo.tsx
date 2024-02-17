import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    background-color: #E79B2F;
    height: 31px;
    justify-content: flex-end;
    gap: 50px;
    align-items: center;
    p{
      margin: 0;
      color: white;
      margin: 30px;
      >a{
        text-decoration: none;
        color: white;
      }
    }
@media (max-width: 460px){
  display: none;
  }
`;

const HeaderInfo = () => {
  return (
    <StyledDiv id="pradzia">
      <p><i className="bi bi-telephone"></i><a href="tel:+37068664721"> +370 686 64721</a></p>
      <p><i className="bi bi-envelope"></i><a href="mailto:info@pagalbatech.lt"> info@pagalbatech.lt</a></p>
    </StyledDiv>
  );
}

export default HeaderInfo;