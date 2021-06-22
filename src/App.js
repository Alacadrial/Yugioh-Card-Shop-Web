import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageHome from './pages/homepage'
import {useState} from 'react'
import PageCards from './pages/cards'
import PageShoppingCart from './pages/cart'
import PageAbout from './pages/about'

function App() {
      const cards = [ {
        id: 0,
        name: "Dark Magician",
        edition: "VIP#001",
        cardImage: "https://i.pinimg.com/originals/c9/43/93/c94393b38644cf7b9becb800cd335115.jpg",
        price: 14.50,
    },
    {
      id: 1,
      name: "Elemental Hero Neos",
      edition: "STD#001",
      cardImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dcprn94-7e5769d4-2f28-4cb2-b500-20e2d5b3189a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZGNwcm45NC03ZTU3NjlkNC0yZjI4LTRjYjItYjUwMC0yMGUyZDViMzE4OWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NJ86rqWo9e7lVdImrcXTqmk1Ly_TGQ6XBFuZCRUaBRU",
      price: 9.50,
    },
    {
      id: 2,
      name: "Blue Eyes White Dragon",
      edition: "STD#001",
      cardImage: "https://i.pinimg.com/originals/2a/31/e4/2a31e48bafe34f7692cfd5f63fd1310a.png",
      price: 9.00,
    },
    {
      id: 3,
      name: "Shadow Spell",
      edition: "STD#001",
      cardImage: "https://i.pinimg.com/originals/b5/ba/a1/b5baa17ea3917995b536de3577e71d0f.png",
      price: 20.25,
    },
    {
      id: 4,
      name: "Polymerization",
      edition: "STD#001",
      cardImage: "https://m.media-amazon.com/images/I/71d633mhCWL._AC_.jpg",
      price: 5.0,
    },
    {
      id: 5,
      name: "Judgement Dragon",
      edition: "STD#001",
      cardImage: "https://images-na.ssl-images-amazon.com/images/I/519pO4yz55L._AC_.jpg",
      price: 5.0,
    },
    {
      id: 6,
      name: "Michael, The Arch-Lightsworn",
      edition: "STD#001",
      cardImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/446640fe-b46e-436b-a44b-08afaa8ca6b9/d6xagez-e4f9f2d6-4023-4265-9748-e889d69dfbdc.png/v1/fill/w_549,h_800,strp/michael__the_arch_lightsworn_by_grezar_d6xagez-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNDQ2NjQwZmUtYjQ2ZS00MzZiLWE0NGItMDhhZmFhOGNhNmI5XC9kNnhhZ2V6LWU0ZjlmMmQ2LTQwMjMtNDI2NS05NzQ4LWU4ODlkNjlkZmJkYy5wbmciLCJ3aWR0aCI6Ijw9NTQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bsLUBaeUajsskXY8x4BtmYtO4QOcG2DBjsFWEM_cvkA",
      price: 25.0,
    },
    {
      id: 7,
      name: "Stardust Dragon",
      edition: "STD#001",
      cardImage: "https://images-na.ssl-images-amazon.com/images/I/514IRevdqZL._AC_.jpg",
      price: 25.0,
    },
    {
      id: 8,
      name: "Number 62: Galaxy-Eyes Prime Photon Dragon",
      edition: "VIP#001",
      cardImage: "https://ygoprodeck.com/pics/31801517.jpg",
      price: 45.0,
    },
    {
      id: 9,
      name: "Magic Cylinder",
      edition: "STD#001",
      cardImage: "https://images-na.ssl-images-amazon.com/images/I/51swsD5ek3L._AC_SY450_.jpg",
      price: 12.0,
    }
    ]

    const featuredCards = [
  {
      id: 0,
      name: "Dark Magician",
      edition: "VIP#001",
      cardImage: "https://i.pinimg.com/originals/c9/43/93/c94393b38644cf7b9becb800cd335115.jpg",
      price: 14.50,
  },
  {
    id: 1,
    name: "Elemental Hero Neos",
    edition: "STD#001",
    cardImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dcprn94-7e5769d4-2f28-4cb2-b500-20e2d5b3189a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZGNwcm45NC03ZTU3NjlkNC0yZjI4LTRjYjItYjUwMC0yMGUyZDViMzE4OWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NJ86rqWo9e7lVdImrcXTqmk1Ly_TGQ6XBFuZCRUaBRU",
    price: 9.50,
  },
  {
    id: 2,
    name: "Blue Eyes White Dragon",
    edition: "STD#001",
    cardImage: "https://i.pinimg.com/originals/2a/31/e4/2a31e48bafe34f7692cfd5f63fd1310a.png",
    price: 9.00,
  },
  {
    id: 3,
    name: "Shadow Spell",
    edition: "STD#001",
    cardImage: "https://i.pinimg.com/originals/b5/ba/a1/b5baa17ea3917995b536de3577e71d0f.png",
    price: 20.25,
  },
  {
    id: 4,
    name: "Polymerization",
    edition: "STD#001",
    cardImage: "https://m.media-amazon.com/images/I/71d633mhCWL._AC_.jpg",
    price: 5.0,
  },
  {
    id: 5,
    name: "Judgement Dragon",
    edition: "STD#001",
    cardImage: "https://images-na.ssl-images-amazon.com/images/I/519pO4yz55L._AC_.jpg",
    price: 5.0,
  },
  {
    id: 6,
    name: "Michael, The Arch-Lightsworn",
    edition: "STD#001",
    cardImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/446640fe-b46e-436b-a44b-08afaa8ca6b9/d6xagez-e4f9f2d6-4023-4265-9748-e889d69dfbdc.png/v1/fill/w_549,h_800,strp/michael__the_arch_lightsworn_by_grezar_d6xagez-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNDQ2NjQwZmUtYjQ2ZS00MzZiLWE0NGItMDhhZmFhOGNhNmI5XC9kNnhhZ2V6LWU0ZjlmMmQ2LTQwMjMtNDI2NS05NzQ4LWU4ODlkNjlkZmJkYy5wbmciLCJ3aWR0aCI6Ijw9NTQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bsLUBaeUajsskXY8x4BtmYtO4QOcG2DBjsFWEM_cvkA",
    price: 25.0,
  },
  {
    id: 7,
    name: "Stardust Dragon",
    edition: "STD#001",
    cardImage: "https://images-na.ssl-images-amazon.com/images/I/514IRevdqZL._AC_.jpg",
    price: 25.0,
  }
  ]

    const [displayCards, setDisplayCards] = useState([...cards])
    const [cartItems, setCartItems] = useState([])
    const [wishlistedItems, setWishlistedItems] = useState([])

    const handleSearch = (event) => {
        if(event.key === 'Enter'){
          setDisplayCards([...cards])
          if(event.target.value !== ""){
            setDisplayCards(displayCards.filter((card) => card.name.toLowerCase() === event.target.value.toLowerCase()))
            event.target.value = ""
          }
      }
    }

    const inList = (card, fromCart) => {
      if (fromCart){
        var copy = [...cartItems];
      }
      else{
        var copy = [...wishlistedItems]; 
      }
      copy = copy.filter((item) => item.id === card.id);
      if(copy.length === 0)
        return false;
      return true;
    }

    const addToWishlist  = (card) => {
      if(!inList(card, false))
        setWishlistedItems([...wishlistedItems, card])
      else{
        setWishlistedItems(wishlistedItems.filter((item) => item.id !== card.id))
      }
    }

    const addToCart = (card) => {
      if(!inList(card, true))
        setCartItems([...cartItems, {...card, amount:1}]);
      else{
        setCartItems(cartItems.map((item) => (item.id === card.id ? {...item, amount: item.amount+1} : item)  ))
      }
    }

    const removeFromCart = (card) => {
      if(card.amount === 1)
        setCartItems(cartItems.filter((item) => item.id !== card.id));
      else{
        setCartItems(cartItems.map((item) => (item.id === card.id ? {...item, amount: item.amount-1} : item)  ))
      }
    }

    const completePurchase = () => {
      alert("Purchase has been made.")
      /* Empty cart items after the purchase has been made. */
      setCartItems([])
    }
  

  return (
    <Router>
      <Route path="/" component={() => <PageHome featuredCards={featuredCards} />} exact />
      <Route path="/cards" component={() => <PageCards displayCards={displayCards} handleSearch={handleSearch} addToCart={addToCart} addToWishlist={addToWishlist} inList={inList}/>} />
      <Route path="/cart" component={() => <PageShoppingCart cartItems={cartItems} wishlistedItems={wishlistedItems} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist} purchaseAction={completePurchase}  />} />
      <Route path="/about" component={PageAbout} />
    </Router>
  );
}

export default App;
