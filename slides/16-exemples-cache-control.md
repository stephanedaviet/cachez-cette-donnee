## Quelques exemples d'usage

<v-clicks>

- Pour garder en cache pendant un an une ressource JavaScript versionnée, e.g. `react.18.1.0.production.min.js` (_cache busting_)&nbsp;: `Cache-Control: max-age=31536000, immutable`,
- Pour permettre la mise en cache de `index.html` mais obliger la revalidation auprès du serveur&nbsp;: `Cache-Control: no-cache`,
- Pour empêcher la mise en cache de ressources dynamiques, e.g. une métrique mesurée en continu&nbsp;: `Cache-Control: no-store`,
- Pour permettre la mise en cache d'informations spécifiques à un utilisateur, mais uniquement dans des caches non-partagés&nbsp;: `Cache-Control: private, max-age: 3600, must-revalidate`.

</v-clicks>