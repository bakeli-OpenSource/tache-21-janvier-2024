const Paragraphe = ({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <p key={index} className="text-sm py-1 font-semibold">{item}</p>
        ))}
      </div>
    );
  };

  export default Paragraphe