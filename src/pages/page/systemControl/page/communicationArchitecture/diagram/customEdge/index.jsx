import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function CustomEdge({
  data,
  id,
  markerEnd,
  sourceX,
  sourceY,
  style = {},
  targetX,
  targetY,
}) {
  const { generateCustomEdgePath } = useHelpers();
  const path = generateCustomEdgePath(sourceX, sourceY, targetX, targetY, data);

  return (
    <ScopeStyle>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEnd}
      />
    </ScopeStyle>
  );
}

export default CustomEdge;
