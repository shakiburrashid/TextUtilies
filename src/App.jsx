import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState()

  const storedText = (e) => {
    setText(e.target.value)
  }


  const toUperCase = () => {
    setText(text.toUpperCase())
  }
  const toLowerCase = () => {
    setText(text.toLowerCase())
  }

  const toCapitailize = () => {
    setText(text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))
  }

  const toClear = () => {
    setText("")
  }


  let copytoclick = useRef(null);
  let toCopy = () => {
    copytoclick.current?.select();
    window.navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="container">
        <h2>Text Utilize [Riyadh + Minu]</h2>
        <textarea className="blank-page" value={text} onChange={storedText} ref={copytoclick}></textarea>
        <div className="button">
          <button onClick={toUperCase} className='btn'>Uppercase</button>
          <button onClick={toLowerCase} className='btn'>Lower Case</button>
          <button onClick={toCapitailize} className='btn'>Capitailize</button>
          <button onClick={toClear} className='btn'>Clear</button>
          <button onClick={toCopy} className='btn'>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
