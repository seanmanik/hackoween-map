const InvisibleButton = ({ onClick }) => {
  return (
    <button style={{ opacity: 0, width: '100px', height: '100px' }} onClick={onClick}>

    </button>
  );
};

export default InvisibleButton;