import Loader from "../loader/loader"
import '@fontsource/montserrat';

export const Thead = ({thead}) => {
    return (
        <thead>
            <tr className="font-semibold tracking-wide text-center text-white uppercase bg-gray-800 border border-x-0 border-top border-gray-300 text-sm">
                {thead.map((th, index) => (
                    <th key={index} className="px-4 py-3">{th}</th>
                ))}
            </tr>
        </thead>
    )
}

const Tbody = ({tbody, actions}) => {
    return (
        <tbody className='bg-white '>
                {tbody.length !== 0 ?
                tbody.map((td, index) => (
                <tr className="text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100" key={index}> 
                    {td.imageUrl && td.titre && td.nom ?
                        <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                                <div className="md:relative w-8 h-8 mr-3 rounded-full md:block">

                                    <img className="object-cover w-full h-full rounded-full" src={td.imageUrl} alt="" loading="lazy" />
                                    <div className="md:absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p className="font-semibold text-black">{td.nom}</p>
                                    <p className="text-xs text-gray-600">{td.titre}</p>
                                </div>
                            </div>
                        </td> : td.nom ? 
                                    <td className="px-4 py-3 border">
                                        <div className="text-center text-sm">
                                            <p className="font-semibold text-black">{td.nom}</p>
                                        </div>
                                    </td> : null
                    }
                    {td.email ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.email}
                    </td> : null
                    }
                    {td.telephone ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.telephone}
                    </td> : null
                    }
                    {td.etat ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.etat}
                    </td> : null
                    }
                    {td.statut ?
                    <td className="px-4 py-5 text-center text-xl border">
                        {td.statut}
                    </td> : null
                    }
                    {td.prenomCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.prenomCli}
                    </td> : null
                    }
                    {td.nomCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.nomCli}
                    </td> : null
                    }
                    {td.adresseCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.adresseCli}
                    </td> : null
                    }
                    {td.emailCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.emailCli}
                    </td> : null
                    }
                    {td.telCli ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.telCli}
                    </td> : null
                    }
                    {td.dateMes ?
                    <td className="px-4 py-5 text-center text-xxl border">
                        {td.dateMes}
                    </td> : null
                    }

                    {actions ?
                        <td className="px-4 py-3 text-ms font-semibold border text-center">
                            {actions.map((action, index) => (
                                <button key={index} className={`${action.color} p-1 text-white focus:ring-4 shadow rounded ml-2`} onClick={() => action.handleClick(td._id)}>{action.icon}</button>
                            ))}
                        </td> : null
                    }
                </tr>
                ))  : (<tr className="h-[400px] ">
                            <td className="" colSpan="15">
                                <Loader />
                            </td>
                        </tr>)}
        </tbody>
    )
}

const Table = ({thead, tbody, actions}) => {
  return (
    <section className="font-montserrat">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <Thead thead={thead} />
              <Tbody tbody={tbody} actions={actions} />
            </table>
          </div>
        </div>
      </section>
  )
}

export default Table