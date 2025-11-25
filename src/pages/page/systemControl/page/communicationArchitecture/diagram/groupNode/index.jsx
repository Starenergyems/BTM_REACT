import ScopeStyle from "./indexStyle";

function GroupNode({ data }) {
  return <ScopeStyle>{data.label}</ScopeStyle>;
}

export default GroupNode;
