import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';

import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';

export default function Header1(props) {

  var navigate = useNavigate()

  let getData = useSelector(state => state.carts)
  console.log("CARTS", getData)
  //console.log("CARTSNO", getData.length)
  let data= Object.values(getData)
   //console.log("CARTSNO", data)


  const handleLogout = () => {
    localStorage.clear()
    //window.location.reload()
    navigate("/login")

  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCart=()=>
  {

  }

  return (
    <>
      <Navbar className="bg-white shadow-sm mb-3">
        {props.refresh}
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Home"><b>Home</b></Nav.Link>
          </Nav>
          <Button variant="info" style={{ marginRight: 20 }} onClick={handleLogout}>Log Out</Button>
          
          <Badge badgeContent={data.length} color="primary"
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <ShoppingCartIcon onClick={handleCart} style={{color:"black",fontSize:35,marginLeft:20,cursor: "pointer"}} />
          </Badge>
         


        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {  
             data.length?
             <div className='card_details'style={{width:"24rem",padding:10}}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Novel Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((e) => {
                        return (
                          <tr>
                            <td>
                            <Nav.Link href={`/carddetails/${e.id}`}><b><img src={e.imgUrl} style={{width:"5rem",height:"5rem"}} alt=""/></b></Nav.Link>
                              
                          </td>
                          <td>
                              <p>{e.name}</p>
                              <p>Price : ₹{e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                          </td>
                          <td>
                          <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                              <DeleteIcon/>
                              </p>
                          </td>
                          </tr>
                        )
                      })

                    }
                    <p className='text-center'>Total :₹ 300</p>
                  </tbody>

                </Table>
             </div>:


          

<div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
}
        </Menu>
      </Navbar>
    </>
  )
}


