import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
      <Wrapper>
          <p>@weekode - All rights reserved</p>
      </Wrapper>
  )
}


const Wrapper = styled.div`
    padding: 2rem 3rem;
    font-size: 1.1rem;
    font-weight: 400;
    color: #fff;
`

export default Footer