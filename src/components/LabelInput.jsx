import React from "react";

const LabelInput = ({
  compClass,
  labelTitle,
  labelClass,
  ipId,
  ipType,
  ipValue,
  ipAutoComplete = "off",
  ipDisabled = false,
  ipClassName,
  ipCallback,
  ipPlaceHolder
}) => {
  return (
    <div className={`${compClass}`}>
      <label className={`${labelClass}`}>{labelTitle}</label>
      <input
        id={ipId}
        type={ipType}
        value={ipValue}
        autoComplete={ipAutoComplete}
        disabled={ipDisabled}
        className={`${ipClassName}`}
        onChange={(e) => ipCallback(e)}
        placeholder={ipPlaceHolder}
      />
    </div>
  );
};

export default LabelInput;
