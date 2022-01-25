import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // For alert message
  const [alert, setAlert] = useState(null)
  const [aboutStyle, setAboutStyle] = useState(null)

  let showAlert=(msg, type)=>{
    setAlert(
      {type:type, message:msg})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // For dark mode purpose
  const [mode, setMode] = useState('light')
  let toggleMode=(tempMode='light')=> {
    if(tempMode=== "dark" && mode==='light' ){
    setMode('dark')
    document.body.style.color='white'
    document.body.style.backgroundColor='#342655'
    console.log(aboutStyle)
    if (document.getElementsByTagName('textarea')[0] !== undefined){
      document.getElementsByTagName('textarea')[0].style.backgroundColor='rgb(87 77 111)'
    document.getElementsByTagName('textarea')[0].style.color='white'
    document.getElementsByTagName('textarea')[0].style.border='1px white solid'}
    else{
      setAboutStyle({backgroundColor:'rgb(87 77 111)',color:'white',})
      document.getElementById('aboutid').style.border='solid white 1px'
      // document.getElementById('aboutid').style.color='white'
    }
    showAlert(' Dark mode has been enabled', 'success')
  }else if(tempMode==='red'&& mode==='light'){
    setMode('red')
    document.body.style.color='white'
    document.body.style.backgroundColor='rgb(137 35 35)'
    if (document.getElementsByTagName('textarea')[0] !== undefined){
    document.getElementsByTagName('textarea')[0].style.backgroundColor='#b93535'
    document.getElementsByTagName('textarea')[0].style.color='white'}
    else{
      setAboutStyle({backgroundColor:'#b93535',color:'white',})
      document.getElementById('aboutid').style.border='solid white 1px'
    }
    // document.getElementsByTagName('textarea')[0].style.border='1px white solid'
    showAlert(' Red mode has been enabled', 'success')
  }else if(tempMode==='green'&& mode==='light'){
    setMode('green')
    document.body.style.color='black'
    document.body.style.backgroundColor='#136913'
    if (document.getElementsByTagName('textarea')[0] !== undefined){
    document.getElementsByTagName('textarea')[0].style.backgroundColor='#689f68'
    document.getElementsByTagName('textarea')[0].style.color='black'
    document.getElementsByTagName('textarea')[0].style.border='1px white solid'}
    else{
      setAboutStyle({backgroundColor:'#689f68',color:'black',})
      document.getElementById('aboutid').style.border='solid white 1px'
    }
    showAlert(' Green mode has been enabled', 'success')
  }
  else{
    setMode('light')
    document.body.style.color='black'
    document.body.style.backgroundColor='white'
    showAlert(' Light mode has been enabled', 'success')
    if (document.getElementsByTagName('textarea')[0] !== undefined){
    document.getElementsByTagName('textarea')[0].style.color='black'
    document.getElementsByTagName('textarea')[0].style.backgroundColor='white'}
    else{
      setAboutStyle({backgroundColor:'white',color:'black',})
      document.getElementById('aboutid').style.border='solid white 1px'
    }
  }}





  return (
    <>
    <Router>
    <Navbar title="TextUtils" key='Navbar' about="About us" toggleMode={toggleMode}  mode={mode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<Textform heading="Enter your text to analyze" key='TextForm'mode={mode} showAlert={showAlert} />}>
      </Route>
      <Route path='/about' key='about' element={  <About mode={mode} aboutStyle={aboutStyle}/>}>
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
