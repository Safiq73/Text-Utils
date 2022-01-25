import React, {useState} from 'react';
    

const Textform = (props) => {
    const [text, setText]=useState("")
    const [copyText, setCopyText]=useState("Copy")
    const [word, setWord] = useState(0)
    const [result, setResult] = useState('Result will be appeared here')
    

    const handleOnChange=(event)=>{
        setText(event.target.value)
        setCopyText("Copy")
        if (text.length===0){
            setWord(1)
        }else if ( text[text.length]===' '){
            setWord(text.split(" ").length-1)
        }
        else{
            setWord(text.split(" ").length)
        }
    }
    const handleUpClick=()=>{
        let newText= text.toUpperCase()
        setResult(newText)
        props.showAlert(" Converted to uppercase", 'success')
    }
    const handleLoClick=()=>{
        let newText= text.toLowerCase()
        setResult(newText)
        props.showAlert(" Converted to lower case", 'success')
    }
    const handleClearClick=()=>{
        let newText= ''
        setResult(newText)
        props.showAlert(" Text cleared", 'success')
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert(" Text copied", 'success')
        setCopyText("Copied!")
    }
    const handleSpaceClick=()=>{
        let newText=''
        for(let i=0;i<text.length;i++){
            if(text[i]===' ' && text[i-1]===' '){
                continue
            }else{
                newText=newText+text[i]
            }
        }
        setResult(newText)
    }
    const handleNumClick=()=>{
        let newText=''
        for(let i=0;i<text.length;i++){
            if(text[i] !==' ' && isNaN(text[i])===false){
                continue
            }else{
                newText=newText+text[i]
            }
        }
        setResult(newText)
        }
    const handlePuncClick=()=>{
        let tet=text.split("")
        let pun=String.raw`!()-[]{};:'"\,<>./?@#$%^&*_~`
        let newText=''
        for(let i=0;i<tet.length;i++){
        for(let j=0;j<pun.length;j++){
                if (tet[i]===pun.split('')[j]){
                    var punctuation=true
                    break
                }
                else{
                       punctuation=false
                }
            };
            if (punctuation === false){
                newText=newText+text[i]
            }
        }
        setResult(newText)
        }
    const handleEmailClick=()=>{
        let reg=/\w+@\w+\.\w+/gi
        let newText=text.match(reg)
        if (newText){
            newText=newText.join('\r\n')
        }else{
            newText='No E-mail ID\'s found'
        }
        setResult(newText)
        }
    const handleMobNumClick=()=>{
        let reg=/\b[6-9]\d+/g
        let newText=text.match(reg)
        if (newText){
        newText= newText.filter((element)=>{
            return element.length===10
        })
        newText=newText.join('\r\n')}else{
            newText='No mobile numbers found'
        }
        setResult(newText)
        }
        
    

        
    return (
        <div className='container'>
        <div>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <label htmlFor="textForm" className="form-label"></label>
                <textarea className='form-control text mb-3'  id="textForm" rows="8" value={text} onChange={handleOnChange} id='myBox'></textarea>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1 px-3" onClick={handleCopyClick} style={{width:'100px'}}>{copyText}</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Covert to upper case</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Covert to lower case</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Covert to upper case</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick} >Remove extra space</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleNumClick} >Remove numbers</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlePuncClick} >Remove punctuations</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleEmailClick} >Extract E-mail ID's</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleMobNumClick} >Extract mobile numbers</button>
                </div>
        </div>
        <div className="container my-2">
            <h4>Your text summary</h4>
            <h6>Number of words:{word}, Number of characters:{text.length}</h6>
            <h6>Time to read: {0.08*text.split(" ").filter((element)=> {return element.length!==0}).length} min</h6>
            <h4>Preview</h4>
            <p>{result}</p>
        </div>
        </div>
    );
}

export default Textform;

