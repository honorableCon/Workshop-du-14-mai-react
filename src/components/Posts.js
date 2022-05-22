import {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import styled from "styled-components"
import { getAllAnnonces } from '../utils/requests'

const Posts = () => {
    const [annnonces, setAnnonces] = useState(null);
    useEffect(() => {
        getAllAnnonces().then(res => {
            setAnnonces(res);
        })
    }, []);
  return (
      <Wrapper>
          {annnonces && annnonces.map(annonce =>
              (<ProductCard key={annonce.id} annonce={annonce} />)
          )}
      </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap : 3rem;
    padding: 1rem 5rem 1rem 5rem;
    background-color: #fff;
`

export default Posts