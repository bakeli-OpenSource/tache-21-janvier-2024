
const Thead = ({thead}) => {
    return (
        <thead>
            <tr className="text-md text-center font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
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
                {tbody.map((td, index) => (
                <tr className="text-gray-700">
                    <td className="px-4 py-3 text-ms font-semibold border">{td.id}</td>
                    {td.article ? 
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src={td.article.src} alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{td.article.nom}</p>
                            <p className="text-xs text-gray-600">{td.article.desc}</p>
                        </div>
                        </div>
                    </td> : null
                    }
                    {td.email ?
                    <td className="px-4 py-5 text-center text-xl border">
                        {td.email}
                    </td> : null
                    }
                    <td className="px-4 text-center py-3 text-md border">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">{td.quantite}</span>
                    </td>
                    
                    {td.date ?
                    <td className="px-4 py-5 text-center text-xl border">
                        {td.date}
                    </td> : null
                    }
                    {td.etat ?
                    <td className="px-4 py-5  text-center text-xl border">
                        {td.etat}
                    </td> : null
                    }
                    {td.prix ?
                    <td className="px-4 py-5  text-center text-xl border">
                        {td.prix}
                    </td> : null
                    }
                    {td.statut ?
                    <td class="px-4 py-5 flex justify-center text-xl border-none">
                        {td.statut}
                    </td> : null
                    }
                    
                    <td class="px-4 py-3 text-ms font-semibold border text-center">
                        {actions.map((action) => (
                            <button className={`${action.color} p-1 text-white rounded ml-2`} onClick={action.hanldleClick}>{action.icon}</button>
                        ))}
                    </td>
                </tr>
                ))}
        </tbody>
    )
}

const Table = ({thead, tbody, actions}) => {
  return (
    <section className="container mx-auto  font-mono">
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