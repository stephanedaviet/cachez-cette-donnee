## `Vary`

`Vary` décrit les parties de la requête autres que la méthode et l'URL qui ont une incidence sur le contenu de la réponse produite. Concrètement c'est une liste d'en-têtes HTTP.

<v-clicks>

- `Vary: *`&nbsp;: tout influe sur la réponse, implique que celle-ci ne peut être mise en cache,
- `Vary: Accept-Encoding, Accept, X-API-Version`&nbsp;: le format de réponse demandé et la version de l'API influent sur la réponse.

</v-clicks>

<v-click at="3">

[Smashing Magazine – Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)&nbsp;: article sur les subtilités d'interprétation de `Vary` dans les navigateurs.

</v-click>