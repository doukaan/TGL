import HelloSection from './Components/HelloSection';
import ServicesSection from './Components/ServicesSection';
import ContactSection from './Components/ContactSection';
import ProcessSection from './Components/ProcessSection';
import Footer from './Components/footer';
import Header from './Components/Header';
function App() {
  return (
   <div>
    <div>
      <Header/>
    </div>
    <div id='home'>
      <HelloSection/>
    </div>
    <div id='services'>
      <ServicesSection/>
    </div>
    <div id='work'>
      <ProcessSection/>
    </div>
    <div id='contact'>
      <ContactSection/>
    </div>
    
      <div>
        <Footer/>
      </div>
   </div>
  );
}

export default App;
