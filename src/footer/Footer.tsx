 function Footer() {
  return (
  <>
  <div className="footer-outer">
    <div className="footer-inner">
        <div className="footer-wrapper">
            <div className="footer-wrapper-flex">
                <div className="footer-cart">
                <button className="cart"><img src='/src/assets/cart.png'/></button>
                </div>
                <div className="footer-menu-flex">
                <button className="cart-menu-wrapper"><img src='/src/assets/menu.png'/></button>
                <p>menu</p>
            </div>
            <div className="footer-wrappe-cart">
                <button className="cart">view cart</button>
            </div>
            </div>
            
        </div>
    </div>
  </div>
  </>
  )
}

export default Footer