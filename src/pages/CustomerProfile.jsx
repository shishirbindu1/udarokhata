import React from 'react'

const CustomerProfile = () => {
  return (
    <div className='wrapper bg-gray-200 w-3/4 m-auto p-5'>
        <div className="imagesection  grid justify-items-center p-5 ">
            <img src="https://images.pexels.com/photos/32840143/pexels-photo-32840143.jpeg" alt="" className='h-52 w-52 rounded-full  mb-3'/>
            <h3 className='text-xl font-bold  '>Purnima Ghatane</h3>
        </div>
        <div className="contactdetail w-3/4 m-auto bg-gray-50">
            <p>Name:purnima Ghatane</p>
            <p>Permanent Address: Bijaypur 26 pokhara </p>
            <p>Citizen No. 21-24-4521</p>
            <p>Father name: Dhan bahadur Ghatane</p>
            <p>mother name: Dhan bahadur Ghatane</p>
            <p>Father Contact: 9878998394</p>
            <p>Valid ID: </p>
            


        </div>
    </div>
  )
}

export default CustomerProfile