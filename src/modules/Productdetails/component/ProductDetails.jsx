import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import coriander from '../../../Assests/Images/coriander1.jpg'

const ProductDetails = () => {
  const loaction = useLocation()
  const category = loaction?.search.split("=")[1]
  console.log(category);
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <div className='productDetail'>
        <div className='image-container'>
          <img src={coriander} alt="coriander" />
        </div>
        <div className="product-details">
          <h1>{category}</h1>
          <p className='ellips'>
                                Coriander is an important spice crop having a prime position in flavouring food. The plant is a thin stemmed, small, bushy herb, 25 to 50 cm in height with many branches and umbels. Leaves are alternate, compound. The whole plant has a pleasant aroma. Inflorescence is a compound umbel comprises 5 smaller umbels. Fruit is globular, 3 to 4 mm diameter, when pressed break into two locules each having one seed. Fruit has delicate fragrance; seeds are pale white to light brown in colour.
                                </p>
        </div>

      </div>
    </>
  )
}

export default ProductDetails
