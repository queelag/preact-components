import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { AriaDisclosureProps, AriaDisclosureButtonProps, AriaDisclosurePanelProps, AriaDisclosureSectionProps } from '@aracna/react'
import type {
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
} from '@aracna/web'
import {
  AriaDisclosureElement,
  AriaDisclosureButtonElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/aria/aria-disclosure'

export const AracnaAriaDisclosure: ElementComponent<AriaDisclosureElement, AriaDisclosureProps> = createBaseElementComponent<
  AriaDisclosureElement,
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap
>('aracna-aria-disclosure', AriaDisclosureElement)

export const AracnaAriaDisclosureButton: ElementComponent<AriaDisclosureButtonElement, AriaDisclosureButtonProps> = createBaseElementComponent<
  AriaDisclosureButtonElement,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap
>('aracna-aria-disclosure-button', AriaDisclosureButtonElement)

export const AracnaAriaDisclosurePanel: ElementComponent<AriaDisclosurePanelElement, AriaDisclosurePanelProps> = createBaseElementComponent<
  AriaDisclosurePanelElement,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap
>('aracna-aria-disclosure-panel', AriaDisclosurePanelElement)

export const AracnaAriaDisclosureSection: ElementComponent<AriaDisclosureSectionElement, AriaDisclosureSectionProps> = createBaseElementComponent<
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
>('aracna-aria-disclosure-section', AriaDisclosureSectionElement)