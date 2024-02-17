import styled from "styled-components";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const StyledForma = styled.form`
display: flex;
flex-direction: column;
gap: 5px;
>h1{
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
}
>input{
  width: 90%;
  height: 20px;
}
>textarea{
  width: 90%;
  height: 100px;
  resize: none;
}
input[type="submit"]{
  background-color: #E79B2F;
  width: 200px;
  height: 30px;
  margin: 10px auto;
  border: 0;
  border-radius: 10px;
  color: white;
}
input[type="submit"]:hover{
  cursor: pointer;
  color: green;
}
@media (max-width: 768px){
  align-items: center;
}
`;

const KontaktuForma = () => {

  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_5s8log8', 'template_ki80xs1', form.current, 'zcoEvjkqJDGmEcUO1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return ( 
    <StyledForma ref={form} onSubmit={sendEmail}>
      <h1>Susisiekite su mumis:</h1>
      <label htmlFor="user_name">Vardas: </label>
      <input type="text" name="user_name" id="user_name" required/>
      <label htmlFor="user_tel">Telefono numeris: </label>
      <input type="user_tel" name="user_tel" id="user_tel" />
      <label htmlFor="user_email">El. paštas: </label>
      <input type="email" name="user_email" id="user_email" required/>
      <label htmlFor="message">Pranešimas: </label>
      <textarea name="message" id="message" required></textarea>
      <input type="submit" value="SIŲSTI" />
    </StyledForma>
   );
}
 
export default KontaktuForma;