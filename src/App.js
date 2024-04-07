import React, { useState } from 'react';
import Header from "./header";
import Content from './Content';
import Footer from './Footer';
import Additem from './Additem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item1"
    },
    {
      id: 2,
      checked: false,
      item: "item2"
    },
    {
      id: 3,
      checked: false,
      item: "item3"
    }
  ]);
  const [newitem,setNewitem]=useState('')
  
  const additem = (item) => {
    if (!item) return; // Vérifie si l'élément est défini
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("shoppinglists", JSON.stringify(updatedItems));
    setNewitem(''); // Réinitialise newitem à une chaîne vide
  }
  
  
  

  const onhandlechange = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
  
    setItems(updatedItems);
    localStorage.setItem("shoppinglists", JSON.stringify(updatedItems));
  };

  const ondelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("shoppinglists", JSON.stringify(updatedItems));
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    additem(newitem);
    setNewitem('');
  }
  
  return (
    <div className='App'>
      <Header title="Groceries list"/>
      <Additem
        newitem={newitem}
        setNewitem={setNewitem}
        handlesubmit={handlesubmit}
      />
      <Content
        items={items}
        onhandlechange={onhandlechange}
        ondelete={ondelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;


