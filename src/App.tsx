import './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import HeaderInfo from './components/UI/HeaderInfo/HeaderInfo';
import Hero from './components/pages/Hero/Hero';
import Rezervacija from './components/UI/Rezervacija/Rezervacija';
import Paslaugos from './components/pages/Paslaugos/Paslaugos';
import ApieMus from './components/pages/ApieMus/ApieMus';
import Galerija from './components/pages/Galerija/Galerija';
import Kontaktai from './components/pages/Kontaktai/Kontaktai';

function App() {

  return (
    <>
      <HeaderInfo />
      <Header />
      <main>
        <Hero />
        <Rezervacija />
        <Paslaugos />
        <ApieMus />
        <Galerija />
        <Kontaktai />
      </main>
      <Footer />
    </>
  );
}

export default App;
