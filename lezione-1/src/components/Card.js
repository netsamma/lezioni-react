import Saluti from "./Saluti"

const Card = ({ color, padding, ...otherProps}) => {
  return (
    <div className={`${color} ${padding}`}>
      <h1>Card</h1>
      <Saluti {...otherProps}/>
    </div>
  )
}

export default Card


// import React, { useState } from 'react'

// const Card = () => {
//   const [visible, setVisible] = useState(true);
 
//   return (
//     <>
//        <button onClick={()=> setVisible(!visible)}>Mostra</button>
//        {visible && 'Contenuto nascosto'}
//     </>
//   )
// }

// export default Card