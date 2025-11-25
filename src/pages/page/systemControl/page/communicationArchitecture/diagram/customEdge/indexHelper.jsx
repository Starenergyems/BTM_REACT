function useHelpers() {
  //ReactFlow的CustomEdges所需產生客製化線的走向的路徑
  function generateCustomEdgePath(
    sourceX,
    sourceY,
    targetX,
    targetY,
    data = {}
  ) {
    // 根據 data 中自訂的 type 來決定不同折線
    switch (data.pathType) {
      case "custom": {
        // 根據 data 中自訂的 pathValue 來決折線路徑
        return typeof data.pathValue === "function"
          ? data.pathValue(sourceX, sourceY, targetX, targetY)
          : `M${sourceX},${sourceY} L${targetX},${targetY}`;
      }
      default:
        // 預設是直線
        return `M${sourceX},${sourceY} L${targetX},${targetY}`;
    }
  }

  return { generateCustomEdgePath };
}

export { useHelpers };
