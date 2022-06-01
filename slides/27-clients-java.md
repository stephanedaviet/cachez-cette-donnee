---
style: "font-size: 125%"
---

## Côté clients Java&nbsp;: quid des rfc2616/7234&nbsp;?

| Client                    | Support | Commentaire                          | Support induit                                           |
| ------------------------- | ------- | ------------------------------------ | -------------------------------------------------------- |
| Java HttpURLConnection    | Non <icon-park-outline-confused-face class="confused" /> | | |
| **Java HttpClient**           | Non <icon-park-outline-confused-face class="confused" /> | | |
| **Apache HttpClient**         | Oui <icon-park-outline-emotion-happy class="ok" /> | via `CachingHttpClientBuilder` | **Spring Rest Template**, RestEasy (Quarkus), Netflix Ribbon |
| **Apache HttpAsyncClient**    | Oui <icon-park-outline-emotion-happy class="ok" /> | via `CachingHttpAsyncClientBuilder` | |
| OkHttp                    | Oui <icon-park-outline-emotion-happy class="ok" /> | via `OkHttpClient.Builder().cache()` | Retrofit (Android) |
| Vert.x Web Client         | Oui <icon-park-outline-emotion-happy class="ok" /> | via `CachingWebClient.create` | |
| **Spring WebClient**          | Non <icon-park-outline-confused-face class="confused" /> | _Rien trouvé de probant à ce sujet_ | |
| Jetty HttpClient          | Non <icon-park-outline-confused-face class="confused" /> | | |
| **Akka HTTP**                 | Non <icon-park-outline-confused-face class="confused" /> | _Supporte un cache basique, non RFC_  | |
| Netty (Http2Client)       | Non <icon-park-outline-confused-face class="confused" /> | _Rien trouvé de probant à ce sujet_ | |
| AsyncHttpClient (AHC)     | (Oui) <icon-park-outline-confused-face class="confused" /> | _Ne semble plus trop maintenu_ | |

Pour d'autres critères&nbsp;: [MockLab – Which Java HTTP client should I use in 2020?](https://www.mocklab.io/blog/which-java-http-client-should-i-use-in-2020/#the-clients).