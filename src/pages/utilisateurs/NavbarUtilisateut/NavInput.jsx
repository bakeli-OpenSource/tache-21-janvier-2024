const NavInput = ({type, value, onChange}) => {
  
    return(
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input class="appearance-none   text-gray-700 pl-2 border rounded py-2 w-64 mb-3 leading-tight outline-none focus:bg-white" value={value} type={type} onChange={onChange} required />
      </div>
     );
}
 
export default NavInput;