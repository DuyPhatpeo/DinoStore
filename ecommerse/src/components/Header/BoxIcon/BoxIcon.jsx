/* eslint-disable no-unused-vars */
import React from "react";

function BoxIcon({ icon: Icon, url }) {
  return (
    <a href={url} className="px-2 text-lg text-gray-600 hover:text-black">
      <Icon />
    </a>
  );
}

export default BoxIcon;
