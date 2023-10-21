import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Counter = () => {
    const [num,changeNum]=useState(0);
    const incData=()=>{
        changeNum(num+1)
    }
    const decData=()=>{
        changeNum(num-1)
    }
    const setZer=()=>{
        changeNum(0)
    }

    return (
        <body className='vh-100 d-flex bg-light'>
            <div className='container d-flex align-items-center  justify-content-center  '>
                
                <div className='d-grid gap-2 mx-auto col-3 '>
                <p className='text-center'>{num} </p>
                <button type="button" class="btn btn-success btn-lg " onClick={incData}>Increase</button>
                <button type="button" class="btn btn-danger btn-lg" onClick={decData}>Decrease</button>
                <button type="button" class="btn btn-primary btn-lg" onClick={setZer}>Set to Zero</button>
                </div>

            </div>

        </body>
    )
}

export default Counter