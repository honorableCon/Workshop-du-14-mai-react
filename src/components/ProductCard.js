import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ annonce }) => {
    const navigate = useNavigate();

    const handleClick = (e) => { 
        e.stopPropagation();
        navigate(`/details/${annonce.id}`);
    }
  return (
      <Card onClick={handleClick}>
          <img src={annonce.image} alt="product" />
          <CardBody>
              <h3>{annonce.titre}</h3>
              <CardFooter>
                  <h4>{annonce.prix} FCFA</h4>
                  <a href='/'> Commander </a>
              </CardFooter>
          </CardBody>
      </Card>
  )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height:370px;
    max-width:300px;
    border-radius: 10px;
    cursor: pointer;

    img{
        width: 100%;
        height: 200px;
        border-radius:8px 8px 0 0; 
        object-fit: contain;
        padding: 5px;
        background-image: url(${"https://www.onlygfx.com/wp-content/uploads/2018/03/blue-polygonal-background-fade-4.png"})
    }
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 0 0 8px 8px; 
    background-color: #fff;
    box-shadow: 3px 4px 9px rgba(197, 197, 197, 0.25);

    h4{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    h3{
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        background-color: #00C5F0;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        padding: 12px;
        border-radius: 6px;
    }
`

export default ProductCard