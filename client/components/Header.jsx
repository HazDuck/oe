import CartBadge from "./CartBadge"

const Header = () => (
    <header className='header flex space-between'>
    <div 
      className='header__logo'
      alt='Octopus Energy Logo'>
    </div>
    <div 
      className='header__basket' 
      alt='Add to basket'>
        <CartBadge/>
    </div>
  </header>
)
export default Header