/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DockerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Docker extends SvelteComponentTyped<DockerProps, {}, {}> {}
