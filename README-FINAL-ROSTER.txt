Ren'ō Kagenami Portfolio — Astra Character Roster Final Expansion

This focused patch builds on Character Experience Phase 1B + the Que and Patch corrections.

Adds full website dossiers for:
- Amaya — Moon Tide transformed form (5844.png corrected from the old Amara label)
- Mei
- Rei
- Eko
- Mokuzai
- Zélie
- The Hemal Leviathan
- Rangar (5865.png; replaces the obsolete Thirteen label)

Canon corrections preserved:
- 5867.png is Que; Vael'thryn is not a canon character and is not published.
- Patch is the visible character name. The internal route id remains patchbreaker to avoid breaking existing links.
- The Hemal Leviathan is distinct from the Sea Goddess Leviathan and from Hemovyr.
- Amaya base and Moon Tide transformation are connected as one transformation group.
- Rei and Mei are twins and Maven's apprentices.
- Eko is tied to Valentina and the classified Imperial experiment.
- Mokuzai is a living piece/memory of the World Tree created when the Red Warden cuts it down.

Also included:
- New character-specific transition themes for clinic, resonance, verdant memory, siren, and Hemal records.
- Expanded Connected Lore relationships.
- Expanded Notion dossier links for many established characters.
- Eight corrected/renamed roster portrait assets.

INSTALL
1. Extract this ZIP into D:\reno-kagenami-portfolio
2. Merge/replace matching files.
3. Run:
   cd /d D:\reno-kagenami-portfolio
   npm run build
4. If successful:
   git add lib/characters.js lib/characterExperience.js components/CharacterPortalLink.module.css public/images/astra-roster
   git commit -m "Complete Astra character roster and connected forms"
   git push

No new npm packages are required.
This patch does not replace app/globals.css or the cinematic homepage.
