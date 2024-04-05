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