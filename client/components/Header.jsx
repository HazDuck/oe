import CartBadge from "./CartBadge"

const Header = () => (
  <header className='header flex space-between'>
    <div 
      className='header__logo'
      role='img'
      aria-label='Octopus Energy Logo'>
    </div>
    <div 
      className='header__basket'
      role='img'
      aria-label='Basket'>
        <CartBadge/>
    </div>
  </header>
)
export default Header