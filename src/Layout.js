import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
      <Wrapper>
          <Header />
          <main>
          {children}
          </main>
          <Footer/>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    background: linear-gradient(107.3deg, #156EF2 38.13%, #00C5F0 93.13%);
`

export default Layout