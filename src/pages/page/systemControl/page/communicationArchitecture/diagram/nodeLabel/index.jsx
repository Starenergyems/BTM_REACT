import ScopeStyle from "./indexStyle";

function NodeLabel({ children, label, labelStyle }) {
  return (
    <ScopeStyle $label={label} $labelStyle={labelStyle}>
      {children}
    </ScopeStyle>
  );
}

export default NodeLabel;
