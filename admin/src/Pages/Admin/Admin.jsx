import React from 'react'
import './Admin.css'
import {Route, Routes} from 'react-router-dom'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Addproduct } from '../../Components/Addproduct/Addproduct'
import { ListProduct } from '../../Components/ListProduct/ListProduct'

export const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path ='/addproduct' element={<Addproduct/>}/>
            <Route path ='/listproduct' element={<ListProduct/>}/>
        </Routes>
        


    </div>
  )
}
