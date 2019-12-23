import React from "react"

const BlockButton = React.forwardRef((props, ref) => {
  const { type, icon, value, hasBlock, onClickBlock, ...rest } = props;
  let isActive = hasBlock(type);
  if (["numbered-list", "bulleted-list"].includes(type)) {
    if (value && value.blocks.size > 0) {
      const parent = value.document.getParent(value.blocks.first().key);
      isActive = hasBlock("list-item") && parent && parent.type === type;
    }
  }

  if (["check-list"].includes(type)) {
    isActive = isActive || hasBlock("check-list-item");
  }

  return (
    <Button
      ref={ref}
      active={isActive}
      onMouseDown={event => onClickBlock(event, type)}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
});

export default BlockButton
