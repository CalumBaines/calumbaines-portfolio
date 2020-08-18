importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "calum-baines-portfolio",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.721ba45c5bc317bf5ddf8c85a067edbc.css",
    "revision": "721ba45c5bc317bf5ddf8c85a067edbc"
  },
  {
    "url": "/_nuxt/app.99879bcf9222d0046111.js",
    "revision": "a99f74cfd99c7d6290efb640937f8513"
  },
  {
    "url": "/_nuxt/layouts/case-study.4b2b44d01dc2c25734e6.js",
    "revision": "df6a50466fa7fb87dc5b3db4a90ebeea"
  },
  {
    "url": "/_nuxt/layouts/default.19acb16392d4ff6dc134.js",
    "revision": "2a0dd0d08806f2f03be248760f345d74"
  },
  {
    "url": "/_nuxt/layouts/home.cc81b4f2364247bd54e7.js",
    "revision": "e1fd1012dc5d6978f8f1c423faa20a27"
  },
  {
    "url": "/_nuxt/manifest.bedad0fa76f5a052c85c.js",
    "revision": "f4a257780f7514938d36eb4140e1e5b9"
  },
  {
    "url": "/_nuxt/pages/about/index.4cb06a759711606b9373.js",
    "revision": "fa13c831d579aacfdac080b151b9fe88"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.ff59cd8ce8595428be6c.js",
    "revision": "9397557b8f01f40e220744b55e194d32"
  },
  {
    "url": "/_nuxt/pages/blog/index.bd427251a0bcfd55a51e.js",
    "revision": "81b301171d30922d49aeee58732ac6f2"
  },
  {
    "url": "/_nuxt/pages/case-studies/_slug.f3a398986208801d5901.js",
    "revision": "a00aa818777e838370feb603dbdeb1cc"
  },
  {
    "url": "/_nuxt/pages/case-studies/index.c1796873d098b68304d2.js",
    "revision": "f5cac00a28897a862501aa10336fe19b"
  },
  {
    "url": "/_nuxt/pages/contact/index.1445d2d398cc2164ada5.js",
    "revision": "39e257f395c9a60c74efcbb898517f9f"
  },
  {
    "url": "/_nuxt/pages/index.547715828ed5a7426806.js",
    "revision": "ff3aed7d7e7a213ecc96aabb1dc0e2dc"
  },
  {
    "url": "/_nuxt/vendor.aa50461abbbabdeb27df.js",
    "revision": "fc85fed5b9bd6a6f5460e1bf3e0656dc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp(''), workboxSW.strategies.cacheFirst({}), 'GET')

