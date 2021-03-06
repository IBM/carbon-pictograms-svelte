/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollaborationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Collaboration extends SvelteComponentTyped<
  CollaborationProps,
  {},
  {}
> {}
