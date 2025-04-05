// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dD2VF":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7f34b308004d2bb3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9sqBN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asianRecipes", ()=>asianRecipes);
parcelHelpers.export(exports, "spanishRecipes", ()=>spanishRecipes);
parcelHelpers.export(exports, "italianRecipes", ()=>italianRecipes);
parcelHelpers.export(exports, "frenchRecipes", ()=>frenchRecipes);
parcelHelpers.export(exports, "englishRecipes", ()=>englishRecipes);
var _imagesJs = require("./images.js");
const asianRecipes = [
    {
        name: "Sushi",
        country: "Japan",
        image: (0, _imagesJs.images).sushi,
        video: "https://www.youtube.com/embed/Fjdyw8Cvxbs?si=kWJZIDZySZQj8HJS",
        info: {
            prepTime: "35 minutos",
            cookTime: "25 minutos",
            totalTime: "2 horas",
            servings: "4 personas, 32 piezas (16 nigiris, 8 makis y 8 hosomakis)",
            category: "Plato principal",
            cuisine: "Japonesa",
            calories: "523 kcal por raci\xf3n"
        },
        ingredients: [
            "2 cups sushi rice",
            "2 cups water",
            "1/4 cup rice vinegar",
            "Nori sheets",
            "Your choice of fillings (fish, vegetables)"
        ],
        instructions: [
            "1. Cook sushi rice and mix with rice vinegar",
            "2. Place nori sheet on bamboo mat",
            "3. Spread rice evenly on nori",
            "4. Add fillings in the center",
            "5. Roll tightly using the bamboo mat",
            "6. Cut into 6-8 pieces"
        ]
    },
    {
        name: "Pad Thai",
        country: "Thailand",
        image: (0, _imagesJs.images).padthai,
        video: "https://www.youtube.com/embed/xWDwcDTQxs8?si=ilIeJfgwEPLncZPT",
        info: {
            prepTime: "20 minutos",
            cookTime: "15 minutos",
            totalTime: "35 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Tailandesa",
            calories: "450 kcal por raci\xf3n"
        },
        ingredients: [
            "400g fideos de arroz",
            "200g langostinos",
            "2 huevos",
            "100g brotes de soja",
            "50g cacahuetes triturados",
            "Salsa de pescado",
            "Tamarindo"
        ],
        instructions: [
            "1. Remojar los fideos en agua caliente",
            "2. Saltear los langostinos",
            "3. A\xf1adir los huevos y remover",
            "4. Incorporar fideos y salsas",
            "5. Agregar brotes y cacahuetes",
            "6. Servir con lima y cilantro"
        ]
    },
    {
        name: "Kung Pao Chicken",
        country: "China",
        image: (0, _imagesJs.images).kungpao,
        video: "https://www.youtube.com/embed/50VmOv5frIc?si=yJNVlX-KC5aMjQgR",
        info: {
            prepTime: "25 minutos",
            cookTime: "15 minutos",
            totalTime: "40 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "China",
            calories: "425 kcal por raci\xf3n"
        },
        ingredients: [
            "500g pollo en dados",
            "100g cacahuetes",
            "4 chiles secos",
            "Jengibre fresco",
            "3 dientes de ajo",
            "Salsa de soja",
            "Vinagre de arroz"
        ],
        instructions: [
            "1. Marinar el pollo con soja",
            "2. Calentar el wok",
            "3. Saltear chiles y arom\xe1ticos",
            "4. A\xf1adir el pollo",
            "5. Incorporar salsas",
            "6. Terminar con cacahuetes"
        ]
    },
    {
        name: "Bibimbap",
        country: "Korea",
        image: (0, _imagesJs.images).bibimbap,
        video: "https://www.youtube.com/embed/9kEm2B9_HBI?si=FfyiHvTCGYeQc8Xl",
        info: {
            prepTime: "30 minutos",
            cookTime: "20 minutos",
            totalTime: "50 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Coreana",
            calories: "480 kcal por raci\xf3n"
        },
        ingredients: [
            "300g arroz",
            "200g ternera picada",
            "100g brotes de soja",
            "100g espinacas",
            "2 zanahorias",
            "4 huevos",
            "Pasta de chile gochujang"
        ],
        instructions: [
            "1. Cocinar el arroz",
            "2. Preparar verduras por separado",
            "3. Saltear la carne marinada",
            "4. Fre\xedr los huevos",
            "5. Montar los boles con arroz",
            "6. Servir con gochujang"
        ]
    },
    {
        name: "Pho",
        country: "Vietnam",
        image: (0, _imagesJs.images).pho,
        video: "https://www.youtube.com/embed/lpu9y9L5g4Q?si=GmLQRB2H5bCix9X2",
        info: {
            prepTime: "30 minutos",
            cookTime: "6 horas",
            totalTime: "6 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Vietnamita",
            calories: "420 kcal por raci\xf3n"
        },
        ingredients: [
            "2kg huesos de ternera",
            "300g fideos de arroz",
            "200g brotes de soja",
            "Jengibre y canela",
            "Cilantro y albahaca",
            "Salsa hoisin",
            "Salsa sriracha"
        ],
        instructions: [
            "1. Preparar el caldo base",
            "2. Cocer los fideos",
            "3. Preparar las guarniciones",
            "4. Montar los boles",
            "5. A\xf1adir el caldo caliente",
            "6. Servir con hierbas frescas"
        ]
    }
];
const spanishRecipes = [
    {
        name: "Paella",
        country: "Spain",
        image: (0, _imagesJs.images).paella,
        video: "https://www.youtube.com/embed/vWySIREExjo?si=imJJ7DcNYj1cusvH",
        info: {
            prepTime: "30 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora 15 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Espa\xf1ola",
            calories: "580 kcal por raci\xf3n"
        },
        ingredients: [
            "400g arroz bomba",
            "1 sobre azafr\xe1n",
            "500g pollo troceado",
            "250g jud\xedas verdes",
            "1 pimiento rojo",
            "Caldo de pescado",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Sofre\xedr el pollo hasta dorarlo",
            "2. A\xf1adir verduras y sofre\xedr",
            "3. Incorporar el arroz y azafr\xe1n",
            "4. A\xf1adir el caldo caliente",
            "5. Cocinar 18-20 minutos",
            "6. Dejar reposar 5-10 minutos"
        ]
    },
    {
        name: "Gazpacho",
        country: "Spain",
        image: (0, _imagesJs.images).gazpacho,
        video: "https://www.youtube.com/embed/2XlvI-aNcsU?si=cnYWZpeqkS_JBxNd",
        info: {
            prepTime: "15 minutos",
            cookTime: "0 minutos",
            totalTime: "2 horas (incluye refrigeraci\xf3n)",
            servings: "4 personas",
            category: "Entrante",
            cuisine: "Espa\xf1ola",
            calories: "120 kcal por raci\xf3n"
        },
        ingredients: [
            "1kg tomates maduros",
            "1 pepino",
            "1 pimiento verde",
            "2 dientes de ajo",
            "Pan duro",
            "Aceite de oliva",
            "Vinagre de Jerez"
        ],
        instructions: [
            "1. Lavar y trocear las verduras",
            "2. Remojar el pan en agua",
            "3. Triturar todo junto",
            "4. A\xf1adir aceite y vinagre",
            "5. Colar si se desea",
            "6. Refrigerar antes de servir"
        ]
    },
    {
        name: "Croquetas",
        country: "Spain",
        image: (0, _imagesJs.images).croquetas,
        video: "https://www.youtube.com/embed/Bv3bPIJw8mc?si=Y5mRpeBH2p2FnzTW",
        info: {
            prepTime: "45 minutos",
            cookTime: "20 minutos",
            totalTime: "3 horas (incluye reposo)",
            servings: "6 personas",
            category: "Aperitivo",
            cuisine: "Espa\xf1ola",
            calories: "320 kcal por raci\xf3n"
        },
        ingredients: [
            "100g harina",
            "100g mantequilla",
            "1L leche",
            "Jam\xf3n serrano",
            "Nuez moscada",
            "Pan rallado",
            "Huevos para rebozar"
        ],
        instructions: [
            "1. Preparar la bechamel",
            "2. A\xf1adir el jam\xf3n picado",
            "3. Dejar enfriar la masa",
            "4. Formar las croquetas",
            "5. Rebozar en huevo y pan",
            "6. Fre\xedr hasta dorar"
        ]
    },
    {
        name: "Fabada Asturiana",
        country: "Spain",
        image: (0, _imagesJs.images).fabada,
        video: "https://www.youtube.com/embed/NvhuoE8ENGQ?si=lZr3nvtUWuxyqNR-",
        info: {
            prepTime: "12 horas remojo",
            cookTime: "3 horas",
            totalTime: "15 horas",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Espa\xf1ola",
            calories: "650 kcal por raci\xf3n"
        },
        ingredients: [
            "500g fabes",
            "200g chorizo",
            "200g morcilla",
            "250g panceta",
            "1 cebolla",
            "2 dientes de ajo",
            "Azafr\xe1n"
        ],
        instructions: [
            "1. Remojar las fabes",
            "2. Cocer a fuego lento",
            "3. A\xf1adir los embutidos",
            "4. Cocinar hasta que est\xe9n tiernas",
            "5. Ajustar el punto de sal",
            "6. Reposar antes de servir"
        ]
    },
    {
        name: "Pulpo a la Gallega",
        country: "Spain",
        image: (0, _imagesJs.images).pulpo,
        video: "https://www.youtube.com/embed/ZmwiwuJNtUM?si=omYOanj5XsfMgYsn",
        info: {
            prepTime: "15 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Espa\xf1ola",
            calories: "280 kcal por raci\xf3n"
        },
        ingredients: [
            "1.5kg pulpo",
            "1kg patatas",
            "Piment\xf3n dulce",
            "Piment\xf3n picante",
            "Aceite de oliva",
            "Sal gruesa",
            "Laurel"
        ],
        instructions: [
            "1. Ablandar el pulpo",
            "2. Cocer el pulpo",
            "3. Cocer las patatas",
            "4. Cortar el pulpo",
            "5. Emplatar con las patatas",
            "6. Ali\xf1ar y servir"
        ]
    }
];
const italianRecipes = [
    {
        name: "Espagueti Carbonara",
        country: "Italy",
        image: (0, _imagesJs.images).carbonara,
        video: "https://www.youtube.com/embed/6Oy5ITdDQ3o",
        info: {
            prepTime: "15 minutos",
            cookTime: "20 minutos",
            totalTime: "35 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "650 kcal por raci\xf3n"
        },
        ingredients: [
            "400g espaguetis",
            "200g guanciale o panceta",
            "4 yemas de huevo",
            "100g queso pecorino romano",
            "50g queso parmesano",
            "Pimienta negra reci\xe9n molida"
        ],
        instructions: [
            "1. Cocer la pasta en agua con sal",
            "2. Dorar el guanciale cortado en tiras",
            "3. Mezclar yemas, quesos y pimienta",
            "4. A\xf1adir pasta al guanciale",
            "5. Incorporar la mezcla de huevo fuera del fuego",
            "6. Servir inmediatamente con m\xe1s queso y pimienta"
        ]
    },
    {
        name: "Pizza Margherita",
        country: "Italy",
        image: (0, _imagesJs.images).pizza,
        video: "https://www.youtube.com/embed/lDCxRKtRwXw?si=LNrEJaD2TxbOTafn",
        info: {
            prepTime: "2 horas",
            cookTime: "15 minutos",
            totalTime: "2 horas 15 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "266 kcal por porci\xf3n"
        },
        ingredients: [
            "500g harina de fuerza",
            "300ml agua tibia",
            "7g levadura seca",
            "400g tomate triturado",
            "250g mozzarella fresca",
            "Albahaca fresca",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Preparar la masa y dejar reposar",
            "2. Extender en forma circular",
            "3. Cubrir con salsa de tomate",
            "4. A\xf1adir mozzarella",
            "5. Hornear a 250\xb0C",
            "6. Decorar con albahaca fresca"
        ]
    },
    {
        name: "Risotto ai Funghi",
        country: "Italy",
        image: (0, _imagesJs.images).risotto,
        video: "https://www.youtube.com/embed/VOBLOLQx0jE",
        info: {
            prepTime: "15 minutos",
            cookTime: "30 minutos",
            totalTime: "45 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "420 kcal por raci\xf3n"
        },
        ingredients: [
            "320g arroz arborio",
            "400g setas variadas",
            "1 cebolla",
            "Vino blanco",
            "Caldo de verduras",
            "Parmesano rallado",
            "Mantequilla"
        ],
        instructions: [
            "1. Sofre\xedr la cebolla",
            "2. A\xf1adir el arroz y tostar",
            "3. Agregar vino blanco",
            "4. Ir a\xf1adiendo caldo poco a poco",
            "5. Incorporar las setas",
            "6. Mantecato final con queso y mantequilla"
        ]
    },
    {
        name: "Lasagna alla Bolognese",
        country: "Italy",
        image: (0, _imagesJs.images).lasagna,
        video: "https://www.youtube.com/watch?v=s_FLKOlGQ4c",
        info: {
            prepTime: "45 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 45 minutos",
            servings: "8 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "585 kcal por raci\xf3n"
        },
        ingredients: [
            "L\xe1minas de lasa\xf1a",
            "500g carne picada",
            "Salsa bechamel",
            "Salsa de tomate",
            "Cebolla y zanahoria",
            "Queso parmesano",
            "Vino tinto"
        ],
        instructions: [
            "1. Preparar la salsa bolo\xf1esa",
            "2. Hacer la bechamel",
            "3. Montar capas de pasta",
            "4. Alternar salsas y queso",
            "5. Hornear 45 minutos",
            "6. Reposar antes de servir"
        ]
    },
    {
        name: "Tiramis\xfa",
        country: "Italy",
        image: (0, _imagesJs.images).tiramisu,
        video: "https://www.youtube.com/watch?v=Z2ql_eRRAtQ",
        info: {
            prepTime: "30 minutos",
            cookTime: "0 minutos",
            totalTime: "4 horas (incluye refrigeraci\xf3n)",
            servings: "8 personas",
            category: "Postre",
            cuisine: "Italiana",
            calories: "350 kcal por raci\xf3n"
        },
        ingredients: [
            "500g mascarpone",
            "Bizcochos savoiardi",
            "4 huevos",
            "Caf\xe9 espresso",
            "Cacao en polvo",
            "Az\xfacar",
            "Marsala (opcional)"
        ],
        instructions: [
            "1. Separar yemas y claras",
            "2. Montar claras a punto de nieve",
            "3. Mezclar yemas con mascarpone",
            "4. Mojar bizcochos en caf\xe9",
            "5. Montar capas alternadas",
            "6. Refrigerar 4 horas m\xednimo"
        ]
    }
];
const frenchRecipes = [
    {
        name: "Coq au Vin",
        country: "France",
        image: (0, _imagesJs.images).coqauvin,
        video: "https://www.youtube.com/embed/2QuVUjCyWbU",
        info: {
            prepTime: "30 minutos",
            cookTime: "2 horas",
            totalTime: "2 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Francesa",
            calories: "450 kcal por raci\xf3n"
        },
        ingredients: [
            "1 pollo entero troceado",
            "750ml vino tinto",
            "200g champi\xf1ones",
            "200g cebollitas",
            "150g panceta",
            "2 zanahorias",
            "Hierbas arom\xe1ticas"
        ],
        instructions: [
            "1. Marinar el pollo en vino la noche anterior",
            "2. Dorar la panceta y reservar",
            "3. Dorar el pollo escurrido",
            "4. A\xf1adir verduras y cocinar",
            "5. Incorporar el vino y cocinar a fuego lento",
            "6. Servir con pur\xe9 de patatas"
        ]
    },
    {
        name: "Ratatouille",
        country: "France",
        image: (0, _imagesJs.images).ratatouille,
        video: "https://www.youtube.com/embed/BQiQoAQdZCc",
        info: {
            prepTime: "30 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Francesa",
            calories: "158 kcal por raci\xf3n"
        },
        ingredients: [
            "2 berenjenas",
            "4 calabacines",
            "2 pimientos",
            "6 tomates",
            "2 cebollas",
            "Hierbas provenzales",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Cortar todas las verduras",
            "2. Saltear por separado",
            "3. Preparar salsa de tomate",
            "4. Combinar todo",
            "5. Cocinar a fuego lento",
            "6. Servir caliente o templado"
        ]
    },
    {
        name: "Cr\xe8me Br\xfbl\xe9e",
        country: "France",
        image: (0, _imagesJs.images).cremebrulee,
        video: "https://www.youtube.com/watch?v=jqDAwUhEosY",
        info: {
            prepTime: "20 minutos",
            cookTime: "35 minutos",
            totalTime: "55 minutos",
            servings: "6 personas",
            category: "Postre",
            cuisine: "Francesa",
            calories: "290 kcal por raci\xf3n"
        },
        ingredients: [
            "500ml nata l\xedquida",
            "1 vaina de vainilla",
            "5 yemas de huevo",
            "100g az\xfacar",
            "Az\xfacar para caramelizar",
            "Sal",
            "Agua"
        ],
        instructions: [
            "1. Infusionar la nata",
            "2. Mezclar yemas y az\xfacar",
            "3. Combinar con la nata",
            "4. Hornear al ba\xf1o mar\xeda",
            "5. Enfriar completamente",
            "6. Caramelizar y servir"
        ]
    },
    {
        name: "Quiche Lorraine",
        country: "France",
        image: (0, _imagesJs.images).quiche,
        video: "https://www.youtube.com/watch?v=h6gD-UkrQSU",
        info: {
            prepTime: "25 minutos",
            cookTime: "40 minutos",
            totalTime: "1 hora 5 minutos",
            servings: "8 personas",
            category: "Entrante",
            cuisine: "Francesa",
            calories: "380 kcal por raci\xf3n"
        },
        ingredients: [
            "Masa quebrada",
            "200g bacon",
            "4 huevos",
            "300ml nata l\xedquida",
            "150g queso gruy\xe8re",
            "Nuez moscada",
            "Pimienta"
        ],
        instructions: [
            "1. Forrar molde con masa",
            "2. Dorar el bacon",
            "3. Batir huevos con nata",
            "4. A\xf1adir queso y bacon",
            "5. Hornear 35-40 minutos",
            "6. Dejar templar antes de servir"
        ]
    },
    {
        name: "Soupe \xe0 l'Oignon",
        country: "France",
        image: (0, _imagesJs.images).onionsoup,
        video: "https://www.youtube.com/watch?v=Yre4UzPFZpw",
        info: {
            prepTime: "20 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 20 minutos",
            servings: "6 personas",
            category: "Entrante",
            cuisine: "Francesa",
            calories: "310 kcal por raci\xf3n"
        },
        ingredients: [
            "1kg cebollas",
            "2L caldo de carne",
            "Pan tostado",
            "Queso gruy\xe8re",
            "Mantequilla",
            "Vino blanco",
            "Tomillo"
        ],
        instructions: [
            "1. Caramelizar las cebollas",
            "2. A\xf1adir vino y reducir",
            "3. Agregar caldo y hierbas",
            "4. Cocinar a fuego lento",
            "5. Servir con pan y queso",
            "6. Gratinar"
        ]
    }
];
const englishRecipes = [
    {
        name: "Fish and Chips",
        country: "England",
        image: (0, _imagesJs.images).fishandchips,
        video: "https://www.youtube.com/watch?v=CSBvpy16wvg",
        info: {
            prepTime: "20 minutos",
            cookTime: "25 minutos",
            totalTime: "45 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "780 kcal por raci\xf3n"
        },
        ingredients: [
            "800g filetes de bacalao",
            "1kg patatas para fre\xedr",
            "200g harina",
            "330ml cerveza rubia",
            "1 huevo",
            "Sal y pimienta",
            "Aceite para fre\xedr"
        ],
        instructions: [
            "1. Cortar las patatas en bastones gruesos",
            "2. Preparar la masa con harina, cerveza y huevo",
            "3. Fre\xedr las patatas hasta dorar",
            "4. Rebozar el pescado en la masa",
            "5. Fre\xedr el pescado hasta que est\xe9 dorado",
            "6. Servir con salsa t\xe1rtara y pur\xe9 de guisantes"
        ]
    },
    {
        name: "Shepherd's Pie",
        country: "England",
        image: (0, _imagesJs.images).shepherdspie,
        video: "https://www.youtube.com/watch?v=a3EYQARJkLk",
        info: {
            prepTime: "30 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora 15 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "450 kcal por raci\xf3n"
        },
        ingredients: [
            "500g cordero picado",
            "1kg patatas",
            "2 zanahorias",
            "1 cebolla",
            "Guisantes",
            "Caldo de carne",
            "Mantequilla"
        ],
        instructions: [
            "1. Preparar pur\xe9 de patata",
            "2. Cocinar la carne con verduras",
            "3. A\xf1adir caldo y reducir",
            "4. Montar en bandeja",
            "5. Cubrir con pur\xe9",
            "6. Hornear hasta dorar"
        ]
    },
    {
        name: "English Breakfast",
        country: "England",
        image: (0, _imagesJs.images).englishbreakfast,
        video: "https://www.youtube.com/watch?v=N0qIuwdLQbA",
        info: {
            prepTime: "15 minutos",
            cookTime: "25 minutos",
            totalTime: "40 minutos",
            servings: "2 personas",
            category: "Desayuno",
            cuisine: "Inglesa",
            calories: "850 kcal por raci\xf3n"
        },
        ingredients: [
            "Salchichas",
            "Bacon",
            "Huevos",
            "Champi\xf1ones",
            "Alubias en tomate",
            "Tomates",
            "Pan tostado"
        ],
        instructions: [
            "1. Cocinar salchichas y bacon",
            "2. Preparar champi\xf1ones",
            "3. Calentar alubias",
            "4. Fre\xedr huevos",
            "5. Asar tomates",
            "6. Servir todo caliente"
        ]
    },
    {
        name: "Apple Crumble",
        country: "England",
        image: (0, _imagesJs.images).applecrumble,
        video: "https://www.youtube.com/watch?v=GSbg1w_heTw",
        info: {
            prepTime: "20 minutos",
            cookTime: "40 minutos",
            totalTime: "1 hora",
            servings: "6 personas",
            category: "Postre",
            cuisine: "Inglesa",
            calories: "380 kcal por raci\xf3n"
        },
        ingredients: [
            "6 manzanas",
            "200g harina",
            "150g mantequilla",
            "100g az\xfacar",
            "Canela",
            "Nuez moscada",
            "Lim\xf3n"
        ],
        instructions: [
            "1. Pelar y cortar manzanas",
            "2. Preparar la cobertura",
            "3. Colocar manzanas en molde",
            "4. Cubrir con la mezcla",
            "5. Hornear hasta dorar",
            "6. Servir caliente"
        ]
    },
    {
        name: "Sunday Roast",
        country: "England",
        image: (0, _imagesJs.images).sundayroast,
        video: "https://www.youtube.com/watch?v=NUn2yAyKUhg",
        info: {
            prepTime: "30 minutos",
            cookTime: "2 horas",
            totalTime: "2 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "720 kcal por raci\xf3n"
        },
        ingredients: [
            "1.5kg rosbif",
            "Patatas asadas",
            "Yorkshire pudding",
            "Zanahorias",
            "Guisantes",
            "Salsa gravy",
            "Mostaza"
        ],
        instructions: [
            "1. Preparar la carne",
            "2. Asar a temperatura deseada",
            "3. Preparar guarniciones",
            "4. Hacer Yorkshire puddings",
            "5. Preparar salsa gravy",
            "6. Servir todo junto"
        ]
    }
];

},{"./images.js":"d1Uqu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1Uqu":[function(require,module,exports,__globalThis) {
// Asian recipes images
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "images", ()=>images);
var _sushiPng = require("./static/img/sushi.png");
var _sushiPngDefault = parcelHelpers.interopDefault(_sushiPng);
var _padthaiPng = require("./static/img/padthai.png");
var _padthaiPngDefault = parcelHelpers.interopDefault(_padthaiPng);
var _kungpaoPng = require("./static/img/kungpao.png");
var _kungpaoPngDefault = parcelHelpers.interopDefault(_kungpaoPng);
var _bibimbapPng = require("./static/img/bibimbap.png");
var _bibimbapPngDefault = parcelHelpers.interopDefault(_bibimbapPng);
var _phoPng = require("./static/img/pho.png");
var _phoPngDefault = parcelHelpers.interopDefault(_phoPng);
// Spanish recipes images
var _paellaPng = require("./static/img/paella.png");
var _paellaPngDefault = parcelHelpers.interopDefault(_paellaPng);
var _gazpachoPng = require("./static/img/gazpacho.png");
var _gazpachoPngDefault = parcelHelpers.interopDefault(_gazpachoPng);
var _croquetasPng = require("./static/img/croquetas.png");
var _croquetasPngDefault = parcelHelpers.interopDefault(_croquetasPng);
var _fabadaasturianaPng = require("./static/img/fabadaasturiana.png");
var _fabadaasturianaPngDefault = parcelHelpers.interopDefault(_fabadaasturianaPng);
var _pulpogallegaPng = require("./static/img/pulpogallega.png");
var _pulpogallegaPngDefault = parcelHelpers.interopDefault(_pulpogallegaPng);
// Italian recipes images
var _espagueticarbonaraPng = require("./static/img/espagueticarbonara.png");
var _espagueticarbonaraPngDefault = parcelHelpers.interopDefault(_espagueticarbonaraPng);
var _pizzamargheritaPng = require("./static/img/pizzamargherita.png");
var _pizzamargheritaPngDefault = parcelHelpers.interopDefault(_pizzamargheritaPng);
var _risottoPng = require("./static/img/risotto.png");
var _risottoPngDefault = parcelHelpers.interopDefault(_risottoPng);
var _lasagnaPng = require("./static/img/lasagna.png");
var _lasagnaPngDefault = parcelHelpers.interopDefault(_lasagnaPng);
var _tiramisuPng = require("./static/img/tiramisu.png");
var _tiramisuPngDefault = parcelHelpers.interopDefault(_tiramisuPng);
// French recipes images
var _coqauvinPng = require("./static/img/coqauvin.png");
var _coqauvinPngDefault = parcelHelpers.interopDefault(_coqauvinPng);
var _ratatouillePng = require("./static/img/ratatouille.png");
var _ratatouillePngDefault = parcelHelpers.interopDefault(_ratatouillePng);
var _cremebruleePng = require("./static/img/cremebrulee.png");
var _cremebruleePngDefault = parcelHelpers.interopDefault(_cremebruleePng);
var _quichePng = require("./static/img/quiche.png");
var _quichePngDefault = parcelHelpers.interopDefault(_quichePng);
var _soupeoignonPng = require("./static/img/soupeoignon.png");
var _soupeoignonPngDefault = parcelHelpers.interopDefault(_soupeoignonPng);
// English recipes images
var _fishandchipsPng = require("./static/img/fishandchips.png");
var _fishandchipsPngDefault = parcelHelpers.interopDefault(_fishandchipsPng);
var _shepherdspiePng = require("./static/img/shepherdspie.png");
var _shepherdspiePngDefault = parcelHelpers.interopDefault(_shepherdspiePng);
var _englishbreakfastPng = require("./static/img/englishbreakfast.png");
var _englishbreakfastPngDefault = parcelHelpers.interopDefault(_englishbreakfastPng);
var _applecrumblePng = require("./static/img/applecrumble.png");
var _applecrumblePngDefault = parcelHelpers.interopDefault(_applecrumblePng);
var _sundayroastPng = require("./static/img/sundayroast.png");
var _sundayroastPngDefault = parcelHelpers.interopDefault(_sundayroastPng);
const images = {
    sushi: // Asian recipes
    (0, _sushiPngDefault.default),
    padthai: (0, _padthaiPngDefault.default),
    kungpao: (0, _kungpaoPngDefault.default),
    bibimbap: (0, _bibimbapPngDefault.default),
    pho: (0, _phoPngDefault.default),
    paella: // Spanish recipes
    (0, _paellaPngDefault.default),
    gazpacho: (0, _gazpachoPngDefault.default),
    croquetas: (0, _croquetasPngDefault.default),
    fabada: (0, _fabadaasturianaPngDefault.default),
    pulpo: (0, _pulpogallegaPngDefault.default),
    carbonara: // Italian recipes
    (0, _espagueticarbonaraPngDefault.default),
    pizza: (0, _pizzamargheritaPngDefault.default),
    risotto: (0, _risottoPngDefault.default),
    lasagna: (0, _lasagnaPngDefault.default),
    tiramisu: (0, _tiramisuPngDefault.default),
    coqauvin: // French recipes
    (0, _coqauvinPngDefault.default),
    ratatouille: (0, _ratatouillePngDefault.default),
    cremebrulee: (0, _cremebruleePngDefault.default),
    quiche: (0, _quichePngDefault.default),
    onionsoup: (0, _soupeoignonPngDefault.default),
    fishandchips: // English recipes
    (0, _fishandchipsPngDefault.default),
    shepherdspie: (0, _shepherdspiePngDefault.default),
    englishbreakfast: (0, _englishbreakfastPngDefault.default),
    applecrumble: (0, _applecrumblePngDefault.default),
    sundayroast: (0, _sundayroastPngDefault.default)
};

},{"./static/img/sushi.png":"g9wW5","./static/img/padthai.png":"4l0EK","./static/img/kungpao.png":"d5GH9","./static/img/bibimbap.png":"37w1v","./static/img/pho.png":"fyZrS","./static/img/paella.png":"jiTzf","./static/img/gazpacho.png":"dufLU","./static/img/croquetas.png":"hc1fP","./static/img/fabadaasturiana.png":"1bjAr","./static/img/pulpogallega.png":"9Vvyi","./static/img/espagueticarbonara.png":"dyBT1","./static/img/pizzamargherita.png":"8g6ob","./static/img/risotto.png":"jgymh","./static/img/lasagna.png":"6bxXM","./static/img/tiramisu.png":"kQRoj","./static/img/coqauvin.png":"QksdV","./static/img/ratatouille.png":"f456u","./static/img/cremebrulee.png":"6fa4d","./static/img/quiche.png":"fTSPm","./static/img/soupeoignon.png":"1MWBq","./static/img/fishandchips.png":"hnXUo","./static/img/shepherdspie.png":"ae8ou","./static/img/englishbreakfast.png":"eCB90","./static/img/applecrumble.png":"1NOeG","./static/img/sundayroast.png":"h26xJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9wW5":[function(require,module,exports,__globalThis) {
module.exports = require("e02031f82cc8e17c").getBundleURL('aV73p') + "sushi.e80a252a.png" + "?" + Date.now();

},{"e02031f82cc8e17c":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4l0EK":[function(require,module,exports,__globalThis) {
module.exports = require("24f1853a6217cd50").getBundleURL('aV73p') + "padthai.dda7edb9.png" + "?" + Date.now();

},{"24f1853a6217cd50":"lgJ39"}],"d5GH9":[function(require,module,exports,__globalThis) {
module.exports = require("6a5722b974b49a3a").getBundleURL('aV73p') + "kungpao.fa0d0bcd.png" + "?" + Date.now();

},{"6a5722b974b49a3a":"lgJ39"}],"37w1v":[function(require,module,exports,__globalThis) {
module.exports = require("5dbcbe7d871de3e6").getBundleURL('aV73p') + "bibimbap.f7fceee6.png" + "?" + Date.now();

},{"5dbcbe7d871de3e6":"lgJ39"}],"fyZrS":[function(require,module,exports,__globalThis) {
module.exports = require("fad7049652a93cfa").getBundleURL('aV73p') + "pho.bd4d3af0.png" + "?" + Date.now();

},{"fad7049652a93cfa":"lgJ39"}],"jiTzf":[function(require,module,exports,__globalThis) {
module.exports = require("cdef63236148c8a0").getBundleURL('aV73p') + "paella.5b929bd6.png" + "?" + Date.now();

},{"cdef63236148c8a0":"lgJ39"}],"dufLU":[function(require,module,exports,__globalThis) {
module.exports = require("3e3cc9d1b1d1cd").getBundleURL('aV73p') + "gazpacho.8c675157.png" + "?" + Date.now();

},{"3e3cc9d1b1d1cd":"lgJ39"}],"hc1fP":[function(require,module,exports,__globalThis) {
module.exports = require("72370218191eb5d2").getBundleURL('aV73p') + "croquetas.746fdbc7.png" + "?" + Date.now();

},{"72370218191eb5d2":"lgJ39"}],"1bjAr":[function(require,module,exports,__globalThis) {
module.exports = require("4972bf452cb7effe").getBundleURL('aV73p') + "fabadaasturiana.11b84bc6.png" + "?" + Date.now();

},{"4972bf452cb7effe":"lgJ39"}],"9Vvyi":[function(require,module,exports,__globalThis) {
module.exports = require("92de1957a38905c").getBundleURL('aV73p') + "pulpogallega.8825d93a.png" + "?" + Date.now();

},{"92de1957a38905c":"lgJ39"}],"dyBT1":[function(require,module,exports,__globalThis) {
module.exports = require("2840a212c7e8ded1").getBundleURL('aV73p') + "espagueticarbonara.87d250e9.png" + "?" + Date.now();

},{"2840a212c7e8ded1":"lgJ39"}],"8g6ob":[function(require,module,exports,__globalThis) {
module.exports = require("32f967c89a0a81ed").getBundleURL('aV73p') + "pizzamargherita.ac636176.png" + "?" + Date.now();

},{"32f967c89a0a81ed":"lgJ39"}],"jgymh":[function(require,module,exports,__globalThis) {
module.exports = require("d2fe8444602e2d3a").getBundleURL('aV73p') + "risotto.93482b02.png" + "?" + Date.now();

},{"d2fe8444602e2d3a":"lgJ39"}],"6bxXM":[function(require,module,exports,__globalThis) {
module.exports = require("34c8680c5b4a1718").getBundleURL('aV73p') + "lasagna.8300ac2e.png" + "?" + Date.now();

},{"34c8680c5b4a1718":"lgJ39"}],"kQRoj":[function(require,module,exports,__globalThis) {
module.exports = require("ef86e83c7ea77b9b").getBundleURL('aV73p') + "tiramisu.874a7396.png" + "?" + Date.now();

},{"ef86e83c7ea77b9b":"lgJ39"}],"QksdV":[function(require,module,exports,__globalThis) {
module.exports = require("21bc074246e680a").getBundleURL('aV73p') + "coqauvin.e84b39a5.png" + "?" + Date.now();

},{"21bc074246e680a":"lgJ39"}],"f456u":[function(require,module,exports,__globalThis) {
module.exports = require("19d3a7960e53b581").getBundleURL('aV73p') + "ratatouille.e618b1bd.png" + "?" + Date.now();

},{"19d3a7960e53b581":"lgJ39"}],"6fa4d":[function(require,module,exports,__globalThis) {
module.exports = require("8bee50e8fe2f69b7").getBundleURL('aV73p') + "cremebrulee.501ae6cf.png" + "?" + Date.now();

},{"8bee50e8fe2f69b7":"lgJ39"}],"fTSPm":[function(require,module,exports,__globalThis) {
module.exports = require("7092663acee75928").getBundleURL('aV73p') + "quiche.59f299f1.png" + "?" + Date.now();

},{"7092663acee75928":"lgJ39"}],"1MWBq":[function(require,module,exports,__globalThis) {
module.exports = require("4a1b7196b4bf8e1a").getBundleURL('aV73p') + "soupeoignon.05941f1d.png" + "?" + Date.now();

},{"4a1b7196b4bf8e1a":"lgJ39"}],"hnXUo":[function(require,module,exports,__globalThis) {
module.exports = require("81e9a8c8924d81c2").getBundleURL('aV73p') + "fishandchips.22a31c5d.png" + "?" + Date.now();

},{"81e9a8c8924d81c2":"lgJ39"}],"ae8ou":[function(require,module,exports,__globalThis) {
module.exports = require("4d1fb00763e4411").getBundleURL('aV73p') + "shepherdspie.c261f262.png" + "?" + Date.now();

},{"4d1fb00763e4411":"lgJ39"}],"eCB90":[function(require,module,exports,__globalThis) {
module.exports = require("644e4111ddb3d5c2").getBundleURL('aV73p') + "englishbreakfast.95f5c8a9.png" + "?" + Date.now();

},{"644e4111ddb3d5c2":"lgJ39"}],"1NOeG":[function(require,module,exports,__globalThis) {
module.exports = require("1bddc73e3953852b").getBundleURL('aV73p') + "applecrumble.9388c92e.png" + "?" + Date.now();

},{"1bddc73e3953852b":"lgJ39"}],"h26xJ":[function(require,module,exports,__globalThis) {
module.exports = require("dddf16f318e40673").getBundleURL('aV73p') + "sundayroast.c74975e8.png" + "?" + Date.now();

},{"dddf16f318e40673":"lgJ39"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dD2VF"], null, "parcelRequire94c2")

//# sourceMappingURL=index.004d2bb3.js.map
