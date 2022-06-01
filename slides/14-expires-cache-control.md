<div style="font-size: 97%">

## `Expires` & `Cache-Control`

<v-clicks>

- `Expires` _(HTTP/1.0, 1996)_&nbsp;: Permet d'indiquer à partir de quand une ressource est à considérée comme expirée (ou _stale_ pour rassise), e.g. `Expires: Thu, 21 december 2012 00:00:00 GMT`.

- `Cache-Control` _(HTTP/1.1, 1997, surclasse `Expires` si les deux sont précisés)_&nbsp;:

  > Le header HTTP `Cache-Control` permet – que ce soit pour les requêtes ou pour les réponses – de contrôler la mise en cache dans les navigateurs et dans les caches partagés (e.g. Proxies, CDNs).
  > <footer>traduit depuis <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"><abbr title="Mozilla Developer Network">MDN</abbr>&nbsp;– Web/HTTP/Headers/Cache-Control</a></footer>

  Exemple&nbsp;: `cache-control: public, max-age=43200, must-revalidate`.

</v-clicks>

</div>