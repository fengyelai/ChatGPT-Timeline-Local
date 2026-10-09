# ChatGPT Timeline Local (v0.1.0 preview)

**Unofficial, local-only Chrome / Microsoft Edge extension** that adds a question-based timeline to the ChatGPT website. [中文版 README](README.md).

> **Preview status:** The included report documents 14/14 simulated-DOM tests, but this version has **not** yet passed real-account, real-browser acceptance testing. Compatibility may change when the ChatGPT interface changes.

## What it does

- Shows compact navigation marks for detected user questions.
- Displays a searchable question list and previews; click to jump to a question.
- Scans older messages by scrolling the current conversation, with manual cancellation and status reporting.
- Handles a selection of old/new ChatGPT DOM patterns and reverse-scrolling/virtualized views.
- Offers a diagnostic summary intended to omit message bodies and identifiers.

## Install unpacked (no account password, API key, build step or Node.js required)

1. Download and extract the `ChatGPT_Timeline_Local_v0.1.0.zip` release attachment, or clone/download this repository.
2. Open `edge://extensions/` or `chrome://extensions/`.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the `extension` directory containing `manifest.json`.
5. Reload your ChatGPT conversation page. The navigation bar should appear on the right.

Other features and troubleshooting instructions are documented in the [Chinese README](README.md).

## Privacy and scope

The extension content scripts run on `https://chatgpt.com/*` and `https://chat.openai.com/*`. The declared extension permission is `storage`, used for the left/right position preference. The code indexes rendered user questions in tab memory and does not contain outbound network request logic, remote analytics or a backend server in this release. Review the source and test before using with sensitive conversations.

## Limitations and verification

- This is a local DOM-based navigator, **not a full ChatGPT conversation exporter**.
- Initially only currently mounted messages can be indexed. Automatic scanning does not guarantee all earlier messages were discovered.
- Different answer branches may require manually rebuilding the index.
- The project is independent and **not affiliated with OpenAI**.
- The existing test report is in `tests/results.json`; test fixtures use jsdom with simulated geometry, not real Chromium rendering.

## Developer test

```sh
npm install
npm test
```

> No license has been granted merely by making this repository public. The repository owner should choose a license explicitly if third-party redistribution or modification is intended.
