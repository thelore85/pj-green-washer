import React from 'react'

type BodyCanvasProps = {
  layout?: 'center'
  children: React.ReactNode
}

export default function BodyCanvas({ children, layout }: BodyCanvasProps) {
  if (layout) {
    return <div className="flex h-full items-center overflow-auto p-4 md:py-10">{children}</div>
  }
  return <div className="flex-1 overflow-auto p-4 md:py-10">{children}</div>
}
