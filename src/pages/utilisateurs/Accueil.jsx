import React, {useContext} from 'react'
import Footer from '../../usersComponents/footer/Footer'
import Navbar from './NavbarUtilisateut/Navbar/Navbar'
import Header from '../../usersComponents/headerUserComponent/Header'
import ScrollingText from '../../usersComponents/cards/ScrollingText'
import Produit from '../../usersComponents/cards/Produit'
import { ProduitContext } from '../../usersComponents/cards/ProduitContext'
import useGlobal from '../../utils/hooks/useGlobal'


export default function Accueil() {
  const { produits } = useContext(ProduitContext);
  const filteredProducts = produits.filter((item) => {
    return (
      item.categorie === "Chaussures" || item.categorie === "Accessoires" || item.categorie === "vetements"
    )
  })
  const {setDropdown} = useGlobal()

  return (
    <div >
      <Navbar className="bg-white z-50 fixed top-0 w-full"/>
     <div onClick={() => setDropdown(false)}>
     <Header />
    <div className='flex flex-col px-[35px]' >
      <section className='py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
            max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((produit) => {
              return (
                <Produit produit={produit} key={produit._id} />
              ) 
            })}
          </div>
        </div>
      </section>

      <div>
        <ScrollingText />
      </div>
      
    </div>
    <footer>
        <Footer />
      </footer>
     </div>
    </div>
  );
}