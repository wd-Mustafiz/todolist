import React, { useState, useEffect } from 'react';
import todoLogo from '../Images/todo.webp'
import Item from './item';



const Todo = () => {
    const getItems = () => {
        let lists = localStorage.getItem("Todo List");
        return JSON.parse(lists);
    }
    const [inputData , setInputData] = useState('');
    const [items , setItem] = useState(getItems());
    
    
    const addItem = () => {

        if(!inputData){
            alert(`You an't Add Empty Data`)
        }else{
            setItem([...items , inputData]);
            setInputData('');
        }

    }
    const handleSearch = () => {
        
        if(!inputData){
            alert(`You an't Add Empty Data`)
        }else{
            setItem([...items , inputData]);
            setInputData('');
        }
        
      }
    const deleteItem = (e) => {
        // const deletedItem =  items.find(element => element === e);
        // console.log(deletedItem);
        const deletedItem = items.filter(element => element !== e);
        console.log(deletedItem);
        setItem(deletedItem);
    }
    const removeAll = () => {
        setItem([])
    }

    useEffect(() => {
        localStorage.setItem("Todo List" , JSON.stringify(items));
    } , [items])
    return (
        <>
          <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todoLogo} alt="todo Logo"/>
                    <figcaption>Add your todo ✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️ Add Items..." value={inputData} onChange={(e) => setInputData(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>

                </div>

                <div className="showItems">
                    {
                        // items.map(item => (
                        //     <div className="eachItem">
                        //         <h3>{item}</h3>
                        //         <i className="far fa-trash-alt add-btn" title="Delete Item"></i>
                        //     </div>
                        // ))

                        items.map((item , idx) => <Item item={item} key={idx} deleteItem={deleteItem}></Item>)
                    }

                </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>
                            CHECK LIST
                        </span>
                    </button>
                </div>

                    <br/><br/>
                <div className="dev">
                    <a href="https://www.facebook.com/mustafiz.munna.58" target="_blank" style={{color: "white" , fontSize: "20px"}}>Mustafiz Munna</a>
                </div>
             </div>
           </div>
        </>
    );
};

export default Todo;