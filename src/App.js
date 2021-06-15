// import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import Message from './Message';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';




function App() {
  const [input, setInput] = useState("");
  const [message,setMessage] = useState([{
    userName:"aviral" , message:"what's up"}]);
  const [userName,setUserName]=useState("");
  // useState is used as a variable i.e., useState=variable in react
  // useEffect =run code on a condition in react


  useEffect(()=>{
    
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc =>({id: doc.id,message: doc.data()})))
    });
  },[])


  useEffect(() => {
     //if [] is blank inside ,this code runs only once i.e default when app component loads
    // if we have variable inside [] like input ,it runs every time input changes
    // return () 
    setUserName(prompt("Please enter your name"));
   
  }, []);
  const sendMessage=(event)=>{
    // alert("button clicked");
    event.preventDefault();


    db.collection('messages').add({
      message:input,
      userName:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessage([...message,{userName:userName,message:input}]);
    setInput("");
  }
  return (
    <div className="App">
      
     <h1>MESSANGER CLONE</h1>
     <img src="https://scontent.fdel11-1.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-3&_nc_sid=6825c5&_nc_ohc=_Zb6J3s1oxwAX80VURv&_nc_ht=scontent.fdel11-1.fna&oh=8d2150a5d779f09934cf086f51549586&oe=60F0097D" />
     <h1>Welcome  {userName}</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
        {/* <InputLabel>Please enter message...</InputLabel> */}
        <Input className="app__input" placeholder="Enter a message..." value={input} onChange={(e)=>setInput(e.target.value)}  aria-describedby="my-helper-text" />
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >
        <SendIcon />
        </IconButton>


        {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>send message</Button> */}
        </FormControl>
      </form>
     
        <FlipMove>{
          message.map(({id,message})=>(
            <Message key={id} userName={userName} message={message} />
            //  <h1>{message}</h1>
      ))
        }</FlipMove>
     
     
     {/* meassages */}
    </div>
  );
}

export default App;
