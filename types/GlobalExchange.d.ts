/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalExchangeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalExchange extends SvelteComponentTyped<
  GlobalExchangeProps,
  {},
  {}
> {}
