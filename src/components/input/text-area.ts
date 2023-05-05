import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { TextAreaProps } from '@aracna/react'
import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import { TextAreaElement } from '@aracna/web-components/input/text-area'

export const AracnaTextArea: ElementComponent<TextAreaElement, TextAreaProps> = createFormFieldElementComponent<
  TextAreaElement,
  TextAreaElementAttributes,
  TextAreaElementEventMap
>('aracna-textarea', TextAreaElement)