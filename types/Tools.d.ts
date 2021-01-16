/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToolsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Tools extends SvelteComponentTyped<ToolsProps, {}, {}> {}
