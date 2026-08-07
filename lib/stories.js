import storiesData from "./stories.json";

export const stories = storiesData;
export const getStory = (id) => stories.find((story) => story.id === id);
export function getStoryEntries(story) {
  if (!story) return [];
  const entries = story.sections.flatMap((section) => section.chapters.map((chapter) => ({ ...chapter, section })));
  if (story.epilogue) entries.push({ ...story.epilogue, section: { id: "epilogue", label: "EPILOGUE", title: story.epilogue.title } });
  return entries;
}
export function getStoryEntry(story, chapterId) {
  return getStoryEntries(story).find((entry) => entry.id === chapterId);
}
