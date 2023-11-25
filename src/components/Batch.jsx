/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { useParams } from 'react-router-dom'

const Batch = () => {
    let params = useParams();
    
  return (
    <>
    <Header/>

    <Footer/>
    </>
  )
}

export default Batch