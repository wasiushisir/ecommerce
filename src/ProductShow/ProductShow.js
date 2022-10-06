import React, { useContext, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { FaceSmileIcon } from '@heroicons/react/24/solid'
import { ThemeContext } from '../App';



const ProductShow = ({ product }) => {
    // console.log(product);
    const selectedProduct = useContext(ThemeContext);
    // console.log(selectedProduct);

    const [number,setNumber]=useState(null)
    return (
        <div className='d-flex justify-content-between align-items-center mt-2'>
            <div>
                <img style={{height:'60px',width:'60px'}} src={product.img} alt="" />



            </div>
            <div className='ps-xl-5'>
                <p className='ms-3 text-primary'>{product?.name}</p>


            </div>
            <div className='ps-5'>
                <p className='ms-3 text-primary'>{product?.color}</p>


            </div>
            <div className='d-flex justify-content-center align-items-center ps-5 p-4'>
            <FaceSmileIcon style={{ color: 'green', height: '25px', width: '25px' }} className="" />
                <p style={{color:'green'}} className='ms-2  pt-2'>{product?.stock}</p>


            </div>
            <div className=''>
                <p className=''>${product?.price}</p>


            </div>
            <div className='d-flex justify-content-center align-items-center '>
                <input onChange={(e)=>setNumber(e.target.value)} style={{ backgroundColor: '#DCDCDC',outline:'none'}} className='border border-0 mx-sm-0 mx-xl-2' size={2} type="text" />
                

            <ShoppingCartIcon style={{ color: 'blue', height: '30px', width: '30px' }} className="m-2 mx-sm-0 mx-xl-2 mx-2" />
            <input onClick={()=>selectedProduct(product,number)} class="form-check-input mx-sm-0 mx-2" type="checkbox" id="inlineCheckbox1" value="option1"/>


            </div>

        </div>
    );
};

export default ProductShow;