import { createBaseElementComponent, DividerProps, ElementComponent } from '@aracna/react'
import { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import { DividerElement } from '@aracna/web-components/elements/layout/divider.element'

export const AracnaDivider: ElementComponent<DividerElement, DividerProps> = createBaseElementComponent<
  DividerElement,
  DividerElementAttributes,
  DividerElementEventMap
>('aracna-divider', DividerElement)
