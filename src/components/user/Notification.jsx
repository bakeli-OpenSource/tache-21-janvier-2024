import { IoIosNotifications } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import useSidebare from '../../utils/hooks/useSidebare';
import { MdDelete } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";


const Notification = ({nouveauCommande}) => {

    const {notification, handleNotification} = useSidebare()


    const messageLu = async (id) => {
      try {
        const response = await axiosInstance.put('/commande/' + id, { lu: true });
        
        if (response.status === 200) { 
          console.log('Message effacé:', response.data);
          alert('Message supprimé');
        } else {
          throw new Error('Erreur lors de la suppression du message');
        }
      } catch (error) {
        console.error('Erreur lors de la suppresion du message:', error);
      }
    }
    
  
    return (
      <div className="relative">
        <IoIosNotifications className="cursor-pointer" size={20} onClick={handleNotification} />

  
        {notification && (
          <div className="absolute right-0 mt-5 w-[350px] bg-white border border-gray-200 rounded-md shadow-lg py-1">
              <div className='flex justify-end px-4 py-2'>

              <FaRegCircleXmark className='cursor-pointer text-black' onClick={handleNotification} />
              </div>
              <div className='px-4 py-3 text-sm flex flex-col overflow-auto h-[250px]'>
                {nouveauCommande.length ?
                  nouveauCommande.map((commande, index) => (
                    <button  key={index} className="mb-2 bg-white border-s-4 border-sky-500 text-black py-2 rounded-lg col-span-3 shadow-xl">
                      <div className="flex justify-between px-3">
                          <div className=''>
                            <p className="text-lg text-start font-semibold pb-1">Nouvelle Commande</p>
                            <p className='text-start text-slate-600'><span className='font-semibold'>{commande.prenom} {commande.nom}</span> vient d'effectuer une commande</p>
                          </div>
                          <MdDelete className='cursor-pointer text-lg text-red-700 shadow-sm' onClick={() => messageLu(commande._id)} />
                      </div>
                    </button>
                  )) : <div className='px-4 py-3 text-sm flex flex-col text-black'>
                        <p>Aucun Notification</p>
                      </div>
                }
              </div>
          </div>
        )}
      </div>
    );
}

export default Notification
