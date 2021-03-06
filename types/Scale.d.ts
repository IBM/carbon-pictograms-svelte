/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ScaleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Scale extends SvelteComponentTyped<ScaleProps, {}, {}> {}
