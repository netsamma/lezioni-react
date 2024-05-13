import { useState } from "react"
import Card from "./Card"

const Grid = (props) => {
    const [render, setRender] = useState(true)

    const handleClick = () => {
        setRender(!render)
    }    

    return (
    <div className='grid'>
        {/* <button onClick={handleClick}>Render</button> */}
          {
            render
            ?
            props.products.map(product=>
              <Card key={product.id} title={product.title}/>
            )
            :
            ""
          }
    </div>  
  )
}

export default Grid