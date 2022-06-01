---
style: "font-size: 107%"
---

## Et pour les autres langages/écosystèmes&nbsp;?

Plutôt simple à mettre en œuvre et globalement supporté côté serveur. **Côté client, c'est une autre histoire**&nbsp;:

<sequential-entrance fromRight>

- Python <icon-park-outline-confounded-face class="confounded" />&nbsp;: Rien trouvé sur le [client natif](https://docs.python.org/3/library/http.client.html), [article de alwaysdata sur une implem' maison](https://blog.alwaysdata.com/fr/2018/07/25/le-cache-http/) ou sur [OpenStack&nbsp;– HTTP Caching and Proxy Behavior](https://specs.openstack.org/openstack/api-wg/guidelines/http/caching.html),
- NodeJS <icon-park-outline-neutral-face class="neutral"/>&nbsp;: Non natif (cf. [GitHub NodeJS&nbsp;– issue #6790](https://github.com/nodejs/node/issues/6790), à suivre [GitHub Undici&nbsp;– issue #1146](https://github.com/nodejs/undici/issues/1146)), librairies [adobe/helix-fetch](https://github.com/adobe/helix-fetch), [cacheable-request](https://github.com/jaredwray/cacheable-request), [kornelski/http-cache-semantics](https://github.com/kornelski/http-cache-semantics) ou encore [natemoo-re/ultrafetch <icon-park-outline-sleep class="discrete" />](https://github.com/natemoo-re/ultrafetch),
- Ruby <icon-park-outline-confused-face class="confused" />&nbsp;: Non natif, [CacheRules <icon-park-outline-sleep class="discrete" />](https://github.com/aw/CacheRules),
- Go <icon-park-outline-confused-face class="confused" />&nbsp;: Non natif, librairies [gregjones/httpcache <icon-park-outline-sleep class="discrete" />](https://github.com/gregjones/httpcache), [bxcodec/httpcache <icon-park-outline-sleep class="discrete" />](https://github.com/bxcodec/httpcache) ou [victorspringer/http-cache <icon-park-outline-sleep class="discrete" />](https://github.com/victorspringer/http-cache),
- PHP <icon-park-outline-neutral-face class="neutral" />&nbsp;: Non natif, [plugin existant pour php-http](https://docs.php-http.org/en/latest/plugins/cache.html) ou [amphp/http-client-cache  <icon-park-outline-sleep class="discrete" />](https://github.com/amphp/http-client-cache),
- C/C++ <icon-park-outline-confounded-face class="confounded" />&nbsp;: Non natif, rien trouvé de vraiment concluant, voir [Stack Overflow&nbsp;– C++ Networking library supporting response caching](https://stackoverflow.com/questions/15965888/c-networking-library-supporting-response-caching),
- Rust <icon-park-outline-neutral-face class="neutral" />&nbsp;: Non natif, mais [quelques implémentations intéressantes](https://users.rust-lang.org/t/http-client-with-cache/17459/7) dont [Screwtapello/static_http_cache <icon-park-outline-sleep class="discrete" />](https://gitlab.com/Screwtapello/static_http_cache) ou [kornelski/rusty-http-cache-semantics](https://github.com/kornelski/rusty-http-cache-semantics),
- .Net <icon-park-outline-neutral-face class="neutral" />&nbsp;: Non natif (cf. [GitHub DotNet Runtime&nbsp;– issue #1384](https://github.com/dotnet/runtime/issues/1384)), librairies [thomasgalliker/HttpClient.Caching](https://github.com/thomasgalliker/HttpClient.Caching) et [aliostad/CacheCow](https://github.com/aliostad/CacheCow).

</sequential-entrance>