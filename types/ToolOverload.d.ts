/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToolOverloadProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ToolOverload extends SvelteComponentTyped<
  ToolOverloadProps,
  {},
  {}
> {}
