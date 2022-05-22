import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({children}) => {
  return (
      <TitleStyle>
          {children}
      </TitleStyle>
  )
}

const TitleStyle = styled.h2`
    color: #156EF2;
    font-size: 2.5rem;
    font-weight: 700;
    background-color: #fff;
    padding-left: 5rem;
    padding-top: 1.5rem;
`

export default SectionTitle