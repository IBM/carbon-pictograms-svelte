/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThreatManagementProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ThreatManagement extends SvelteComponentTyped<
  ThreatManagementProps,
  {},
  {}
> {}
