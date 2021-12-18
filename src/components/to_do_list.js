import React,{useState,useEffect} from 'react';
import setLigthImage from "../images/icon-sun.svg";
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
     
      setValue("");
     
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
              return (<li key={i}><input type="checkbox" checked={val.completed} onClick={()=>toggleId(val.id)}/>{val.text}</li>)
            })
          }  
          </ul>
          <div className="bnts">
            <button >All</button>
            <button>Active</button>
            <button >Completed</button>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    )
  
}