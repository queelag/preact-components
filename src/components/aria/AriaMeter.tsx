import { AriaMeterProps, createElementComponent, ElementComponent } from '@queelag/react'
import { AriaMeterElement } from '@queelag/web-components/elements/aria/aria.meter.element'

export const QAriaMeter: ElementComponent<AriaMeterElement, AriaMeterProps> = createElementComponent('q-aria-meter', AriaMeterElement)
