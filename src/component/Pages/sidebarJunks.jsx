import React from "react";
const SidebarJunks = ({ src, alt, title }) => {
  return (
    <>
      <div className='homeContainer'>
      <img src={src} alt={alt} />
      <p>{title}</p>
      </div>
    </>
  );
};

export default SidebarJunks;
