figma.showUI(__html__, {
  themeColors: true,
  height: 56,
  width: 182,
});

figma.ui.onmessage = (msg) => {
  let selectedNodes = figma.currentPage.selection;
  console.log(selectedNodes, "slected nodes is here");
  let actionType = msg.type;
  switch (actionType) {
    case "union":
      figma.union(selectedNodes, figma.currentPage);
      break;
    case "in":
      figma.intersect(selectedNodes, figma.currentPage);
      break;
    case "sub":
      figma.subtract(selectedNodes, figma.currentPage);
      break;
    case "ex":
      figma.exclude(selectedNodes, figma.currentPage);
      break;
  }

  if (msg.type === "rect") {
    const nodes = [];
    const gap = 40;

    // console.log(nodes, "my rectangles");

    // figma.group(nodes, figma.currentPage);

    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
  }
};
