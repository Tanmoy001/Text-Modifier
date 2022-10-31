import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupClick=()=>{
    console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Upper case is enbaled","sucess");
  }
  const handleloClick=()=>{
    console.log("Uppercase was clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("LowerCase is enbaled","sucess");
  }


  const handleonchange=(event)=>{
    console.log("On change")
    setText(event.target.value)
    
  }
  const handleCopy=()=>{
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipbord","sucess");
  }
  const removeExtraSpace=()=>{
    let newText = text.split(/\s+/);
    setText(newText.join(" "))
    props.showAlert("Removed all extra spaces","sucess");
  }

  const [text,setText] = useState("Enter the text")
  return (
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>

      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control" value={text} id="mybox"style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleupClick} >convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleloClick} >convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 " onClick={handleCopy} >copy the text</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 " onClick={removeExtraSpace} >Remove extra spaces</button>
      <h1>{props.title}</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
  )
}
