import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Wrapper className='margin-vertical'>
            <Brand>
                <img src={"/images/logo.png"} alt="logo" />
                <a href="/">Colobaan</a>
            </Brand>
            <Nav>
                <Link to='/'>Accueil</Link>
                <Link to='/add'> Ajouter annonce</Link>
            </Nav>
        </Wrapper>
    )
}
 

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #fff;
    padding: 3rem 0;
`

const Brand = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;

    img{
        width: 50px;
    }

    a{
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
    }
`

const Nav = styled.nav`
    display: flex;
    list-style: none;
    gap : 3rem;

    a{
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
    }
`
export default Header;