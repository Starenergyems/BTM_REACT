import { forwardRef } from "react";
import { Input as AntdInput } from "antd";
import ScopeStyle from "@/components/units/input/indexStyle";

function Input(
  { className, errorMessage, inputAttr = {}, isInvalid, ...forwardRefProps },
  ref
) {
  const inputProps = { ...inputAttr, ...forwardRefProps };
  inputProps.value = inputAttr.value ?? forwardRefProps.value;
  return (
    <ScopeStyle
      className={`styled-container-input ${className ?? ""}`}
      $status={inputAttr?.status}
      $isInvalid={isInvalid}
    >
      <AntdInput autoComplete="off" {...inputProps} ref={ref} />
      {(isInvalid || inputAttr?.status === "error") && (
        <div className="ant-form-item-explain-error">*{errorMessage}</div>
      )}
    </ScopeStyle>
  );
}
export default forwardRef(Input);
