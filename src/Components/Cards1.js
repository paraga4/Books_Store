import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import list from './Data';
import Button from 'react-bootstrap/Button'
import style from './style.css'
import {useDispatch} from 'react-redux';


function Cards1(props) {
  
  const[data,setData]= useState(list);
 
   
  //console.log(data)
   var dispatch=useDispatch()

   const handleClick=(e)=>
   {
    
    //console.log("DATA:",e)
    dispatch({type:'ADD_CART', payload:[e.id,e]})
    props.setRefresh(!props.refresh)
   }
    
   return (
    <div className='container mt-3'>
     

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element) => {
            return (
              <>
                <Card style={{ width: '15rem',border:"none",display:'flex',justifyContent:'center',alignItems:'center',marginRight:40}} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgUrl} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" style={{width:150}} 
                      onClick={()=> handleClick(element)}
                     className='col-lg-22'>Add to Cart</Button>
                    </div>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
        
      
}

export default Cards1

