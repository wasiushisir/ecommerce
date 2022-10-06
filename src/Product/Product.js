import React, { useEffect, useState } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import ProductShow from '../ProductShow/ProductShow';
import { Link, useNavigate } from 'react-router-dom';


const Product = () => {
    let navigate = useNavigate();
    const [products, setProduct] = useState([])
    const [filterCategories, setFilterCategories] = useState([])
    // const [checkOut,setCheckOut]=useState([])
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [])



    useEffect(()=>{

        if(products.length!==0)
        {
            setFilterCategories(products)
        }

    },[products])


    // const filterData=products.filter(p=>p.category===category)
    // setFilterCategories(filterData)

    useEffect(()=>{
    //       const filterData=products.filter(p=>p.category===category)
    //   setFilterCategories(filterData)

    let result = [...products]
    
        if (category) {
            result = result.filter(r => r.category === category)
          
        }



        if (size) {
            result = result.filter(p => p.size === size)
           
        }

        setFilterCategories(result)



    },[category,size])



    


    // useEffect(() => {
    //     let result = [...products]
       
       



    //     if (category) {
    //         result = result.filter(r => r.category === category)
          
    //     }



    //     if (size) {
    //         result = result.filter(p => p.size === size)
           
    //     }

    //     setFilterCategories(result)


        

        


    //     console.log('one');

    // }, [category, size])


    // const selectedProduct=(product,quantity)=>{
    //     console.log(product,quantity);
    //     const pro={...product,quantity}
    //     console.log(pro);
       

    //     const newProduct=[...checkOut,pro]
    //     console.log(newProduct);
    //     setCheckOut(newProduct)
    //     console.log(checkOut);


    // }



    const resetButton=()=>{
        setFilterCategories([])


       
    }


    const handleAddToCart=()=>{
        console.log(999);

        navigate("/checkout");


    }

    const serachData=(e)=>{
        const searchWord=e.target.value
        const newFilter=products.filter(v=>v.name.toLowerCase().includes(searchWord.toLowerCase()))
        setFilterCategories(newFilter)

    }

   


















    return (
        <div className='container'>
            <div className="row  ">
            {/* <div className='d-flex justify-content-between  align-items-center   '> */}
                <div className='d-flex   align-items-center col-lg-8 col-12'>

                    <div>



                        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '3px 17px 3px 17px', marginRight: '10px' }} id="cars">

                            <option>Category</option>
                            <option>hoodie</option>
                            <option>tShirt</option>
                            <option>jeans</option>
                            <option>jacket</option>
                        </select>
                       

                    </div>
                    <div>



                        <select value={size} onChange={(e) => setSize(e.target.value)} style={{ padding: '3px 17px 3px 17px', marginRight: '10px' }} id="cars">
                            <option>Size</option>
                            <option>xl</option>
                            <option>lg</option>
                            <option>md</option>
                            <option >sm</option>
                        </select>






                    </div>
                    <div className='d-flex justify-content-center align-items-center  cursor-pointer'>
                        <ArrowUturnLeftIcon style={{ color: 'blue', height: '23px', width: '23px' }} className="" />
                        <p onClick={resetButton} className='text-primary fs-5 pt-3 fw-semibold '>Reset</p>

                    </div>

                </div>

                <div className='d-flex  align-items-center col-lg-4 col-12'>
                    <p className='me-1 pt-3 fs-5'>Search:</p>
                    <input onChange={serachData} style={{ backgroundColor: '#DCDCDC', padding: '3px 0px 3px 0px', outline: 'none' }} className='border border-0 ' type="text" />
                    <button onClick={handleAddToCart} className='btn btn-primary ms-3'>Add To Cart</button>



                </div>








            
            </div>


            <div style={{ borderBottom: '2px solid black' }} className='d-flex justify-content-between align-items-center mt-5'>
                <div>
                    <p><b>Image</b></p>


                </div>
                <div>
                    <p><b>Name</b></p>

                </div>
                <div>
                    <p><b>Color</b></p>

                </div>
                <div>
                    <p><b>Stock</b></p>

                </div>
                <div>
                    <p><b>Price</b></p>

                </div>
                <div>
                    <p><b>Buy</b></p>

                </div>

            </div>

            {

                 filterCategories && filterCategories.map(product => <ProductShow key={product._id} product={product}  ></ProductShow>)


            }

            {/* {
               (products&&!filterCategories) &&  products.map(product => <ProductShow key={product._id} product2={product}></ProductShow>)

            } */}





        </div>

    );
};

export default Product;