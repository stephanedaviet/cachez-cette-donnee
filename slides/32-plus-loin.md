---
style: "font-size: 135%"
---

## Pour combler les longues soirées d'hiver

<sequential-entrance fromRight>

- Les **weak & strong validators** pour les `Etag` (cf. [MDN&nbsp;– Conditional Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests)),
- Les **bundlers JS** pour _packager_ les ressources statiques front avec _hashing_ pour permettre le _long term caching_ (_cache busting_) et _chunking_ pour les libs communes (par exemple avec Webpack [Long Term Caching](https://github.com/webpack/docs/wiki/long-term-caching/) & [Split Chunk Plugin](https://webpack.js.org/plugins/split-chunks-plugin/)),
- Le cache dans les **<abbr title="Progressive Web Application">PWA</abbr>** avec l'utilisation des _ServiceWorker_ et de _CacheStorage API_ (avec [Google Workbox](https://developer.chrome.com/docs/workbox/) ou [MDN&nbsp;–Making PWAs work offline with Service workers](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers)),
- Les **ETag** avec les verbes `POST`, `PUT` ou `DELETE` et le **code HTTP `412`**, pour éviter les collisions en vol (_mid air collision_) pour l'intégrité des données, voir par exemple [Kenneth Lange&nbsp;– Avoid Data Corruption in Your REST API with ETags](https://www.kennethlange.com/avoid-data-corruption-in-your-rest-api-with-etags),
- Les **range requests** (cf. [MDN&nbsp;– HTTP range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests)),
- Les alternatives ou compléments au cache, comme le pattern pub/sub,
- L'industrialisation & l'utilisation de CDN SaaS ou «&nbsp;maison&nbsp;»,

</sequential-entrance>
