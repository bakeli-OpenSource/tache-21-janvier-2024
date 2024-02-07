import React from 'react'
import useSidebare from '../../utils/hooks/useSidebare'
import HeaderTable from '../headerTable/HeaderTable';
import { useParams } from 'react-router-dom';
import useFetch from '../../utils/hooks/useFetch';

const DetailsProduits = () => {
    const {id} = useParams();
    const {data} = useFetch('http://localhost:4000/api/produit/' + id)
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4  my-3 `}>
      <HeaderTable title="Détail du produit" />
      {data !== null ?
      <section class="overflow-hidden py-11 font-poppins ">
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class=" top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={data.imageUrl} alt=""
                                class="object-cover w-full lg:h-full " />
                        </div>
                        <div class="flex-wrap hidden md:flex ">
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="mb-8 ">
                            <h2 class="max-w-xl mt-2 text-2xl font-bold  md:text-4xl">
                              {data.nom}
                            </h2>
                            <div class="flex items-center mb-6">
                                <p class="">{data.carracteristique}</p>
                            </div>
                            <p class="max-w-md mb-8 text-gray-700 ">
                              {data.description}
                            </p>
                            <p class="mb-8 text-4xl font-bold text-gray-700 flex ">
                            <h2 class="w-16 text-xl font-bold mt-2">
                                Prix:
                            </h2>
                                <span>{data.prix} f cfa</span>
                            </p>
                        </div>
                       <Titre cle="Taille" valeure={data.taille} />
                       <Titre cle="Quantité" valeure={data.quantite} />
                       <Titre cle="Fournisseur" valeure={data.fournisseur} />
                       <Titre cle="Couleur" valeure={data.couleur} />
                        
                    </div>
                </div>
            </div>
        </div>
    </section> : <div>Loader...</div>
      }
    </div>
  )
}

const Titre = ({cle, valeure}) => {
  return(
    <div class="flex items-center mb-8">
      <h2 class="text-xl font-bold ">
          {cle}:
      </h2>
      <div class="flex flex-wrap mx-2 -mb-2">
          <div
              class="py-1 mb-2 mr-1 border p-2 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 text-center">{valeure}
          </div>
      </div>
  </div>
  )
}
const Image = ({src}) => {
  return(
    <div class="w-1/2 p-2 sm:w-1/4">
       <div class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
          <img src={src} alt="" class="object-cover w-full lg:h-20" />
      </div>                         
    </div>
  )
}


export default DetailsProduits
