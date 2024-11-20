import React from 'react'
import logo from '../../public/mark.svg'
import { Container } from 'react-bootstrap'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import baglogo from './../image/shopping-cart-page-04-product-01.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export default function Header() {
    let [showPopup,setshowPopup] =useState()
    let showData=()=>{
        setshowPopup(!showPopup)
    }
    let [slidePop,setslidePop] =useState()
    let slideShow=()=>{
        setslidePop(!slidePop)
    }
    let [passwordStatus,setpasswordStatus] = useState(false);
    let changePasstype=()=>{
      setpasswordStatus(!passwordStatus)
    }
  return (
    <>
    <div>
        <Container fluid className='m-0 p-0'>
       <header className='shadow-lg'>
        
            <nav className='d-flex justify-content-between'>
                <aside>
                     <figure>
                    <img src={logo} style={{width:'60px'}} alt="" />
                    </figure>
                </aside>
                <aside className='d-none d-lg-block'>
                    <ul className='d-flex gap-5'>
                        <li> <Dropdown>
                                <Dropdown.Toggle className='bg-white border-0 text-dark' id="dropdown-basic">Product <MdOutlineKeyboardArrowDown />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='mt-4 drop'>
                                <Dropdown.Item href="#/action-1" className='text-center'>View All products</Dropdown.Item></Dropdown.Menu>
                                </Dropdown>
                        </li>
                        <li>Features</li>
                        <li>Marketplace</li>
                        <li>Company</li>

                        <li className='log' onClick={showData}>log in</li>

                    </ul>
                </aside>
                <aside>
                    <ul>
                        <li className='' onClick={slideShow}>View Cart</li>
                    </ul>
                </aside>
                <aside>
                    <div className="">
                    
                    </div>
                </aside>
            </nav>
        
       </header>
       
       </Container>
      

       <div className="popbox px-3 ">
       <div className= {showPopup==true ? "active":"popupModel"}>

        <div className="cross px-2">
            <h3>Log in</h3>
            <span onClick={showData} >{showPopup==true ? <RxCross2 />:<RxCross2 />}</span>

            
            
        </div>
        
        <input type="text" name="" id="" className='w-75 d-table mx-auto mt-3 border-1 border-dark p-2 rounded 'placeholder='Enter Your Name' />
        <input type="text" name="" id="" className='w-75 d-table mx-auto mt-3 border-1 border-dark p-2 rounded 'placeholder='Enter Your Mobile number' />
    <input type={(passwordStatus) ? 'text' : '<FaEye/>'}  name=""  id="" className='w-75 d-table mx-auto mt-3 border-1 border-dark p-2 rounded 'placeholder='Password'/> <FaEye onClick = {changePasstype} > {(passwordStatus) ? "<FaEyeSlash/>" : "<FaEye/>"}/></FaEye>
        <button className='d-table mx-auto mt-3 border-0 rounded bg-black text-white p-2'>Sign Up</button>
       
       </div>
       
        </div>
    
        
       </div>
      
       <div className= {slidePop==true ? "activeslide":"sliderleft"}>
        
        <div className='d-flex justify-content-between '>
        <h3>Shipping Cart</h3>
        <RxCross2 />
        </div>
    
          
            
        
           
       </div>
    
   </>
    
    
  )
}
