
import { useProduct } from "../context"

const Description = () => {
  const {
    productData
  } = useProduct()
  return (
    <div className='description'>
      <div className='description__content'>
        <h3 className='description__content-title'>Description</h3>
        <p className='description__content-text'>{productData?.description}</p>
      </div>
    </div>
  )
}

export default Description
