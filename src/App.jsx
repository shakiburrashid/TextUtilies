import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState()

  const storedText = (e) => {
    setText(e.target.value);
  }


  let toUperCase = () => {
    setText(text.toUpperCase())
  }
  let toLowerCase = () => {
    setText(text.toLowerCase())
  }

  let toCapitailize = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
  }

  let toClear = () => {
    setText("")
  }


  let copytoclick = useRef(null);
  let toCopy = () => {
    copytoclick.current?.select();
    window.navigator.clipboard.writeText(text);
  };
  let toPaste = () => {
    window.navigator.clipboard.readText().then(
      (e)=>{setText(e)}
    );
  };

  return (
    <>
      <div className="container">
        <h2>Text Utilize [Riyadh + Minu]</h2>
        <textarea className="textarea" value={text} onChange={storedText} ref={copytoclick}></textarea>
        <div className="button">
          <button onClick={toUperCase} className='btn'>Uppercase</button>
          <button onClick={toLowerCase} className='btn'>Lower Case</button>
          <button onClick={toCapitailize} className='btn'>Capitalize</button>
          <button onClick={toCopy} className='btn'>Copy</button>
          <button onClick={toPaste} className='btn'>Paste</button>
          <button onClick={toClear} className='btn btnColorFocClear'>Clear</button>
        </div>
      </div>
    </>
  )
}

export default App
