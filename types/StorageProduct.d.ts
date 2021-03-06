/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StorageProductProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class StorageProduct extends SvelteComponentTyped<
  StorageProductProps,
  {},
  {}
> {}
