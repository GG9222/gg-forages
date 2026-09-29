# Site web — GG Forages

Site statique (HTML + CSS), sans cadriciel ni étape de compilation. Inspiré de la structure de Geotech Drilling et MATECO, et des couleurs de Forages S.L. (marine foncé + ambre).

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : coupe de forage illustrée, spécialités, équipement, types d'ouvrages, régions, sécurité |
| `forage-geotechnique.html` | SPT, tarière évidée, carottage du roc, Shelby/scissomètre, piézomètres |
| `forage-environnemental.html` | Échantillonnage de sols, puits d'observation, développement, accès restreint, déblais |
| `equipement.html` | Une fiche par foreuse |
| `a-propos.html` | Histoire, équipe, santé-sécurité, carrières |
| `soumission.html` | Formulaire de soumission / contact (Loi 25) |
| `merci.html` | Page affichée après l'envoi du formulaire |
| `confidentialite.html` | Politique de confidentialité (gabarit) |

## Voir le site en local

```bash
python3 -m http.server 8080
```

Puis ouvrir http://localhost:8080.

## Ce qu'il reste à remplir

**Tout texte surligné en jaune rayé est à remplacer.** Dans le code, ces textes portent la classe `ph`. Une fois le vrai contenu en place, retirer la classe `ph`.

Pour retrouver tout ce qui reste :

```bash
grep -n 'ph"' *.html
```

Les éléments à obtenir de Gicy :

1. **Nom légal de l'entreprise.** « GG Forages » vient du nom du dossier, à confirmer. Le nom apparaît dans le logo, les titres et le pied de page.
2. **Coordonnées** : téléphone, courriel, adresse, numéro RBQ. Remplacer aussi `tel:+15550000000` et `mailto:info@exemple.ca` dans les liens.
3. **Régions desservies** et ville du siège.
4. **Chiffres** : années d'expérience, nombre de foreuses, profondeur maximale.
5. **Foreuses** : marque, modèle, profondeur, méthodes, dimensions d'accès.
6. **Équipe** : noms, rôles, portraits.
7. **Certifications et assurances.**
8. **Photos** (voir plus bas).

## À confirmer avec Gicy

Ces éléments viennent de ma connaissance générale du métier, pas de Gicy :

- **Les listes de services** sur les deux pages de services. Retirer tout ce que l'entreprise ne fait pas.
- **Les normes citées** : ASTM D1586 (SPT), D1587 (Shelby), D2113 (carottage). Les retirer si elles ne correspondent pas aux pratiques de l'entreprise.
- **Les calibres de carottage** (NQ, HQ) et les méthodes environnementales, marqués comme à préciser.
- **Les types d'ouvrages** listés sur l'accueil.
- **Les promesses de service** : soumission sous 48 h, localisation des services souterrains, décontamination entre les forages, etc.

## Photos

Chaque bloc « PHOTO À FOURNIR » est une `<div class="photo">`. Pour y mettre une vraie photo, ajouter une image à l'intérieur :

```html
<div class="photo">
  <img src="img/foreuse-chenilles.jpg" alt="Foreuse sur chenilles sur un chantier à Laval">
</div>
```

(la ligne `<span class="photo-label">` peut être supprimée). Format conseillé : JPEG de 1600 px de large, moins de 400 Ko.

Les photos les plus utiles : les foreuses en action, des carottes de roc en caisse, l'installation d'un puits, Gicy et l'équipe sur un chantier.

## Mise en ligne

Le plus simple est **Netlify** (gratuit pour ce volume) :

1. Glisser-déposer le dossier sur https://app.netlify.com/drop.
2. Le formulaire fonctionne tout seul grâce à l'attribut `data-netlify="true"`. Les demandes arrivent dans le tableau de bord Netlify, et on peut les faire suivre par courriel (Paramètres du site → Forms → Notifications).
3. Brancher le nom de domaine (ex. ggforages.ca).

Sur un autre hébergeur (Cloudflare Pages, GitHub Pages), le formulaire nécessite un service externe comme Formspree. Il faut alors changer l'attribut `action` du `<form>` dans `soumission.html`.

**À vérifier sur Netlify.** Selon le forfait, les pièces jointes du formulaire (plans) peuvent être limitées en taille.

## Modifier le menu ou le pied de page

L'en-tête et le pied de page sont copiés dans chaque page. Pour changer un lien du menu, il faut le modifier dans les 8 fichiers `.html` (recherche-remplacement dans l'éditeur).

## Avant la mise en ligne

- [ ] Retirer la ligne `<meta name="robots" content="noindex">` de chaque page (sauf `merci.html`) pour que Google indexe le site
- [ ] Remplir tous les textes surlignés (`grep -n 'ph"' *.html` ne doit plus rien retourner)
- [ ] Mettre à jour le bloc `application/ld+json` dans `index.html` (nom, adresse, téléphone, régions)
- [ ] Faire relire la politique de confidentialité et nommer le responsable des renseignements personnels
- [ ] Tester le formulaire une fois en ligne
