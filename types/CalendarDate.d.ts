/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarDateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CalendarDate extends SvelteComponentTyped<
  CalendarDateProps,
  {},
  {}
> {}
