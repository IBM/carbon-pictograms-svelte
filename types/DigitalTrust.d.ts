/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DigitalTrustProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DigitalTrust extends SvelteComponentTyped<
  DigitalTrustProps,
  {},
  {}
> {}
