import React, { useState } from 'react';
import "./contact.scss";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import {db} from"../../Firebase"


const Contact = () => {
const[messageSent, setMessageSent] = useState(false);
const [name, setName]= useState("");
const [email, setEmail]= useState("");
const [subject, setSubject]= useState("");
const [message, setMessage]= useState("");

const handleSubmit =async(e)=>{
e.preventDefault();
try{
await addDoc(collection(db, "contactForm"), {
    Name: name,
    Email: email,
    Subject: subject,
    Message: message,
    Date: serverTimestamp(),
  });
} catch(err){
console.log(err)
}
setMessageSent(true);
};


    return (
<div id="contact">

<h5>
        CONTACT US
    </h5>
<p className="ptitile">
    Reach out for a new project or just say hello
</p>

<div className="contactContainer">
<div className="box1">
<p>
    SEND US A MESSAGE
</p>
{messageSent? "Message Sent Successfully we will be in touch as soon as possible" : 
<form onSubmit={handleSubmit}>

<label>Your Name</label>
<br/>
<input type="text" placeholder="Jhon Doe"
onChange={(e)=>setName(e.target.value)}
/>

<label>Email</label>
<br/>
<input type="email" placeholder="JhonDoe@example.com"
onChange={(e)=>setEmail(e.target.value)}
/>

<label>Subject</label>
<br/>
<input type="text" placeholder="Subject"
onChange={(e)=>setSubject(e.target.value)}
/>

<label>Your Message</label>
<br/>
<textarea type="text" placeholder="Your Message Here"
onChange={(e)=>setMessage(e.target.value)}
/>
<button type="submit">SUBMIT</button>
</form>
}
</div>
<div className="box2">
<p>
    CONTACT INFO
</p>
<p className="orangered">
Where to Find Us
</p>
<p className="orangeredBody">
Line 7 North, Ahmed Badawy Intersetion,
Gamiet Ahmed Oraby El Obour City, Cairo, Egypt
</p>

<p className="orangered">
    Email Us At
    </p>
    <p className="orangeredBody">
        info@flexdev.com
    </p>

    <p className="orangered">
        Call Us At
        </p>
        <p className="orangeredBody">
    Mobile: (012) 7372 0505
        </p>

</div>
</div>
</div>
     );
}
 
export default Contact;