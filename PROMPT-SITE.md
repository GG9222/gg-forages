# Prompt — Site web de l'entreprise de forage de Gicy

> Les éléments entre [crochets] sont à remplir avec Gicy avant de lancer le prompt.
> Tout ce qui n'est pas fourni doit rester un espace réservé visible, jamais inventé.

---

## Le prompt

Construis le site web complet d'une entreprise québécoise de forage spécialisée en **forage géotechnique et environnemental**.

**L'entreprise**
- Nom : [NOM DE L'ENTREPRISE]
- Fondée en : [ANNÉE] — Propriétaire : Gicy [NOM DE FAMILLE]
- Siège : [VILLE, QC] — Régions desservies : [ex. Montréal, Montérégie, Laurentides…]
- Licence RBQ : [NUMÉRO] — Autres certifications : [ex. ASP Construction, formation SIMDUT, etc.]
- Téléphone : [NUMÉRO] — Courriel : [COURRIEL]
- Clients visés : firmes de génie-conseil, laboratoires géotechniques, consultants en environnement, entrepreneurs généraux, municipalités.

**Objectif du site** : que l'ingénieur ou le chargé de projet qui cherche un foreur puisse, en moins d'une minute, vérifier que l'entreprise fait le type de forage dont il a besoin, dans sa région, avec l'équipement adapté — puis demander une soumission.

**Pages**
1. **Accueil** — promesse claire en une phrase, les deux spécialités, régions desservies, appel à l'action « Demander une soumission ».
2. **Forage géotechnique** — essais de pénétration standard (SPT), carottage au diamant (roc), tarière creuse, échantillonnage à la cuillère fendue et au tube à paroi mince, installation de piézomètres. [CONFIRMER LA LISTE AVEC GICY]
3. **Forage environnemental** — puits d'observation / de surveillance, échantillonnage de sols et d'eau souterraine, caractérisation (évaluation environnementale de site phase II), forage en accès restreint. [CONFIRMER LA LISTE AVEC GICY]
4. **Équipement** — fiche par foreuse : modèle, type (sur chenilles / camion / portative), profondeur max, diamètres, photo. [LISTE DES FOREUSES]
5. **À propos** — historique, équipe, engagement santé-sécurité (CNESST, programme de prévention).
6. **Soumission / Contact** — formulaire : nom, entreprise, courriel, téléphone, adresse du chantier, type de forage, nombre et profondeur des forages, échéancier, pièce jointe (plan de localisation). Carte des régions desservies.

**Contraintes**
- Français d'abord (Loi 96) ; version anglaise optionnelle en phase 2.
- Formulaire conforme à la Loi 25 : consentement explicite, lien vers une politique de confidentialité, responsable des renseignements personnels nommé.
- Site statique rapide (HTML/CSS ou Astro), aucun backend requis ; formulaire via un service type Formspree/Netlify Forms.
- Mobile d'abord : les clients consultent souvent depuis le chantier.
- SEO local : titres et descriptions par page, balisage schema.org `LocalBusiness`, mots-clés « forage géotechnique [région] », « forage environnemental [région] ».
- Accessibilité WCAG 2.1 AA (contrastes, navigation clavier, textes alternatifs).

**Direction visuelle**
- Industriel, sobre, crédible — pas d'esthétique « startup ». Inspiration : coupes stratigraphiques, carottes de roc, couleurs de terre et de sécurité (ex. anthracite, ocre/sable, un accent orange sécurité).
- Vraies photos de chantier et d'équipement en priorité ; espaces réservés clairement marqués en attendant.
- Typographie robuste et lisible ; pas de dégradés violets ni d'illustrations génériques.

**Livrables** : le code du site, un fichier README expliquant comment modifier les textes et photos, et la liste de tous les espaces réservés encore à remplir.
