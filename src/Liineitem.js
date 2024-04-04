// Liineitem.js
import React from 'react';

const Liineitem = ({ item, onhandlechange, ondelete }) => {
  return (
    <li className='item' key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onhandlechange(item.id)} // Utilisez onChange pour les cases à cocher
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => onhandlechange(item.id)}>
        {item.item}
      </label>
      <button onClick={() => ondelete(item.id)}>Delete this item</button>
    </li>
  );
};

export default Liineitem;
