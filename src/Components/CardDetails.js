import React from 'react'
import style from './style.css'
import Table from 'react-bootstrap/Table'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function CardDetails() {
  var navigate = useNavigate()

  let getData = useSelector(state => state.carts)
  console.log("CARTS", getData)
  //console.log("CARTSNO", getData.length)
  let data= Object.values(getData)
  // console.log("CARTSNO", data)

  return (
    <>
    <div className='container mt-2'>
        <div className='text-center' style={{marginTop:30}}>
            <h2>Product Details</h2>
        </div>

        <section className='container mt-3' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='itemsdetails'>
              <div>
                <img width="150" src={getData.imgUrl} style={{marginLeft:20}} alt=""/>
              </div>

              <div className="details" style={{marginRight:15,marginTop:20}}>
              <Table>
                <tr>
                  <td>
                    <p style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}><strong>Rating</strong>:3.8★</p>
                    <p style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}><strong>Price</strong>: ₹106</p>
                    <p><strong>Remove:</strong> <span ><DeleteIcon style={{color:'red',fontSize:15,cursor:"pointer"}}/>	</span></p>
                   </td>
                   </tr>
                   </Table>
            </div>
            </div>
        </section>
      
    </div>
    </>
  )
}

export default CardDetails
