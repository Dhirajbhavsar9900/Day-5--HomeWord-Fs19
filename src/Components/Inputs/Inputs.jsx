import { useState } from "react"
import Data from "../../Data"
import "./InputStyle.css"

function Inputs() {
  const [number, setNumber] = useState(0);
  const [para, setPara] = useState([]);

  const Generate = ()=>{
    if(number <= 0){
      alert("Enter Value Greater Than 0")
    }
    else{
      if(number > 10){
        alert("Please Enter The Value Less Than 20");
        let arr = [];
        Data.map((index) =>{
          return <p key={index}>{setPara(arr)}</p>
        })
      }
      else{
        setPara(Data.slice(0, number));
      }
    }
  } 
  return (
    <div className="container">
        <div>
          <span className="para">Paragraph :</span>
          <input className="intput" type="Number" min={0} onChange={(e)=>{
            setNumber(e.target.value);
          }}/>
          <button className="btn" onClick={Generate}>
              <span>
                  Generate
              </span>
          </button>  
        </div>
           {/*para  */}
       <div className="para-container">
        <div className="paragra">{
              para.map((item, index)=>{
                return <div className="dynamic" key={index}>
                <span>{item.id}</span>
                <p>{item.text}</p>
                </div>
              })
            }
          </div>
       </div>
    </div>
  )
}

export default Inputs
