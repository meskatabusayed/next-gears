import React from 'react'

const CarsDetailsPage = ({params} : {params : {carsId : string}}) => {
  return (
    <div>
      This is cars Details {params.carsId}
    </div>
  )
}

export default CarsDetailsPage
