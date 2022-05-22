import React from 'react'
import Form from '../components/Form'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'

const Add = () => {
  return (
    <Wrapper>
      <SectionTitle>Formulaire d'ajout de produit</SectionTitle>
      <Content className='margin-vertical'>
        <img src={"/images/relax.png"} alt="relax" />
        <Form/>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  min-height: 100vh;

  h2{
    text-align: right;
    margin-right: 5rem;
    padding: 2rem 0;
    font-weight: bold;
  }

`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  img{
    width: 100%;
    object-fit: contain;
  }
`

export default Add