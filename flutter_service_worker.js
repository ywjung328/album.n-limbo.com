'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "87400e689a7119fc5846f0b062e47191",
".git/config": "22cfbadc1d61550f72cccf1ea4a4dd4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "559fd053d3855956916f820149f109fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d546fc8fb37c8d7200c78a2c70cea61",
".git/logs/refs/heads/master": "4d546fc8fb37c8d7200c78a2c70cea61",
".git/logs/refs/remotes/origin/master": "6fa96ad8d089d67faa9f5995247c1dc9",
".git/objects/01/9caa3956066ccfa87bb9e4ad979d1b86e4a537": "110b95355f7ee78d29e16be69413f40d",
".git/objects/03/f0c9b4fdf9c46cca4a633fec270448522dfe25": "64e0910518ae43394327389e809bf68d",
".git/objects/06/f8be1123a5f336dcd70510bd3265c7b9dff259": "75e4a46d0125a8e44da8b63ac009f8b6",
".git/objects/0d/20d4a6af2e938cb4cf1b6d5e9842151e3b92fd": "6c7ae01ececc48adca3b255d1a32d801",
".git/objects/10/e15ee2b1cf2761f9ec6ca8a7c1bcf8c53cf6c6": "f1298db248b9acaaf0efa0a2b9222c9e",
".git/objects/16/d1613883f00af4a2596c2ecf44eb13ca9b7bfe": "96b1dfcbcc3e763e1016ea150d6e2c61",
".git/objects/1a/50b616ea7f4e21eb46066bef60ccf1ba064bb2": "a91834b12810bf876b2d5918479a7e85",
".git/objects/1f/ecf2b2be7d1ea1e07057a5bb78f03e99af6934": "df798aa98f7cd7a7c7909572dd3d2e2a",
".git/objects/20/8569515de5972d34d6e3b3b5074300d1a091f2": "fe15a2e64e9ea98517cd21b70379254a",
".git/objects/21/1e6a20e61028d62c499917fc48cdf3bfb31a76": "90a691ad53a590efddd64826c9b1642b",
".git/objects/23/41ff3ab3c7e4d94c1ae92d865383fdf6bf7956": "113f7d503f07714b025328e5a66a88a1",
".git/objects/25/30caf27451a57293cbd288e1182a7cc0b2b53d": "767d653f6762e0df041ebd51341803a1",
".git/objects/29/52b0ff6a558596d4d9aaf944dd64ba4699b1d1": "0d7edd8e404942e59d4e83e162ed60de",
".git/objects/2a/c3b7ff54e2fc0094da6c691ce67cf68a072577": "88e0ab6665bd7b85c579db00227c9af7",
".git/objects/2c/3c7514053560ead357c6903df3519b5cd0fd62": "56cf59ea9708f79b6f7b853aebc3bcbd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/ec4fa10d1af84a6cdee81c497c93d45e7e1a72": "e1847190c1fe9f462597ff8c8b429cfc",
".git/objects/33/59826f89a437dd2d4a8b8d6599ce52e0800610": "a7643854ac05a74c0a0fa2994ee22d32",
".git/objects/35/19efab3bca8ed1a59e8a7fd5d34d996a29d40d": "7991c98cd72cdb57400b94f09a20a70e",
".git/objects/35/2bab4beeeca0a63d90d5e975b52462b1f3a620": "48174737720b9bcc657f0cc91bdc51e7",
".git/objects/38/537284134855ef9e039bc1e6efafde3d368336": "6238b5c223e623ed9e39bbccd6c07a85",
".git/objects/39/a498b16ed2ea90fc11c6fdd1795e7ef91e3771": "345247600cb614fcf11b2d5f7c7d00b6",
".git/objects/3c/6db39130b1618eb9696ea222599f6263e2d339": "7e2befdb438d73bbae0782827c9a251a",
".git/objects/3c/cee9ee570b2cc088ee70c8ee027df077ecb1af": "0755837290996f82be902ad316e5ba40",
".git/objects/3d/57e5da95d85777eba424fbc1de6e38e419b695": "3d5694706b49c2887de23dc9423be031",
".git/objects/41/4fcddcf2c82e2583b6ff0361a9c4189dee86e7": "4c71f2792adcb0d4d620f72ce967c6ac",
".git/objects/45/77020ae56ab13c5094394a518727d8e6bfe530": "9f9265bbe43a2b2d9eb9f311d4b8b3ec",
".git/objects/46/e2aebffeb4f79e457c3a6c000053b02b5ad784": "731f4969a2c82143a304d20796b81dc4",
".git/objects/4c/fd99d037757e1867b4d4eff302c8383484768f": "6d4895ed91e309822db6a7b1f3a89549",
".git/objects/4f/34028fe3e8407cd1ab4faf879189f57649ba76": "d78f19d6792203655ddedab415c6467b",
".git/objects/50/781e084d5fbfb674ba465a8f2a783c19cbbd38": "981d6eb2aec94bc24776fd493d4a79f1",
".git/objects/50/ce4e5bdb8a2f2b3737f4917d6ee0d20315456b": "bd7399a18cb853b31f8cdad29d760708",
".git/objects/53/773419af93dad731e173a0b5c8c095c783fea4": "a74c5274e554765851154ea14940b28c",
".git/objects/53/e78eed419415456c0c13693acef6ee451c4759": "fbc742ddbe2dfd2789202d73f7c93072",
".git/objects/54/5e4d1daf289e40964c745c3546b1e1db5ffc20": "05830a037f057f0db439de91e9beadec",
".git/objects/57/067d43be6968ea13f29cc5900615a5ae100d3d": "7f2bc05e68a86ae8a982d6cb60dedf1b",
".git/objects/58/025ab61372cf1a7db72da208aede48b4e30680": "e171905fa130a0a69fbfa16c6fc50891",
".git/objects/5b/3a35b23e9f706b6f87e57455aa0846ea4de1d0": "8658e5fc6853807002866ed1c91d1534",
".git/objects/64/0b581c63e8ee6c57f63097b1a543897f9c311a": "39b34109cbc9ad7b96c480578517558f",
".git/objects/6a/d77363a87453a3d0edc8367805d15b5fa168f7": "efc574dbad164c6ebb372166e2da8cf4",
".git/objects/6b/172cbcea3f4bc1fb82cf0ccd18c441248813b9": "e48eed9199aa252b3d1b6f6ed9c48bb0",
".git/objects/6c/9b8dd2ed59160c863b6f4dbfaa4c42ccc94419": "5399bbd389d8a60b4a061dbd39d33dff",
".git/objects/6c/dd90cb025982c7b26e0a259a87e4947bc062b0": "2a2732858484460cda83b9f12633548a",
".git/objects/6d/16ab56557ed8997905d12fb06fe6603604cd0f": "f967695170182b2b90e1a6be095baba1",
".git/objects/6d/81863a1a7c9f2ab0219ee42eb868610ffdcd9a": "81525a8a585c287b18d87eeaa626ba17",
".git/objects/6e/33ce0b8a31d66f2a1994ae558d25558d3febfc": "c24988af9fbc3e40b068485ad5277f37",
".git/objects/76/603716396ff81c961cbd030db77edaadf1587c": "febf9a731ee88f29df96c9098cb474ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b8ed211257c18e724b176786eccb64e9ff2cff": "f7e0c440bcfaa4753a9bb2c222f055e8",
".git/objects/86/f18f16d07bff1231ca04f1b6d4e30db8a29e5d": "5b788db429ad3dd20c7e81d83fbabdb1",
".git/objects/88/4cbc9c81d9e10c6418ac41f714c5960e9e3bb8": "1d1aa0d347594e8d2c616021ee25bc4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e62c8476150e4a58577df62dd837703cbc15bd": "f4bfed1b4b34e87d0bbec45bb0973cd6",
".git/objects/91/68d85d6116a93d00291259bbbfbf2437fdb213": "07743ac8da7dcadf7a908606e365571b",
".git/objects/92/70eb885ce109d5898ec64fbb21eb7e3915fe70": "1e9e8a75fbb9e4378450eb822a839c1b",
".git/objects/94/94adb6e330f527e6ce11647381bd7fd511789b": "6e3c34313a3266be9dd2da53f9fc4169",
".git/objects/97/2cf55d62d3dfbe487eec5a409f083ed1bafdfc": "ad59e38946638c5a583d63e2b368ade5",
".git/objects/a0/34bb0400fea70769211e4b04acf38bb7a799d6": "ce146f9291824df6cd749b47f0ca867a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/7ffb9417a31cb4f292d28a44fdd84be2d83477": "0b200c9cd7ae01df91e0b7ae16670f51",
".git/objects/a2/b1555859caba88e305581fe93bcec45229d5e8": "50c78ce5cd6f46df4b38e39da07df189",
".git/objects/a6/18d6696ad0d510039cd32a6eaf0b41b82a648e": "ec4339f4d36c78c46b09c665a176b8f0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/5ce21b527075fe2f3c8d993bc52993f7a2ee3f": "f46a23c3c8234e8717c952ede0c05d9b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/1c348fce1c58bbcb460cd6f577bfd1d50d8ce3": "eafceb4eaed6d8c10fc0cd5559b5fb77",
".git/objects/b7/0409dba24b18b7d89583678b526d2d98014345": "971cc140d29fe7003a7944e33c473b51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/6133cbb01e501608fe96aa6552cfab956a3e7a": "6a4528d11adc5d19d63542d04bed7236",
".git/objects/c1/858183fb15b89578e6a39b6819251e73db1cb0": "5ca3a5a2dc1ae5f12b6ef8e683df4cc5",
".git/objects/c6/e65aecc700c4d6bcc01ea40c2eba224ff29dce": "f07916a2895f4e60cc7f8162bbf81fae",
".git/objects/cd/ea222fab9bde26c1a68873a9f2ff4f62c3a0ba": "55c825ca3caa7d47e3b6eed2f800c3a5",
".git/objects/ce/d7b79014d6903c83e41ca9494ed598767f689f": "aade646500de3010e071d52e6671ee86",
".git/objects/d5/b94c6b0b3c81e7618459c42e076f189192887f": "c302095066f1ce8478cc0429b6b97054",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6d3b6222d7ea3c676e3bfb9cfa6c8c6ab5fee9": "ab5f504a5e6d3d7fc661f7dde5359a95",
".git/objects/db/3dad46992ac30caf9809cb0ded716235a26a86": "3df6e038423992d258b5ebbbfc171787",
".git/objects/db/f4becd87d9d97f075cb46750340e3c78067ffa": "87060867caa8aa81927038ab5292578a",
".git/objects/e4/f711403db964dfc4b4a2949148ddf07a176505": "8bac6d64016ec6c7d78712f3b7b63d0b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/9831bf048438317e043a50760bac9b3db40a09": "89083573c3a070c0dd2a4482a4073161",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/15bd35b566178f2a337858f416f627dbc38ae5": "684991a3b24ada2a1a5cedc467483195",
".git/objects/f4/f5092571076228a5297a7f76b01ec2c64bb7c5": "9503db2311c0928bbc5145bde0263636",
".git/objects/f6/1165dad558f779fb184b5443e073a8b4ee5c49": "9d94c643e1eab3d5747e6c38f49d562f",
".git/objects/f6/9688b9bfe71e066899932a7cdd73920952babc": "c0cd67a388862b2a94749626c6efb41e",
".git/objects/f8/0d66cc7a8a6a2277fe82f0d37f68bf73c23189": "9c5e00ab057a2803ea5a54dd3b54f3e3",
".git/objects/f8/19a4e59d6f5e04fca8a1e61eebf06ee28641e9": "7ec4f04395c6870628ded5c9469216ed",
".git/objects/fb/5da5b058a9f27c4f184b9b2bfb8b4c12370a04": "6a9898da6a05264ae222d66be27172f0",
".git/refs/heads/master": "a7cb7fe2b7338b238f1c3ecfb534bccf",
".git/refs/remotes/origin/master": "a7cb7fe2b7338b238f1c3ecfb534bccf",
"assets/AssetManifest.json": "5523ac8c3623a32af8ec33aac3587c18",
"assets/assets/fonts/GmarketSansTTFBold.ttf": "7cf85dc71a5acc06eb84b647fcab6103",
"assets/assets/fonts/GmarketSansTTFLight.ttf": "12bd3606ebae38deac6acbad730e4291",
"assets/assets/fonts/GmarketSansTTFMedium.ttf": "96b4a5b8dfa689a32dd322793d660298",
"assets/FontManifest.json": "252456e033a1fc13ab356929b4a78b4e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3538cffad05fed4ad830c5ebd00d2996",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "be409800e3fa444660aadb4cbe4551f6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c57e656d3f60b79688f34e5ca07b645a",
"/": "c57e656d3f60b79688f34e5ca07b645a",
"main.dart.js": "a495577ccb677b1def340ee99ebe615b",
"manifest.json": "3f0b81df0d8f1d2482f0f941a0b33f72",
"version.json": "8b85e464967ce08c784cd408da608e21"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
