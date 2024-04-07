import React from 'react';

const Additem = ({ newitem, setNewitem, handlesubmit }) => {
  return (
    <form className="Addform" onSubmit={handlesubmit}>
      <label htmlFor="inputField">Input Field:</label>
      <input 
        type="text" 
        id="inputField" 
        name="inputField" 
        placeholder="Enter text..."
        value={newitem}
        onChange={(e) => setNewitem(e.target.value)}
      />
      <button type="submit">Add an item</button> {/* Ajoutez le type "submit" pour que le formulaire soit soumis */}
    </form>
  );
}

export default Additem;


