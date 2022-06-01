## `Last-Modified` & `If-Modified-Since`

t<sub>0</sub> **+ 90 min**

<img src="/Last-Modified-t0plus90.svg" style="width: 100%; margin: 0 auto" />

**Statut `304`** si `Last-Modified`&nbsp;≤&nbsp;`If-Modified-Since`.\
Toujours renvoyer les headers de cache, notamment `Cache-Control`, même avec un `304`.