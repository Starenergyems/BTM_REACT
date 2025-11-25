import { Handle, Position } from "reactflow";
import ScopteStyle from "./indexStyle";

const positionMap = {
  top: Position.Top,
  right: Position.Right,
  bottom: Position.Bottom,
  left: Position.Left,
};

// 定義各方向偏移量的 CSS 屬性
const offsetStyleMap = {
  top: (offset) => (offset ? { left: offset } : {}),
  bottom: (offset) => (offset ? { left: offset } : {}),
  left: (offset) => (offset ? { top: offset } : {}),
  right: (offset) => (offset ? { top: offset } : {}),
};

function CustomNode({ data }) {
  const { className, handles = {}, label } = data;

  return (
    <ScopteStyle draggable={false} className={className ?? ""}>
      {label}
      {(handles.source || []).map((handle, idx) => {
        const { dir, offset = 0 } = handle;
        const position = positionMap[dir];
        const style = offsetStyleMap[dir]?.(offset);
        return (
          <Handle
            key={`source-${dir}-${idx}`}
            type="source"
            position={position}
            id={`source-${dir}-${idx}`}
            style={style}
          />
        );
      })}
      {(handles.target || []).map((handle, idx) => {
        const { dir, offset = 0 } = handle;
        const position = positionMap[dir];
        const style = offsetStyleMap[dir]?.(offset);
        return (
          <Handle
            key={`target-${dir}-${idx}`}
            type="target"
            position={position}
            id={`target-${dir}-${idx}`}
            style={style}
          />
        );
      })}
    </ScopteStyle>
  );
}

export default CustomNode;
