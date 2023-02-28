import React from "react";

const Options = ({ name, updateItemCount }) => {
  return (
    <form>
      <input
        style={{ cursor: "pointer" }}
        type="checkbox"
        id={`${name} option`}
        onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
      />{" "}
      <label style={{ cursor: "pointer" }} htmlFor={`${name} option`}>
        {name}
      </label>
    </form>
  );
};

export default Options;
