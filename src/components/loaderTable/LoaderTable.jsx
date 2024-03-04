import React from 'react'

const LoaderTable = () => {
  return (
    <tbody className='bg-white '>
                {/* {tbody.length !== 0 ? */}
                {/* // tbody.map((td, index) => ( */}
                <tr className="text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100" > 
                    {/* {td.imageUrl && td.titre && td.nom ? */}
                        <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                                <div className="md:relative w-8 h-8 mr-3 rounded-full md:block">

                                    {/* <img className="object-cover w-full h-full rounded-full" src={td.imageUrl} alt="" loading="lazy" /> */}
                                    <div className="md:absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold text-black bg-slate-200"></p>
                                    <p className="text-xs text-gray-600 bg-slate-200"></p>
                                </div>
                            </div>
                        </td> 
                                    <td className="px-4 py-3 border">
                                        <div className="text-center text-sm">
                                            <p className="font-semibold bg-slate-200 text-black"></p>
                                        </div>
                                    </td> 
                    {/* } */}
                    {/* {td.email ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.email}
                    </td> : null
                    } */}
                    {/* {td.produit ? */}
                    <td className="px-4 py-5 text-xl text-center border">
                        {/* {td.produit} */}
                    </td> 
                    {/* } */}
                    {/* {td.quantite ? */}
                    <td className="px-4 py-3 text-center border text-md">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"></span>
                    </td> 
                    {/* // }  */}
                    {/* {td.date ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.date}
                    </td> : null
                    } */}
                    {/* {td.telephone ? */}
                    <td className="px-4 bg-slate-200 py-5 text-xl text-center border">
                        {/* {td.telephone} */}
                    </td> 
                    {/* } */}
                    {/* {td.etat ? */}
                    <td className="px-4 bg-slate-200 py-5 text-xl text-center border">
                        {/* {td.etat} */}
                    </td> 
                    {/* } */}
                    {/* {td.prixProduit ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.prixProduit}
                    </td> : null
                    } */}
                    {/* {td.prixLivraison ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.prixLivraison}
                    </td> : null
                    } */}
                    {/* {td.prix ? */}
                    <td className="px-4 bg-slate-200 py-5 text-xl text-center border">
                        {/* {td.prix.toLocaleString('de-DE')} */}
                    </td> 
                    {/* } */}
                    {/* {td.PrixUnitaire ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.PrixUnitaire.toLocaleString('de-DE')}
                    </td> : null
                    }
                    {td.prixTotal ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.prixTotal}
                    </td> : null
                    } */}
                    {/* {td.adresse ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.adresse}
                    </td> : null
                    } */}
                    
                    {/* {td.statut ? */}
                    <td className="px-4 bg-slate-200 py-5 text-center text-xl border">
                        {/* {td.statut} */}
                    </td> 
                    {/* } */}
                    {/* {td.prenomCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.prenomCli}
                    </td> : null
                    } */}
                    {/* {td.nomCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.nomCli}
                    </td> : null
                    } */}
                    {/* {td.adresseCli ? */}
                    <td className="px-4 bg-slate-200 py-5 text-center text-xxl border">
                        {/* {td.adresseCli} */}
                    </td> 
                    {/* } */}
                    {/* {td.emailCli ? */}
                    <td className="px-4 bg-slate-200 py-5 text-center text-xxl border">
                        {/* {td.emailCli} */}
                    </td>
                    {/* // } */}
                    {/* {td.telCli ? */}
                    <td className="px-4 py-5 bg-slate-200 text-center text-xxl border">
                        {/* {td.telCli} */}
                    </td>
                    {/* // } */}
                    {/* {td.dateMes ? */}
                    <td className="px-4 py-5 bg-slate-200 text-center text-xxl border">
                        {/* {td.dateMes} */}
                    </td> 
                    {/* } */}

                    {/* {actions ? */}
                        <td className="px-4 py-3 text-ms font-semibold border text-center">
                            {/* {actions.map((action, index) => (
                                <button key={index} className={`${action.color} p-1 text-white focus:ring-4 shadow rounded ml-2`} onClick={() => action.handleClick(td._id)}>{action.icon}</button>
                            ))} */}
                            <div className='h-3 bg-slate-200'></div>
                            <div className='h-3 bg-slate-200'></div>
                            <div className='h-3 bg-slate-200'></div>
                        </td> 
                    {/* } */}
                </tr>
                {/* ))  : (<tr className="h-[400px] ">
                            <td className="" colSpan="15">
                                <Loader />
                            </td>
                        </tr>)} */}
        </tbody>
  )
}

export default LoaderTable
