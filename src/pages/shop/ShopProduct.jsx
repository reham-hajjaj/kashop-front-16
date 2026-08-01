import React from 'react'

function ShopProduct() {
     const{data, isLoading, isError, error}=useShopProduct();
      if(isLoading) return <CircularProgress />
      console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default ShopProduct
