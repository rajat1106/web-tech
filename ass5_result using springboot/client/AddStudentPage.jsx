import React from 'react';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function AddStudents(){

    const [name,setName] = useState("");
    const [grno,setgr] = useState("");
    const [cdm,setcdm] = useState("");
    const [cde,setcde] = useState("");
    const [ccm,setccm] = useState("");
    const [cce,setcce] = useState("");
    const [wtm,setwtm] = useState("");
    const [wte,setwte] = useState("");
    const [daam,setdaam] = useState("");
    const [daae,setdaae] = useState("");
    const navigate = useNavigate();

    async function submit(){
        let ar = {name,grno,cdm,cde,ccm,cce,wtm,wte,daam,daae};
        // alert(ar);
        if(!name || !grno || !cdm || !cde || !ccm || !wtm || !wte || !cce || !daam || !daae){
            alert("No field should be empty");
            return false;
        }
            // e.preventDefault()
            // const student={name,address}
            // console.log(student)
            fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(ar)

        }).then(()=>{
            alert("New Student added");
            // window.location.reload();
            navigate("/");
        
        })
    }

    return (
        <div className="Student">
        <h1>Student Registration</h1>
            <section className="grid">
                <div className='flexSignup'>
                    <label style={{marginright:"10px"}}>Name: </label>
                    <input className="inputtext" placeholder='Your Name' value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='flexSignup'>
                    <label>GRNO: </label>
                    <input className="inputtext" placeholder='Your GRNO' value={grno} 
                        onChange={e=>setgr(e.target.value)}
                    />
                </div>
                <div className='flexSignup'>
                    <label>Compiler Design: </label>
                    <div>
                        <input placeholder='MSE' value={cdm} onChange={e=>setcdm(e.target.value)} />
                        <input placeholder='ESE' value={cde} onChange={e=>setcde(e.target.value)} />
                    </div>
                </div>
                <div className='flexSignup'>
                    <label>Cloud Computing: </label>
                    <div>
                    <input placeholder='MSE' value={ccm} onChange={e=>setccm(e.target.value)} />
                        <input placeholder='ESE' value={cce} onChange={e=>setcce(e.target.value)} />
                    </div>
                </div>
                <div className='flexSignup'>
                    <label>Web Technology: </label>
                    <div>
                    <input placeholder='MSE' value={wtm} onChange={e=>setwtm(e.target.value)} />
                        <input placeholder='ESE' value={wte} onChange={e=>setwte(e.target.value)} />
                    </div>
                </div>
                <div className='flexSignup'>
                    <label>DAA: </label>
                    <div>
                        <input placeholder='MSE' value={daam} onChange={e=>setdaam(e.target.value)} />
                        <input placeholder='ESE' value={daae} onChange={e=>setdaae(e.target.value)} />
                    </div>
                </div>
            </section>
                <div>
                    <button  className='button-10 btn' onClick={submit}>Submit</button>
                </div>
        </div>
    )
}

export default AddStudents;
