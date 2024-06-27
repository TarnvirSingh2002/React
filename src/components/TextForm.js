import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,settext]=useState("");//HOOKS IN REACT
    const handleupcase=()=>{
        settext(text.toUpperCase());//We can only change the text by using the settext method
        props.showalert("Converting to uppercase","success");
    }
    const handleonchange=(event)=>{
        settext(event.target.value);
    }
    const handlelowercase=()=>{
        settext(text.toLowerCase());
        props.showalert("Converting to lowercase","success");
    }
    const reverseconvertor=()=>{
        let n="";
        for(let i=text.length-1 ;i>=0;i--){
            n+=text[i];}
        settext(n);
        props.showalert("Reversing the text","success");
    }
        return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.head}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}}value={text}onChange={handleonchange}id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleupcase}>convert to uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlelowercase}>convert to lowecase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={reverseconvertor}>reverse the text</button>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{ return element!=0}).length}word and {text.length}characters</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Nothing to preview":text}</p>
        </div>
        </>
    )
}
