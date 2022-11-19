import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';

export default function Header2() {

    var navigate = useNavigate()

    const handleClick=()=>
    {
       localStorage.clear()
       //window.location.reload()
       navigate("/home")

    }

    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Button   style={{backgroundColor:'#FFF',display:'flex', flexDirection:'row-reverse'}}variant="contained" onClick={handleClick}>Log Out</Button>
        </Container>
      </Navbar>
      </>
    )
}

 