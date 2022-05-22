import React from 'react'
import styled from 'styled-components'

const DetailsCard = ({ annonce }) => {
    const message = "Sawaay soxla naa sa bagage bi";
  return (
      <Wrapper>
          <ImageWrapper>
              <img src={annonce.image} alt="relax" />
          </ImageWrapper>
          <Content>
              <h3>{annonce.titre}</h3>
              <p>{annonce.description}</p>
              <hr/>
              <h4>{annonce.prix} FCFA</h4>
              <div>
                  <button>
                      <a
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href={`https://wa.me/${annonce.telephone}?text=${message}`}>Contactez-Nous</a>
                  </button>
              </div>
          </Content>
      </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    width: 70%;
    height: 85vh;
    box-shadow: 0px 0px 16px rgba(207, 207, 207, 0.25);
    border-radius: 1.5rem;
`

const ImageWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 1.5rem 0 0 1.5rem;
    background-image: url(${"https://www.onlygfx.com/wp-content/uploads/2018/03/blue-polygonal-background-fade-4.png"});
    img{
        width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;    
    gap: 1rem;
    background-color: #fff;
    border-radius: 0 1.5rem 1.5rem 0;
    padding: 2rem;

    h3{
        font-size: 1.2rem;
    }

    h4{
        font-size: 2.5rem;
    }

    hr{
        color: #f5f5f5;
        margin-bottom:3rem;
    }
    button{
        padding: 1rem 2rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background-color: #00bcd4;
        a{
            color: #fff;
            text-decoration: none;
        }
    }
`

export default DetailsCard