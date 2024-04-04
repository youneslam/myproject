import React from 'react'

const Additem = ({newitem,setNewitem,handlesubmit}) => {
  return (
    <form className="Addform">
      <label htmlFor="inputField">Input Field:</label>
      <input 
        type="text" 
        id="inputField" 
        name="inputField" 
        placeholder="Enter text..."
        value={newitem}
        onChange={(e)=>setNewitem(e.target.value)}
       />
      <button>Add an item</button>
    </form>
  );

}

export default Additem


