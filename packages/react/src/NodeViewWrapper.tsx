import React from 'react'

import { useReactNodeView } from './useReactNodeView'

export interface NodeViewWrapperProps {
  [key: string]: any,
  as?: React.ElementType,
}

export const NodeViewWrapper: React.FC<NodeViewWrapperProps> = React.forwardRef((props, ref) => {
  const { onDragStart } = useReactNodeView()
  
  const {
    as: Tag = 'div',
    ...attrs
  } = props

  return (
    <Tag
      {...attrs}
      ref={ref}
      data-node-view-wrapper=""
      onDragStart={onDragStart}
      style={{
        whiteSpace: 'normal',
        ...attrs.style,
      }}
    />
  )
})
