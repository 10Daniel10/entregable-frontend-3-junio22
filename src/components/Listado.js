import React from 'react'
import data from './data.json';
import Item from './Item';

export default function Listado({incremento}) {
  return (
    <div className='container'>
      {data.map(item => (
                <Item key={item.id} item={item} incremento={incremento}/>
      ))}
    </div>
  )
}
 