import React from 'react'
import styled from 'styled-components'
import { postAnnonce } from '../utils/requests'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        postAnnonce(Object.fromEntries(data.entries()))
            .then(res => navigate('/details/' + res.id))
    }

  return (
      <FormStyle onSubmit={handleSubmit}>
          <Input name="titre" type="text" placeholder="Titre"/>
          <Input name="prix" type="text" placeholder="Prix"/>
          <Input name="image" type="text" placeholder="Image" />
          <Input name="telephone" type="text" placeholder="Telephone" />
          <select name='categorie_id'>
              <option value="">Catégorie</option>
              <option value={1}>Electronique</option>
              <option value={2}>Vêtements</option>
          </select>
          <textarea name="description" placeholder="Description"></textarea>
          <div>
            <Button type="submit">Soumettre</Button>
          </div>
    </FormStyle>

  )
}

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    select, textarea, input{
        width: 100vh;
        height: 2.5rem;
        border: 1px solid #156EF2;
        border-radius: 6px;
        padding: 10px;
    }

    textarea{
        height: 10rem;
        resize: none;
    }


`

const Input = styled.input`
    font-size: 1.1rem;
    font-weight: 400;
    outline: none;
`

const Button = styled.button`
    background-color: #00C5F0;
    color: #fff;
    border: none;
    padding: 1rem 1rem;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
`
export default Form