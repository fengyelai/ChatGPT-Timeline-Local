# Changelog

## v0.1.0 — preview release

- Added a locally injected question timeline for ChatGPT in Chromium browsers.
- Added search, jump-to-question, tooltip preview and current-question highlighting.
- Added history scanning with cancellation and safeguards for virtualized / reverse-scrolling pages.
- Added diagnostic output designed to exclude conversation bodies and message IDs.
- Added a built-in popup, offline demo and simulated-DOM test fixtures.

### Validation

The bundled `tests/results.json` records **14/14 passing simulated-DOM cases** on 2026-10-02. This is an existing test report, not a live-browser certification. Real-account browser compatibility remains to be verified.

### Known limitations

- The index covers the current mounted/visited conversation branch, not every chat or hidden branch.
- ChatGPT DOM changes can disrupt detection, scrolling or jump behavior.
- History scanning changes the scroll position temporarily and cannot prove complete coverage.
- The extension is not listed in a browser extension store.
