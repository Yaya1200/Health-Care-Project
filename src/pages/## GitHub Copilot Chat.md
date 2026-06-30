## GitHub Copilot Chat

- Extension: 0.53.1 (prod)
- VS Code: 1.125.1 (fcf604774b9f2674b473065736ee75077e256353)
- OS: win32 10.0.22621 x64
- GitHub Account: Yaya1200

## Network

User Settings:

```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: Error (1 ms): getaddrinfo ENOTFOUND api.github.com
- DNS ipv6 Lookup: timed out after 10 seconds
- Proxy URL: None (11 ms)
- Electron fetch (configured): Error (6084 ms): Error: net::ERR_NAME_NOT_RESOLVED
  at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10658)
  at SimpleURLLoaderWrapper.emit (node:events:509:28)
  {"is_request_error":true,"network_process_crashed":false}
- Node.js https: Error (17 ms): Error: getaddrinfo ENOTFOUND api.github.com
  at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
- Node.js fetch: Error (21 ms): TypeError: fetch failed
  Error: getaddrinfo ENOTFOUND api.github.com
  at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)

Connecting to https://api.githubcopilot.com/_ping:

- DNS ipv4 Lookup: Error (1 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- DNS ipv6 Lookup:
