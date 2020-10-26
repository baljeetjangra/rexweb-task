import React from "react";

const Button = ({ value, setPageNo }) => {
  const handleClick = (e) => {
    const page_no = e.target.value;
    // console.log(page_no);
    setPageNo(page_no);
  };

  return (
    <button onClick={handleClick} value={value}>
      {value}
    </button>
  );
};

export default Button;
