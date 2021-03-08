import React from "react";

function ListFooter({ title, link }) {
  const style = {
    marginTop: "0.6rem",
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
  };
  return (
    <>
      <a className="list__footer" style={style} href={link}>
        {title}
      </a>
    </>
  );
}

export default ListFooter;
