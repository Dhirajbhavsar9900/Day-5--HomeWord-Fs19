
import "./InputStyle.css"
function Inputs() {
  

  return (
    <div className="container">
        <span className="para">Paragraph :</span>
        <input className="intput" type="Number" min={0}/>
        <button className="btn">
            <span>
                Generate
            </span>
        </button>     
    </div>
  )
}

export default Inputs
