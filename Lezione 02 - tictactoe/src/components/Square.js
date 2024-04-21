import styled from "styled-components"

  
const Square = (props) => {
  return (
	<Div>{props}</Div>
  )
}

export default Square


const Div = styled.div`
	height: 100px;
	width: 100px;
	border: 2px solid #BF4F74;
	color: #BF4F74;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`