import { createElementComponent, ElementComponent, MeterProps } from '@queelag/react'
import { MeterElement } from '@queelag/web-components/elements/feedback/meter.element'

export const QMeter: ElementComponent<MeterElement, MeterProps> = createElementComponent('q-meter', MeterElement)
