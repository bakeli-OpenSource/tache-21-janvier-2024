
const Thead = ({thead}) => {
    return (
        <thead>
            <tr className="font-semibold tracking-wide text-center text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md">
                {thead.map((th, index) => (
                    <th key={index} className="px-4 py-3">{th}</th>
                ))}
            </tr>
        </thead>
    )
}

const Tbody = ({tbody, actions}) => {
    return (
        <tbody className='bg-white'>
                {tbody.length !== 0 ?
                tbody.map((td, index) => (
                <tr className="text-gray-700" key={index}>
                    {/* {td._id?
                        <td className="px-4 py-3 font-semibold border text-ms">{td._id}</td>
                        :null
                    } */}
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                        <div className="md:relative w-8 h-8 mr-3 rounded-full md:block">

                            {td.imageUrl?
                                <img className="object-cover w-full h-full rounded-full" src={td.imageUrl} alt="" loading="lazy" />
                            :null}
                            <div className="md:absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{td.nom}</p>
                            <p className="text-xs text-gray-600">{td.titre}</p>
                        </div>
                        </div>
                    </td>
                    {td.email ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.email}
                    </td> : null
                    }
                    <td className="px-4 py-3 text-center border text-md">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">{td.quantite}</span>
                    </td> 
                    {td.date ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.date}
                    </td> : null
                    }
                    {td.etat ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.etat}
                    </td> : null
                    }
                    {td.prix ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.prix}
                    </td> : null
                    }
                    {td.PrixUnitaire ?
                    <td className="px-4 py-5 text-xl text-center border">
                        {td.PrixUnitaire}
                    </td> : null
                    }
                    {td.statut ?
                    <td className="px-4 py-5 TEXT-center text-xl border">
                        {td.statut}
                    </td> : null
                    }

                    {actions ?
                        <td className="px-4 py-3 text-ms font-semibold border text-center">
                            {actions.map((action, index) => (
                                <button key={index} className={`${action.color} p-1 text-white rounded ml-2`} onClick={() => action.handleClick(td._id)}>{action.icon}</button>
                            ))}
                        </td> : null
                    }
                </tr>
                ))  : <div>Loading...</div>}
        </tbody>
    )
}

const Table = ({thead, tbody, actions}) => {
  return (
    <section className=" mx-  font-mono">
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