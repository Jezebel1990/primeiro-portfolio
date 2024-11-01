import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {NavBar}  from "./components/NavBar/NavBar";
import  {Banner}  from "./components/Banner/Banner";
import  {Stack}  from "./components/Stack/Stack";
import  {Projects}  from "./components/Project/Projects";
import  {Contact}  from "./components/Contact/Contact";
import  {Footer}  from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
