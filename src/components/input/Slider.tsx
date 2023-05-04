import { createBaseElementComponent, createFormFieldElementComponent, ElementComponent, SliderProps, SliderThumbProps } from '@aracna/react'
import { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider.element'

export const AracnaSlider: ElementComponent<SliderElement, SliderProps> = createFormFieldElementComponent<
  SliderElement,
  SliderElementAttributes,
  SliderElementEventMap
>('aracna-slider', SliderElement)

export const AracnaSliderThumb: ElementComponent<SliderThumbElement, SliderThumbProps> = createBaseElementComponent<
  SliderThumbElement,
  SliderThumbElementAttributes,
  SliderThumbElementEventMap
>('aracna-slider-thumb', SliderThumbElement)
