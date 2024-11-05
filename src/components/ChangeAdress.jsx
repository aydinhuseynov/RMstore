import PropTypes from 'prop-types';
import { useState } from 'react';

const ChangeAdress = ({setAdress,setIsModalOpen}) => {

    const [newAdress,setNewAdress] = useState('');
    const onClose = () =>{
     setAdress(newAdress)
     setIsModalOpen(false);
     setNewAdress('')
    }

  return (
    <div>
        <input type="text"
        onChange={(e)=>setNewAdress(e.target.value)}
        placeholder="Enter a new adresss" 
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        <div className="flex justify-end">
            <button onClick={()=> setIsModalOpen(false)} className="bg-red-500 text-white py-2 px-4 rounded mr-2">Cancel</button>
            <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded ">Save Adress</button>
        </div>
      
    </div>
  )
}
ChangeAdress.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
    setAdress: PropTypes.func.isRequired,
  };

export default ChangeAdress
