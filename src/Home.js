import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
    
    {/* {product id,title,price,rating,image} */}
    <div className="home__row">
    <Product
        id="12345"
        title="boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic (Active Black)"
        price={1199}
        rating={4}
        image = "https://m.media-amazon.com/images/I/61ku39qVEzL._AC_UL320_.jpg" 
     />
     <Product
        id="23456"
        title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
        price={29999}
        rating={4}
        image = "https://m.media-amazon.com/images/I/71Lx9l3NivL._AC_UL320_.jpg" 
     />
    </div>
    
    <div className="home__row">
    <Product
        id="34567"
        title="Mellifluous Reversible Super Soft Velvet Round Cat Dog Pet Bed Diameter 61 cms Height 15 cms S (Small, Brown Cream)"
        price={1000}
        rating={4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71YMD-eEy6L._SL1500_.jpg" 
     />
     <Product
        id="45678"
        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
        price={116790}
        rating={5}
        image = "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL320_.jpg" 
     />
     <Product
        id="56789"
        title="Scizor Gaming Chair Ergonomic Racing Style Recliner with Massage Lumbar Support, Office Armchair for Computer PU Leather E-Sports Gamer Chairs with Retractable Footrest"
        price={14999}
        rating={3}
        image = "https://m.media-amazon.com/images/I/41fJeC3Td6L._AC_UL320_.jpg" 
     />
    </div>

    <div className="home__row">
    <Product
        id="67890"
        title="OCEAN RACE Cotton Anti Pollution 3 Layer Reusable Face Mask"
        price={495}
        rating={4}
        image = "https://m.media-amazon.com/images/I/71dEQ7Y312L._AC._SR360,460.jpg" 
     />
    </div>
    {/* {product} */}

    </div>
  )
}

export default Home