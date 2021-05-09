/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SoftlayerEnablementProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SoftlayerEnablement extends SvelteComponentTyped<
  SoftlayerEnablementProps,
  {},
  {}
> {}