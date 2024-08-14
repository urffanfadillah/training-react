const Card = ({ children }) => {
  return (
    <div
      style={{
        padding: "32px",
        border: "1px solid #1e1e1e",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
