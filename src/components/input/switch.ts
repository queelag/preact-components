import { createBaseElementComponent, createFormFieldElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type { SwitchProps } from '@aracna/react'
import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import { SwitchElement } from '@aracna/web-components/input/switch'

export const AracnaSwitch: ElementComponent<SwitchElement, SwitchProps> = createFormFieldElementComponent<
  SwitchElement,
  SwitchElementAttributes,
  SwitchElementEventMap
>('aracna-switch', SwitchElement)