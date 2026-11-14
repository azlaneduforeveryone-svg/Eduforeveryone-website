// Types for O Level Accounting flashcards and topic maps.
// Kept separate from the data file so client components can import the
// types without pulling the data into the client bundle.

export interface RevisionFlashcard {
  front: string;
  back: string;
  tag?: string;
}

export interface RevisionMindMapBranch {
  label: string;
  items: string[];
}

export interface RevisionMindMap {
  centre: string;
  branches: RevisionMindMapBranch[];
}

export interface TopicRevision {
  mindMap: RevisionMindMap;
  flashcards: RevisionFlashcard[];
}
