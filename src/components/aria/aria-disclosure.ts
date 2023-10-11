import type { AriaDisclosureButtonProps, AriaDisclosurePanelProps, AriaDisclosureProps, AriaDisclosureSectionProps, ElementComponent } from '@aracna/react'
import { createBaseElementComponent } from '@aracna/react'
import type {
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
} from '@aracna/web'
import {
  AriaDisclosureButtonElement,
  AriaDisclosureElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'

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
