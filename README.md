# Site web : Les forages GG inc.

Site statique (HTML + CSS), sans cadriciel ni étape de compilation. Thème foncé et accent ambre inspirés de Forages S.L. ; structure inspirée de Geotech Drilling et MATECO.

Les coordonnées et la description viennent de la [page Facebook de l'entreprise](https://www.facebook.com/p/Les-forages-GG-inc-100054243698048/) : (514) 796-8321, ggforages@gmail.com, Montréal, « partout au Québec et même plus ».

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : spécialités, accès restreint, « Partout au Québec », rapport de forage, types d'ouvrages |
| `forage-geotechnique.html` | Méthodes géotechniques et livrables |
| `forage-environnemental.html` | Méthodes environnementales et contrôle de la qualité |
| `equipement.html` | Les foreuses, avec photos |
| `a-propos.html` | L'entreprise, santé et sécurité, emploi d'aide-foreur |
| `soumission.html` | Formulaire de soumission et contact (Loi 25) |
| `merci.html` | Page affichée après l'envoi du formulaire (Netlify) |
| `confidentialite.html` | Politique de confidentialité |

## Voir le site en local

```bash
python3 -m http.server 8080
```

Puis ouvrir http://localhost:8080.

## Photos et logo

`img/` contient 13 photos de chantier. Les plus nettes (bord de l'eau, lever de soleil, verglas, chantier urbain, neige, foreuse sur chenilles, remorque) ont été fournies directement. Les autres viennent de la page Facebook (960 px au maximum) : carottes de roc, station-service, forage intérieur et foreuse avec camion. Pour les remplacer par de meilleures versions, garder les mêmes noms de fichiers.

Le logo `logo-gg-clair.png` (pour fond foncé) et `logo-gg-fonce.png` (pour fond clair) sont tirés du logo original, avec fond transparent.

## À faire confirmer par Gicy

Le texte est rédigé à partir de la page Facebook et des pratiques courantes du métier. Ces points sont à valider :

- **Listes de méthodes** (SPT, tarière évidée, carottage, Shelby, scissomètre, piézomètres, puits, etc.) : retirer ce que l'entreprise ne fait pas.
- **Normes citées** : ASTM D1586, D2113, D1587, D2573.
- **Équipement** : les descriptions viennent de ce que montrent les photos (foreuse sur chenilles, foreuse compacte pour l'intérieur, forage en site éloigné).
- **Santé et sécurité** : les quatre pratiques listées sur la page À propos.
- **Emploi** : la section « On embauche un aide-foreur » reprend la publication Facebook du 7 septembre. La retirer quand le poste est pourvu.
- **Politique de confidentialité** : Gicy Girard est nommé responsable, et la durée de conservation est fixée à deux ans. Faire relire le texte.

## Formulaire de soumission

- **Sur GitHub Pages** (hébergement actuel), le serveur ne peut pas recevoir de formulaire. L'envoi ouvre donc le logiciel de courriel du visiteur avec une demande pré-rédigée à ggforages@gmail.com. Le champ de pièce jointe est masqué ; le visiteur joint son plan au courriel.
- **Sur Netlify**, le formulaire fonctionne tel quel (`data-netlify="true"`), avec pièce jointe. Les demandes arrivent dans le tableau de bord Netlify. Il faut alors retirer le petit script GitHub Pages en bas de `soumission.html`.

## Modifier le site

- **Textes** : directement dans les fichiers `.html`.
- **En-tête et pied de page** : ils sont copiés dans chaque page. Pour changer un lien du menu ou le téléphone, faire une recherche-remplacement dans les 8 fichiers `.html`.
- **Couleurs et typographie** : variables en haut de `css/style.css`.

## Avant le lancement officiel

- [ ] Retirer `<meta name="robots" content="noindex">` de chaque page (sauf `merci.html`) pour que Google indexe le site
- [ ] Faire valider les points de la section « À faire confirmer »
- [ ] Remplacer les photos par les originaux
- [ ] Tester l'envoi du formulaire une fois en ligne
- [ ] Brancher un nom de domaine (ex. forages-gg.ca)
