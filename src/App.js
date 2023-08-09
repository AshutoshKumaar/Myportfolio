import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import About from "./Componets/Home/About";
import Work from "./Componets/Home/Work";
import History from "./Componets/Home/MySelf/History";
import Education from "./Componets/Home/Education/Education";
import TemplateForm from "./Componets/Form/TemplateForm";
import Fotter from "./Componets/Fotter/Fotter";



function App() {
  return (
    <div className='bg-[#0c292f] max-w-full h-auto text-xl font-extralight text-slate-100'>
      <Navbar />
      <About />
      <History />
      <Work /> 
      <Education />
      <TemplateForm />
      <Fotter />
     
    </div>
  );
}

export default App;
