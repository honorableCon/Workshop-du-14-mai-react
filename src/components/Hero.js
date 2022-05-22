import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <Wrapper className='margin-vertical'>
          <Content>
              <h1>DJEUND ak JAAY <br/> MEUSSOUL YOMBE NII</h1>
              <p>Faites votre annonce et partager à vos client !</p>
              <div>
                <Link to={'/add'}>Publiez vos annonces</Link>
             </div>
          </Content>
          <ImageWrapper>
              <img src={"/images/hero.png"} alt="hero"/>
          </ImageWrapper>
      </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    color: #fff;

    h1{
        font-size: 45px;
        font-weight: 800;
    }

    p{
        font-size: 20px;
    }

    a {
        text-decoration: none;
        border: none;
        background-color: #00C5F0;
        color: #fff;
        padding: 18px 55px;
        border-radius: 6px;
        font-size: 18px;
        cursor: pointer;
    }
`

const ImageWrapper = styled.div`
    img{
        width: 490px;
    }
`

export default Hero