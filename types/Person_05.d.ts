/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Person_05Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Person_05 extends SvelteComponentTyped<
  Person_05Props,
  {},
  {}
> {}
