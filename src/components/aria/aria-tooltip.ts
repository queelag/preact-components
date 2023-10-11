import type { AriaTooltipArrowProps, AriaTooltipContentProps, AriaTooltipProps, AriaTooltipTriggerProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type {
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap,
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
} from '@aracna/web'
import {
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipElement,
  AriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'

export const AracnaAriaTooltip: ElementComponent<AriaTooltipElement, AriaTooltipProps> = createBaseElementComponent<
  AriaTooltipElement,
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap
>('aracna-aria-tooltip', AriaTooltipElement)

export const AracnaAriaTooltipArrow: ElementComponent<AriaTooltipArrowElement, AriaTooltipArrowProps> = createBaseElementComponent<
  AriaTooltipArrowElement,
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap
>('aracna-aria-tooltip-arrow', AriaTooltipArrowElement)

export const AracnaAriaTooltipContent: ElementComponent<AriaTooltipContentElement, AriaTooltipContentProps> = createFloatingElementComponent<
  AriaTooltipContentElement,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap
>('aracna-aria-tooltip-content', AriaTooltipContentElement)

export const AracnaAriaTooltipTrigger: ElementComponent<AriaTooltipTriggerElement, AriaTooltipTriggerProps> = createBaseElementComponent<
  AriaTooltipTriggerElement,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
>('aracna-aria-tooltip-trigger', AriaTooltipTriggerElement)
