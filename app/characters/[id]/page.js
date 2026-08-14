import { notFound } from "next/navigation";
import CharacterDossier from "@/components/CharacterDossier";
import { characters, getCharacter, getRelatedCharacters } from "@/lib/characters";
import { getCharacterFormGroup } from "@/lib/characterExperience";

export function generateStaticParams() {
  return characters.map((character) => ({ id: character.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const character = getCharacter(id);
  if (!character) return {};
  return {
    title: `${character.name} | Ren’ō Kagenami Character Archive`,
    description: character.copy,
  };
}

export default async function CharacterProfilePage({ params }) {
  const { id } = await params;
  const character = getCharacter(id);
  if (!character) notFound();

  const currentIndex = characters.findIndex((entry) => entry.id === character.id);
  const explicitRelated = getRelatedCharacters(character.id);
  const related = explicitRelated.length
    ? explicitRelated.slice(0, 4)
    : [1, 2, 3, 4].map((offset) => characters[(currentIndex + offset) % characters.length]);

  const formGroup = getCharacterFormGroup(character.id);
  const forms = formGroup
    ? formGroup.members.map((formId) => getCharacter(formId)).filter(Boolean)
    : [character];

  return <CharacterDossier character={character} related={related} forms={forms} formGroup={formGroup} />;
}
