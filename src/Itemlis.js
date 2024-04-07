import React from 'react';
import Liineitem from './Liineitem'; // Corrected casing

const Itemlis = ({ items, onhandlechange, ondelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Liineitem
          key={item.id}
          item={item}
          onhandlechange={onhandlechange}
          ondelete={ondelete}
        />
      ))}
    </ul>
  );
};

export default Itemlis;

