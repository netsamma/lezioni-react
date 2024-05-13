import React from 'react'
import styled from 'styled-components';

const Avatar = (props) => {
  return (
    <Div>{props.isLogged?"Logged":"Not logged"}</Div>
  )
}

export default Avatar

const Div = styled.div`
 color: white;
`;
