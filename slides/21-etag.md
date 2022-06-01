<div style="font-size: 65%">

## `ETag` & `If-None-Match`

`ETag`&nbsp;∼&nbsp;Somme de hashage (_digest/checksum_) de la ressource.

> Typiquement, une valeur d'ETag peut être un hash du contenu, un hash du dernier timestamp de modification, ou juste un numero de révision.
> <footer>traduit depuis <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"><abbr title="Mozilla Developer Network">MDN</abbr> – Web/HTTP/Headers/Etag</a></footer>

<img src="/ETag.svg" style="width: 100%; margin: 0 auto" />

`If-None-Match` prioritaire à `If-Modified-Since` si les 2 sont présents.\
Plus coûteux à produire (mais peut être stocké), mais **plus fiable** (e.g. update/rollback de la ressource).

</div>