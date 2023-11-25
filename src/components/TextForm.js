import React, {useState,nevigator} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('button was clicked');
        let newtext=text.toUpperCase()
        settext(newtext);
        props.showalert("Text to uppercase","success");
    }

    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Text copied","success");

    }

    const handleOnChange = (event)=>{
        //console.log('button was clicked');
        settext(event.target.value); 
    }

    const clearText = ()=>{
        settext("")
        props.showalert("Text cleared","success");
    }

    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showalert("Extra spaces has been removed","success");
    }

    const [text, settext] = useState('Enter your text here');
    //settext("new text ");
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray'}} id="mybox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Capital</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>RemoveExtraSpace</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary.</h2>
            <p>{text.split(" ").length} words and {text.length} Characters.</p>
            {/* <p>{50-text.length} Characters are left.</p> */}
            <p>{0.008 * text.split(" ").length} minutes read.</p>

        </div>
        </>
    );
}

