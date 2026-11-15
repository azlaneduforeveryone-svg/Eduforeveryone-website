import type { ComponentType } from "react";

// Registry of interactive 3D / simulation models for Biology topics.
// Keyed by topic.model from lib/courses/biologySyllabus.ts.
// Example: "animal-cell": dynamic(() => import("./AnimalCellModel"), { ssr: false })
export const BIOLOGY_MODELS: Record<string, ComponentType> = {};
