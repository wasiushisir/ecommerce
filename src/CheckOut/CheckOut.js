import React, { useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { MinusIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ checkOut, handleIncrement, handleDecrement }) => {
    console.log(checkOut);
    let navigate = useNavigate();



    let subTotal = 0;

    checkOut.map(d => {
        subTotal += (+(d.price)) * (+(d.quantity))
    })

    console.log(subTotal);

    const handleProceed=()=>{
        navigate('/proceed')

    }




    return (
        // <div className='container '>

        //     <div>
        // <div style={{ borderBottom: '1px solid grey' }} className=' d-flex justify-content-between align-items-center mt-5'>

        //     <div>
        //         <p><b>Product</b></p>
        //     </div>
        //     <div>
        //         <p><b>Price</b></p>

        //     </div>
        //     <div>
        //         <p><b>Quantity</b></p>
        //     </div>
        //     <div>
        //         <p><b>Subtotal</b></p>

        //     </div>



        // </div>



        //     </div>


        //     {
        //         checkOut.map(c => <>

        //             <div className='d-flex justify-content-between align-items-center mt-3'>

        //                 <div className='d-flex justify-content-center align-items-center '>
        //                     <img style={{ height: '60px', width: '60px' }} src={c?.img} alt="" />
        //                     <p>{c?.name}</p>

        //                 </div>



        //                 <div>

        //                     <p>${c?.price}</p>

        //                 </div>
        //                 <div style={{ height: '60px', width: '90px ', border: '1px solid grey' }} className=' rounded-pill   d-flex justify-content-center align-items-center '>

        //                     <div className='d-flex justify-content-center align-items-center'>
        //                         <MinusIcon onClick={() => handleDecrement(c._id)} style={{ color: 'blue', height: '17px', width: '17px' }} className="" />
        //                         <p className='pt-1 m-3 '>{c?.quantity}</p>
        //                         <PlusIcon onClick={() => handleIncrement(c._id)} style={{ color: 'blue', height: '17px', width: '17px' }} className="" />
        //                     </div>


        //                 </div>
        //                 <div>

        //                     <p>{c.price * c.quantity}</p>

        //                 </div>







        //             </div>



        //         </>)
        //     }















        //     <div>




        //     </div>


        // </div>


        <div className='container'>
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div style={{borderBottom:'1px solid #D3D3D3'}} className=' d-flex justify-content-between align-items-center mt-5'>

                        <div>
                            <p><b>Product</b></p>
                        </div>
                        <div>
                            <p><b>Price</b></p>

                        </div>
                        <div>
                            <p><b>Quantity</b></p>
                        </div>
                        <div>
                            <p><b>Subtotal</b></p>

                        </div>



                    </div>
                    {
                checkOut.map(c => <>

                    <div style={{borderBottom:'1px solid #D3D3D3'}} className='d-flex justify-content-between align-items-center mt-3'>

                        <div className='d-flex justify-content-center align-items-center py-3 '>
                            <img style={{ height: '60px', width: '60px' }} src={c?.img} alt="" />
                            <p>{c?.name}</p>

                        </div>



                        <div className='py-3'>

                            <p>${c?.price}</p>

                        </div>
                        <div style={{ height: '60px', width: '90px ', border: '1px solid grey' }} className=' rounded-pill   d-flex justify-content-center align-items-center py-3 '>

                            <div className='d-flex justify-content-center align-items-center'>
                                <MinusIcon onClick={() => handleDecrement(c._id)} style={{ color: 'blue', height: '17px', width: '17px' }} className="" />
                                <p className='pt-1 m-3 '>{c?.quantity}</p>
                                <PlusIcon onClick={() => handleIncrement(c._id)} style={{ color: 'blue', height: '17px', width: '17px' }} className="" />
                            </div>


                        </div>
                        <div className='py-3'>

                            <p className='text-primary'>${c.price * c.quantity}</p>

                        </div>







                    </div>



                </>)
            }

                </div>
                <div className="col-lg-4 col-12 mt-5">
                    <div style={{border:'1px solid #D3D3D3'}} className='container py-5'>
                    <h3>Cart totals</h3>
                    <div style={{borderBottom:'1px solid #D3D3D3'}} className='d-flex justify-content-between align-items-center'>
                        <p><b>Subtotal</b></p>
                        <p className='text-primary'>${subTotal}</p>
                    </div>
                    {/* <p>{subTotal}</p> */}

                    <div className='d-flex justify-content-between align-items-center pt-3'>
                        <h5><b>Total</b></h5>
                        <h5 className='text-primary'>${subTotal}</h5>

                    </div>

                    <button onClick={handleProceed} style={{width:'100%'}} className='btn btn-primary  rounded-pill mt-3'>PROCEED TO CHECKOUT</button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default CheckOut;