import React, { Component } from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    color: "grey",
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    marginTop: 10,
    fontSize: 16,
    border: "0.1rem solid rgba(97, 100, 101, 0.1)",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#F5961F",
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const fontSize = 16;
    const color = "grey";

    return { ...provided, opacity, transition, fontSize, color };
  },
};
const _options = [
  { value: "dinar", label: "DIN" },
  { value: "euro", label: "EUR" },
];

const MyComponent = (props) => {
  let { onSelectChange, isMulti = false, options = _options,placeholder="" } = props;
  return (
    <Select
      options={options}
      isMulti={isMulti}
      // defaultValue={options[0]}
      styles={customStyles}
      onChange={onSelectChange}
      placeholder={placeholder}
    />
  );
};
export default MyComponent;
