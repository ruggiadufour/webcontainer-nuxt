"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config = require("nuxt/config");
var _vue = require("vue");
var _package = require("nuxt/package.json");var _default = exports.default =

(0, _config.defineNuxtConfig)({
  devtools: { enabled: false },
  vite: {
    warmupEntry: false,
    optimizeDeps: {
      include: [
      'birpc',
      'ufo',
      'ofetch',
      'defu']

    }
  },
  runtimeConfig: {
    public: {
      clientInfo: {
        versionVue: _vue.version,
        versionNuxt: _package.version
      }
    }
  },
  typescript: {
    includeWorkspace: true,
    tsConfig: {
      include: [
      '../.layer-playground/**/*']

    }
  },
  css: [
  '~/.layer-playground/styles/base.css']

}); /* v7-6a972e1f99658305 */