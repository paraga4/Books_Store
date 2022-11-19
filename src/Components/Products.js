import React, { useState } from 'react'
import Header1 from './Header1'
import list from './Data'
import products from './products.css'
import Cards1 from './Cards1'

function Products() {
  const [refresh, setRefresh] = useState(false)
  return (
    <div>
      <Header1 refresh={refresh} />
      <Cards1 setRefresh={setRefresh} refresh={refresh} />
    </div>
  )
}

export default Products
