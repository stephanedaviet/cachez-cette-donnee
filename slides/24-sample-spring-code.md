## Vite fait bien fait côté serveur avec Spring Web

```java {all|5|6|8|9-14|10|11|12|13|16-20|17-19|all}
public <T> ResponseEntity<T> checkCacheOrAnswer(Class<? extends Object> objectType,
        String objectName,
        WebRequest webRequest,
        Supplier<T> noCacheSupplier) {
    long lastModified = getLastModifiedFor(objectType, objectName);
    String eTag = getETagFor(objectType, objectName);

    if (webRequest.checkNotModified(lastModified, eTag)) {
        return ResponseEntity
                .status(HttpStatus.NOT_MODIFIED)
                .cacheControl(CacheControl.maxAge(0, TimeUnit.SECONDS).cachePrivate().mustRevalidate())
                .lastModified(lastModified)
                .eTag(eTag)
                .build();
    }
    return ResponseEntity.ok()
            .cacheControl(CacheControl.maxAge(0, TimeUnit.SECONDS).cachePrivate().mustRevalidate())
            .lastModified(lastModified)
            .eTag(eTag)
            .body(noCacheSupplier.get());
}
```