<div style="font-size: 80%">

## Vous saurez tout (ou presque) sur `Cache-Control`

<v-clicks>

- `max-age` & `s-maxage`&nbsp;: temps en secondes pendant lequel la ressource peut être considérée comme fraîche (_fresh_) respectivement par le client ou par un cache partagé (e.g. `max-age=86400`),
- `no-cache`&nbsp;: la ressource peut être mise en cache mais doit systématiquement être revalidée auprès du serveur avant usage, même déconnecté,
- `must-revalidate` & `proxy-revalidate`&nbsp;: la ressource peut être mise en cache et doit être revalidée auprès du serveur quand elle est en état _stale_, respectivement par le client ou par un cache partagé,
- `no-store`&nbsp;: la ressource ne doit pas être mise en cache,
- `private`&nbsp;: la ressource ne doit pas être mise en cache par des caches publics (caches partagés), utile notamment quand elle est spécifique à un utilisateur, `public` par défaut sauf si header `Authorization` présent.

</v-clicks>

<v-click at="6">

_Et quelques autres, voir <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"><abbr title="Mozilla Developer Network">MDN</abbr>&nbsp;– Web/HTTP/Headers/Cache-Control</a>._

</v-click>

</div>