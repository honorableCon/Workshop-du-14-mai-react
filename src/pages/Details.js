import React, {useEffect, useState} from 'react'
import DetailsCard from '../components/DetailsCard'
import styled from 'styled-components';
import {  useParams } from 'react-router-dom';
import { getAnnonceById } from '../utils/requests';

const Details = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => { 
    getAnnonceById(id).then(res => {
      setAnnonce(res);
    })
  }, [id])

  return (
    <Wrapper>
      {annonce && <DetailsCard annonce={annonce}/>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
  background-color: #fff;
`
export default Details