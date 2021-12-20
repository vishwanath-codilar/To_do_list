import React ,{useState}from "react";
import './App.css';
import Header from './components/to_do_list';


function App() {
   
const themeChange = () =>{
  var img1=document.getElementById('image');
  
  
  if (img1.src.match("images/icon-moon.svg")  ) {
    img1.src = "images/icon-sun.svg";
    document.body.style.backgroundColor= '#25273c';
    document.body.style.color= 'white';
    document.body.style.transition='600ms';
    document.body.querySelector('.results').style.boxShadow = "0 35px 50px rgb(0 0 0 / 50%)";
    document.body.querySelector('.results').style.backgroundColor="#25273c";
    document.body.querySelector('.Theme').style.backgroundImage="url('/images/bg-desktop-dark.jpg')"
    document.querySelector('.btns').style.backgroundColor="#25273c";
    document.querySelector('input').style.backgroundColor="#25273c";
    document.querySelector('input').style.color="white";
    


}
else {
    img1.src = "images/icon-moon.svg";
    document.body.style.color= 'black';
    document.body.style.transition='600ms';
    document.body.style.backgroundColor='white';
    document.body.querySelector('.Theme').style.transition='2000ms';
    document.body.querySelector('.Theme').style.backgroundImage="url('/images/bg-desktop-light.jpg')"
    document.body.querySelector('.results').style.boxShadow = "0 35px 50px rgb(194 195 214 / 50%)";
    document.body.querySelector('.results').style.backgroundColor="white";
    document.querySelector('input').style.color="black";
    
    document.querySelector('.btns').style.backgroundColor="white";
    document.querySelector('input').style.backgroundColor="white";

    
}

}
  return (
    <>
    <div className="App" >
     
      <Header themeChange={themeChange}/>
    </div>
    </>
  );
}

export default App;
