import { ResourceColumnRenderType } from '@/app/resource/types/ResourceColumnRenderType'
import React from 'react'

const RenderResourceYear: ResourceColumnRenderType = (year: string, info) => {
  const yearFallback = "-"

  return (
    <span>{year || yearFallback}</span>
  )
}

export default RenderResourceYear;
