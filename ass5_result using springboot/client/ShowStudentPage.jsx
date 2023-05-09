import React from "react";
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function ShowCertificate(){

    const [flag,setFlag] = useState(false);
    const [grno,setGrno] = useState(0);
    const [data,setData] = useState([]);
    const [mse,setMse] = useState(0);
    const [ese,setEse] = useState(0);
    const navigate = useNavigate();
    
    
    // let id = "12011004";

    function back() {
        navigate("/");
    }

    function print(){
        //Set the print button visibility to 'hidden' 
        var printButton = document.getElementById("printpagebutton");
        var backBtn = document.getElementById("back")
        printButton.style.visibility = 'hidden';
        backBtn.style.visibility = 'hidden';
        window.print();
        printButton.style.visibility = 'visible';
        backBtn.style.visibility = 'visible';
    }

    async function showres(){
        fetch(`http://localhost:8080/student/getStudent?name=${grno}`)
        .then(res=>res.json())
            .then((result)=>{

                console.log(result);
                // return ;
                if(result.grno===grno){
                    setFlag(true);
                    setData(result);
                    setMse(parseInt(result.cdm)+parseInt(result.wtm)+parseInt(result.ccm)+parseInt(result.daam));
                    setEse(parseInt(result.cde)+parseInt(result.wte)+parseInt(result.cce)+parseInt(result.daae))
                    console.log("result",parseInt(result.cdm));
                }else{
                    alert("enter valid no");
                }
                
            }
            )


    }

    return (
        <div>
        {!flag?
            <section className="resultPage">
                    <label>Enter GRNo. </label>
                    <input placeholder="Enter GRNo" value={grno} onChange={e=>setGrno(e.target.value)}/>
                    <button className="button-10 btn" onClick={showres}>Submit</button>
            </section>
        :
        <div>
        <h1 className="heading">Vit Result</h1>
        <section className="result">
                <div className="name">
                    <label>Name: </label>
                    <label>{data.name}</label>
                </div>
                <div className="grno">
                    <label>GRNO: </label>
                    <label>{data.grno}</label>
                </div>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>MSE</th>
                        <th>ESE</th>
                    </tr>
                    <tr>
                        <td>Compiler Design</td>
                        <td>{data.cdm}</td>
                        <td>{data.cde}</td>
                    </tr>
                    <tr>
                        <td>Cloud Computing</td>
                        <td>{data.ccm}</td>
                        <td>{data.ccm}</td>
                    </tr>
                    <tr>
                        <td>Web Technology</td>
                        <td>{data.wtm}</td>
                        <td>{data.wte}</td>
                    </tr>
                    <tr>
                        <td>DAA</td>
                        <td>{data.daam}</td>
                        <td>{data.daae}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{mse}</td>
                        <td>{ese}</td>
                    </tr>
                    
                </table>
                {console.log(mse)}
                <div>
                    <h1>Total Percentage={mse*0.3+ese*0.7}</h1>
                </div>
                {/* <button onClick={showres}>Submit</button> */}
                <div>
                    <button id="printpagebutton" className="button-9 " onClick={print}>Print</button>
                    <button id="back" className="button-9 " onClick={back}>Back</button>
                </div>
            </section>
            </div>
            }
        </div>
    )
}

export default ShowCertificate;
