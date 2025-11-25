function useHelpers({ reactFlowHooks }) {
  const { getNode, setCenter } = reactFlowHooks;

  function zoomToNode(
    nodeId,
    { isGroupType = false, offsetX = 0, offsetY = 0 }
  ) {
    const node = getNode(nodeId);
    if (node) {
      let zoomLevel = 1; // 放大倍率，1 是原始大小，越大越近
      const zoomDuration = 800; // 平滑動畫時間

      if (isGroupType) {
        setCenter(node.position.x + offsetX, node.position.y + offsetY, {
          zoom: 0.5,
          duration: zoomDuration,
        });
      } else {
        setCenter(
          node.position.x + node.width / 2 + offsetX,
          node.position.y + node.height / 2 + offsetY,
          {
            zoom: zoomLevel,
            duration: zoomDuration,
          }
        );
      }
    }
  }
  return { zoomToNode };
}

export { useHelpers };
