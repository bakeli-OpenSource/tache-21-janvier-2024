const NavInput = ({ type, value, onChange, search }) => {
  return (
    <>
      {search && (
          <input
            className="appearance-none duration-500 transition ease-in-out delay-150  m-0  text-gray-700 pl-2  py-1 w-64  mb- leading-tight outline-none focus:bg-white"
            value={value}
            type={type}
            onChange={onChange}
            required
          />
      )}
    </>
  );
};

export default NavInput;
