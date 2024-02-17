import styled from "styled-components";
import { Link } from "react-scroll";
import './header.css';
import { useState } from "react";

const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
position: sticky;
top: 0;
background-color: #FBF8EE;
padding: 0 30px 0 30px;
.logo{
  height: 80px;
  width: auto;
  padding: 5px 0 5px 0;
}
.link:hover{
  cursor: pointer;
  border-bottom: 1px solid #E79B2F;
  padding: 0 0 4px;
}
>nav{
  >.smallNav{
    display: block;
    >i{
      color: black;
    }
  }
    > div > i{
      font-size: 2rem;
      color: white;
    }
      > div > i:hover{
        cursor: pointer;
      }
    }
    div.bigNav{
      display: none;
      > ul{
        padding: 0;
        display: flex;
        gap: 20px;
        >li{
        list-style-type: none;
      }
  }
}
@media (min-width: 768px){
    > nav{
      >.smallNav{
        display: none;
      }
        div.bigNav{
            display: block;
        }
    }
}
`;

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledHeader>
        <div>
          <Link to='pradzia' spy={true} smooth={true} offset={-100} duration={500}><img className="logo" src="https://pagalbatech.lt/img/logo.png" alt="PAGALBATECH.lt - techninė pagalba kelyje visoje Lietuvoje" /></Link>
        </div>
        <nav>
          <div className="bigNav">
            <ul>
              <li><Link className="link" to='pradzia' spy={true} smooth={true} offset={-100} duration={500}>PRADŽIA</Link></li>
              <li><Link className="link" to='paslaugos' spy={true} smooth={true} offset={-100} duration={500}>PASLAUGOS</Link></li>
              <li><Link className="link" to='apiemus' spy={true} smooth={true} offset={-100} duration={500}>APIE MUS</Link></li>
              <li><Link className="link" to='galerija' spy={true} smooth={true} offset={-100} duration={500}>GALERIJA</Link></li>
              <li><Link className="link" to='kontaktai' spy={true} smooth={true} offset={-100} duration={500}>SUSISIEKITE</Link></li>
            </ul>
          </div>
          <div className="smallNav" onClick={handleOpen}><i className="bi bi-list"></i></div>
        </nav>
      </StyledHeader>
      {
        isOpen &&
        <div className="mobileNav">
          <ul>
            <li><Link className="link" to='pradzia' spy={true} smooth={true} offset={-100} duration={500}>PRADŽIA</Link></li>
            <li><Link className="link" to='paslaugos' spy={true} smooth={true} offset={-100} duration={500}>PASLAUGOS</Link></li>
            <li><Link className="link" to='apiemus' spy={true} smooth={true} offset={-100} duration={500}>APIE MUS</Link></li>
            <li><Link className="link" to='galerija' spy={true} smooth={true} offset={-100} duration={500}>GALERIJA</Link></li>
            <li><Link className="link" to='kontaktai' spy={true} smooth={true} offset={-100} duration={500}>SUSISIEKITE</Link></li>
          </ul>
        </div>
      }
    </>
  );
}

export default Header;