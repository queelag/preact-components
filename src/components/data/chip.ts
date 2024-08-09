import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AracnaAracnaChipProps } from '../../definitions/props.js'
import type { AracnaChipElementAttributes, AracnaChipElementEventMap } from '@aracna/web-components'
import { AracnaChipElement } from '@aracna/web-components/elements/data/chip-element'

export const AracnaAracnaChip: ElementComponent<AracnaChipElement, AracnaAracnaChipProps> = createBaseElementComponent<
  AracnaChipElement,
  AracnaChipElementAttributes,
  AracnaChipElementEventMap
>('aracna-chip', AracnaChipElement)
