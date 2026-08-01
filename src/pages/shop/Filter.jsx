import React from 'react'

export default function Filter() {
     const{data, isLoading, isError, error}=useShopProduct();
     if(isLoading) return <CircularProgress />
     console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Filter
