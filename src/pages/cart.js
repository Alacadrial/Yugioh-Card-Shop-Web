import MainLayout from '../layouts/main'
import Card from '../components/card/card'
import Button from '../components/button/button'
import './cart.css'



function PageShoppingCart({cartItems,wishlistedItems , addToCart, removeFromCart, addToWishlist, purchaseAction}) {

  const costs = cartItems.map((item) => {
      return item.amount * item.price
  })

  function add(accumulator, a) {
    return accumulator + a;
}
  
  const displayCart = cartItems.map((item) => {
    return (
      <div key={item.id} className="product-wrapper d-flex px-2 mb-1">
          <div className="image-section">
            <Card card={item} extended={false} />
          </div>
          <div className="item-info d-flex flex-column flex-grow-1 py-2 px-5">
            <h3><b>Item Name:</b> {item.name} </h3>
            <h3><b>Item Edition:</b> {item.edition}</h3>
            <h3><b>Amount:</b> {item.amount}</h3>
            <h3><b>Cost:</b> {item.amount * item.price} <b>$</b></h3>
          </div>
          <div className="amount-modifier d-flex flex-column justify-content-center px-3">
          <Button buttonText="+" onClickAction={() => {addToCart(item)}}/>
          <div className="mb-2"></div>
          <Button buttonText="-" onClickAction={() => {removeFromCart(item) }}/>
          </div>
          
      </div>
    );
  });

  const displayWishlisted = wishlistedItems.map((item) => {
    return (
      <div key={item.id} className="product-wrapper d-flex px-2 mb-1">
          <div className="image-section">
            <Card card={item} extended={false} />
          </div>
          <div className="item-info d-flex flex-column flex-grow-1 py-2 px-5">
            <h3><b>Item Name:</b> {item.name} </h3>
            <h3><b>Item Edition:</b> {item.edition}</h3>
            <h3><b>Cost:</b> {item.price} <b>$</b></h3>
          </div>
          <div className="amount-modifier d-flex flex-column justify-content-center px-3">
          <Button buttonText="Add To Cart" onClickAction={() => {addToCart(item); addToWishlist(item)}}/>
          <div className="mb-2"></div>
          <Button buttonText="Remove From Wishlist" onClickAction={() => {addToWishlist(item)}}/>
          </div>
          
      </div>
    );
  });


  return (
    <MainLayout>
    <div className="main py-4 px-5">

      <div className="shopping-cart d-flex flex-column mb-4">
        <h2 className="head-section">Shopping Cart</h2>
        {cartItems.length>0 ? displayCart : <p className="text">There are no items on the cart.</p>}
        {cartItems.length>0 &&
        <div className=".clickable-main d-flex justify-content-end">
          <div className="clickable-section d-flex flex-column justify-content-end">
          <h3>Total Cost: {costs.reduce(add,0)} $</h3>
          <Button buttonText="Purchase" onClickAction={purchaseAction}/>
          </div>
        </div>
        }
      </div>

      <div className="wishlisted-items mb-4">
        <h2 className="head-section">Wishlisted Items</h2>
        {wishlistedItems.length>0 ? displayWishlisted : <p className="text">There are no items on the wishlist.</p>}
      </div>
      
    </div>
    </MainLayout>
  );
}

export default PageShoppingCart;