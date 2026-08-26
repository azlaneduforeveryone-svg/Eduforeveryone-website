// lib/gmat/form.ts
import type { GmatForm, GmatSection, GmatSectionBank } from "./types";
import { QUANT_BANK } from "./quant";
import { VERBAL_BANK } from "./verbal";
import { DATA_INSIGHTS_BANK } from "./data-insights";

export const GMAT_FORM: GmatForm = {
  id: "focus-mock-1", title: "GMAT Focus — Full Mock", editsPerSection: 3,
  sections: [QUANT_BANK, VERBAL_BANK, DATA_INSIGHTS_BANK],
};

export const getBank = (s: GmatSection): GmatSectionBank =>
  GMAT_FORM.sections.find((x) => x.id === s)!;
