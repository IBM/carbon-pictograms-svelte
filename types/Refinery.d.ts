/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RefineryProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Refinery extends SvelteComponentTyped<
  RefineryProps,
  {},
  {}
> {}
