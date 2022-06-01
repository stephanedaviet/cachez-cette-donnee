---
style: "font-size: 141%"
---

## Envie d'un petit tour en sidecar&nbsp;?

<v-click>

_Sidecar container_ avec Kubernetes (également nommé _«&nbsp;companion&nbsp;»_)&nbsp;: permet, au sein d'un _pod_ Kubernetes, d'adjoindre à un conteneur existant un autre conteneur en charge d'assurer des **fonctions transverses** (monitoring, sécu, cache, etc.).

</v-click>

<v-click>

Permet d'**instrumenter simplement une application sans la modifier** pour lui apporter un cache en proximité.

</v-click>

<v-click>

Quelques solutions ou pistes de solutions existantes &nbsp;:
- explication du principe&nbsp;: [Hazelcast Sidecar Container Pattern](https://hazelcast.com/blog/hazelcast-sidecar-container-pattern/),
- sur la base d'Istio (Envoy++)&nbsp;: [Trendyol/sidecache](https://github.com/Trendyol/sidecache),
- le plus prometteur car intégré au cœur d'Envoy&nbsp;: [Envoy Cache Filter (pas encore _production ready_)](https://www.envoyproxy.io/docs/envoy/latest/start/sandboxes/cache.html).

</v-click>