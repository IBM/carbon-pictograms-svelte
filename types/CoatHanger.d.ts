/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CoatHangerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CoatHanger extends SvelteComponentTyped<
  CoatHangerProps,
  {},
  {}
> {}
