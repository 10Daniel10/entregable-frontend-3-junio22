import React from 'react';

export default function Item({item, incremento}) {
  
  const buy = () => {
      if(item.stock > 0){
        item.stock = item.stock -1
        incremento()
      }
  }
  return (
    <div className='producto'>
            <h3>{item.producto.nombre}</h3>
            <p>{item.producto.descripcion}</p>
            <h5>En stock: <span className={item.stock < 1 ? 'Agotado': ''}>{item.stock < 1 ? "Agotado" : item.stock }</span></h5>
            <button 
                onClick={buy}
                className={item.stock > 0 ? 'item-button' : 'item-disabled'}
                disabled={item.stock > 0 && false} 
            >
                {item.stock > 0 ? "COMPRAR" : "SIN STOCK"}
            </button>
    </div>
  )
}
