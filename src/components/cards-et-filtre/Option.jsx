const Option = ({ contenus }) => (
  <>
    {contenus.map((contenu, index) => (
      <option key={index} value={contenu}>
        {contenu}
      </option>
    ))}
  </>
);

export default Option;
