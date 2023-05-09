import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function FrontPage(){
    return (
        <div className="front-page">
            <h1>Welcome To VIT</h1>
            <div>
                <img 
                    src={require("../profile.png")}
                    className='profile'
                />
            </div>
            <div className='main'>
                
                <button class="button-10" role="button"><Link to="/AddStudents">Registered Student &rarr;</Link></button>
                <button class="button-10" role="button"><Link to="/showCertificate">Show certificate &rarr;</Link></button>
            </div>
        </div>
    );
}

export default FrontPage;
