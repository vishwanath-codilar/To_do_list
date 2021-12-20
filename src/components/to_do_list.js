import React, { useState, useEffect } from "react";

import "../style/to_do_list.css";

export default function Header({themeChange}) {
  const [data, setDataItem] = useState([]);
  // console.log(data);
  const [value, setValue] = useState();
  const [currentState, setTabState] = useState("");
 

  //targeting input field
  const setData = (event) => {
    setValue(event.target.value);
  };


  //onSubmit
  const add = (e) => {
    e.preventDefault();
    if(!value || value.trim().length==0){
      alert("plz enter somthing")
    }
    else{
    setDataItem([
      ...data,
      { text: value, completed: false, id: new Date().getTime() },
    ])
    }

    setValue('');
  };


  // getting data from localstorge
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("key"));
    if (todos) {
      setDataItem(todos);
    }
  }, []);


  //storing data to localstorage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(data));
  }, [data]);



  // for toggling completed value 
  const toggleId = (id) => {
    const newid = data.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
   
    setDataItem(newid);
  };


  // deleting a completed items
  const clearComplete = () => {
    const updatedTodos = data.filter((val) => {
      if (val.completed == false) {
        return val;
      }
    });
    setDataItem(updatedTodos);
  };
 

  //deleting items from the localstorage
  const removeItem = (id) => {
    // console.log(id);
    const updatedTodo = data.filter((val) => {
      if (val.id !== id) {
        return val;
      }
    });
   setDataItem(updatedTodo);
  };


  // to change the state
  const activeTab = (e) => {
    setTabState(e.target.textContent);
  };

  
  //number of left items
  const leftItems = () => {
    const updatedTodos = data.filter((data) => !data.completed);
  
    return updatedTodos.length;
  };

  return (
    <>
    <div className="Theme">
      <div className="to_do">
      
        <div className="title">
          <span>todo</span>
          <span>
            <img src="images/icon-moon.svg" alt="" id="image" onClick={themeChange}/>
          </span>
        </div>
        <div className="input_field">
          <form onSubmit={add}>
            <input
              type="text"
              placeholder="Currently typing..."
              value={value}
              onChange={setData}
            />
          </form>
        </div>
      </div>
      <div className="result_main">
        <div className="results">
          <ul className="list">
            {data.map((val, i) => {
              if (currentState === "All" || currentState==="") {
                return (
                  <li key={i}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={val.completed}
                      onClick={() => toggleId(val.id)}
                    />
                   
                    <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                   <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                  </li>
                );
              } else if (currentState === "Active") {
                if (!val.completed) {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={val.completed}
                        onClick={() => toggleId(val.id)}
                      />
                     <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                     <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                    </li>
                  );
                }
              } else if (currentState === "Completed") {
                if (val.completed) {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={val.completed}
                        onClick={() => toggleId(val.id)}
                      />
                    <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                    <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                    </li>
                  );
                }
              }
            })}
          </ul>

         
        </div>
      </div>
      <div className="btn-wrp">
      <div className="btns">
            <div>{leftItems()} items</div>
            <div className="function">
              <div onClick={activeTab} id={currentState === "All"}>
                All
              </div>
              <div onClick={activeTab} id={currentState === "Active"}>
                Active
              </div>
              <div onClick={activeTab} id={currentState === "Completed"}>
                Completed
              </div>
            </div>
            <div onClick={clearComplete}>Clear Completed</div>
          </div>
          </div>
    </div>
    </>
  );
}
