import React,{useState,useEffect} from 'react';
import setLigthImage from "../images/icon-sun.svg";
import  cross from "../images/icon-cross.svg";
import "../style/to_do_list.css";

export default function Header() {
  
 
  const [data,setDataItem]= useState([]);
  console.log(data);
   const [value,setValue]= useState();

   
  const setData=(event)=>{
 
     setValue(event.target.value);
     }

   const add=(e)=>{
     e.preventDefault();
     setDataItem([...data,{text: value,completed: false, id: new Date().getTime()}]);
     setValue(value);
     
    }
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem('key'));
      if (todos) {
        setDataItem(todos);
      }
    }, []);

  useEffect (()=>{
   localStorage.setItem("key",JSON.stringify(data));
    
  },[data]);

  const toggleId=(id)=>{
    const newid=data.map(data =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setDataItem(newid);
  } 

  const clearComplete = () => {
    const updatedTodos = data.filter((val)=>{
      if(val.completed==false){
      return val;
    }});
    setDataItem(updatedTodos)

}

const removeItem =(id) =>{
  console.log(id);
  const updatedTodo = data.filter((val)=>{
    if(val.id!==id){
    return val;
  }});
  
  setDataItem(updatedTodo)

}


 
    return (
      <div className='Theme'>
        <div className="to_do">
          <div className="title">
            <span>todo</span>
            <span><img src={setLigthImage} alt="" /></span>
          </div>
          <div className="input_field">
            <form onSubmit={add}>
               <input type="text" placeholder='Currently typing...'  onChange={setData} /></form>

          </div>
        </div>
        <div className="results">
          <ul>{
            data.map((val,i)=>{
              return (<li key={i}><input type="checkbox" className='checkbox' checked={val.completed} onClick={()=>toggleId(val.id)}/>{val.text}
            <img src={cross} alt="" className='cross' onClick={()=>removeItem(val.id)}/>
              </li>)
            })
          }  
          </ul>
          <div className="btns">
            <div>setofItems</div>
            <div className='function'><div >All</div>
            <div>Active</div>
            <div >Completed</div></div>
            <div onClick={clearComplete}>Clear Completed</div>
          </div>
        </div>
      </div>
    )
  
}