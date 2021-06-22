import MainLayout from '../layouts/main'
import Card from '../components/card/card'
import './cards.css'


function PageCards({displayCards, inList, handleSearch, addToCart, addToWishlist}) {

  const display = displayCards.map((card) => {
      var inCart = inList(card, true);
      var inWishlist = inList(card, false);
      return (
        <div key={card.id} className="product-wrapper d-flex flex-column py-4 px-5 me-1 mb-1">
              <Card card={card} extended={true} onButtonClickAction={addToCart} onIconClickAction={addToWishlist} inCart={inCart} inWishlist={inWishlist} />
        </div>
      );
    });

  return (
    <MainLayout>
        <div className="input-wrapper mt-4">
            <input className="search-box" type="text" placeholder="Dark Magician" onKeyPress={handleSearch}/>
        </div>
        <div className="main-wrapper d-flex left-align py-4 px-5">
            {displayCards.length >0 ? display : <p>There is no such result.<br/> Press enter to show all cards again.</p>}
        </div>
    </MainLayout>
  );
}

export default PageCards;