/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TemperatureHighProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TemperatureHigh extends SvelteComponentTyped<
  TemperatureHighProps,
  {},
  {}
> {}
