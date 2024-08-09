import { createBaseElementComponent, createFloatingElementComponent } from '@aracna/react'
import type { ElementComponent } from '@aracna/react'
import type {
  AracnaAracnaAriaMenuProps,
  AracnaAracnaAriaMenuButtonProps,
  AracnaAracnaAriaMenuItemProps,
  AracnaAracnaAriaMenuSubMenuProps
} from '../../definitions/props.js'
import type {
  AracnaAriaMenuElementAttributes,
  AracnaAriaMenuElementEventMap,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
} from '@aracna/web-components'
import {
  AracnaAriaMenuElement,
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuItemElement,
  AracnaAriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element'

export const AracnaAracnaAriaMenu: ElementComponent<AracnaAriaMenuElement, AracnaAracnaAriaMenuProps> = createBaseElementComponent<
  AracnaAriaMenuElement,
  AracnaAriaMenuElementAttributes<AracnaAriaMenuItemElement>,
  AracnaAriaMenuElementEventMap
>('aracna-aria-menu', AracnaAriaMenuElement)

export const AracnaAracnaAriaMenuButton: ElementComponent<AracnaAriaMenuButtonElement, AracnaAracnaAriaMenuButtonProps> = createBaseElementComponent<
  AracnaAriaMenuButtonElement,
  AracnaAriaMenuButtonElementAttributes,
  AracnaAriaMenuButtonElementEventMap
>('aracna-aria-menu-button', AracnaAriaMenuButtonElement)

export const AracnaAracnaAriaMenuItem: ElementComponent<AracnaAriaMenuItemElement, AracnaAracnaAriaMenuItemProps> = createBaseElementComponent<
  AracnaAriaMenuItemElement,
  AracnaAriaMenuItemElementAttributes,
  AracnaAriaMenuItemElementEventMap
>('aracna-aria-menu-item', AracnaAriaMenuItemElement)

export const AracnaAracnaAriaMenuSubMenu: ElementComponent<AracnaAriaMenuSubMenuElement, AracnaAracnaAriaMenuSubMenuProps> = createFloatingElementComponent<
  AracnaAriaMenuSubMenuElement,
  AracnaAriaMenuSubMenuElementAttributes,
  AracnaAriaMenuSubMenuElementEventMap
>('aracna-aria-menu-submenu', AracnaAriaMenuSubMenuElement)
