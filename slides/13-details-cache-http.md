## Levons le voile sur le cache HTTP

<v-click>

Un principe **éprouvé et très bien pensé** entre client & serveur, sur la base d'échanges d'_headers HTTP_.

</v-click>

<v-click>

Les headers qui mènent la danse&nbsp;:

- `Expires` & `Cache-Control`,
- `Last-Modified` & `If-Modified-Since`,
- `ETag` & `If-None-Match`,
- `Vary` & `Clear-Site-Data`.

</v-click>

<v-click at="3">

Pour plus de détails&nbsp;: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"><abbr title="Mozilla Developer Network">MDN</abbr>&nbsp;– HTTP Caching</a> et tous les détails [IETF&nbsp;– RFC2616 HTTP/1.1 – section 13](https://www.ietf.org/rfc/rfc2616.html#section-13) & [IETF&nbsp;– RFC7234 HTTP/1.1: Caching](https://www.ietf.org/rfc/rfc7234.html).

</v-click>