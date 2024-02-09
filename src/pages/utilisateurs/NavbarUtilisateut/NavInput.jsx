const NavInput = ({ type, value, onChange, search }) => {
  return (
    <>
      {search && (
        // <div class="w-full duration-500 m-0 p-0 md:w-1/2 px-3 mb- md:mb-0">
          <input
            class="appearance-none duration-500   m-0  text-gray-700 pl-2  py-1 w-64  mb- leading-tight outline-none focus:bg-white"
            value={value}
            type={type}
            onChange={onChange}
            required
          />
        // </div>
      )}
    </>
  );
};

export default NavInput;
