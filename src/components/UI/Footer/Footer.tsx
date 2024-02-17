import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #FBF8EE;
  padding: 10px;
  > p{
    text-align: center;
  }
  >a{
    display:flex;
    justify-content: center;
  }
`;

const Footer = () => {
  return ( 
    <StyledFooter>
      <p>Visos teisės saugomos © {new Date().getFullYear()} | pagalbatech.lt - techninė pagalba kelyje visą parą, visoje Lietuvoje.</p>
      <a target="_blank" href="https://www.hey.lt/details.php?id=pagalbatech"><img width="88" height="31" src="https://www.hey.lt/count.php?id=pagalbatech" alt="Hey.lt - Nemokamas lankytojų skaitliukas"/></a>
    </StyledFooter>
   );
}
 
export default Footer;