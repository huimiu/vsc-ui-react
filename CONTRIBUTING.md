# Contributing

## Publishing

The package is published to npm automatically via GitHub Actions. No manual `npm publish` is needed.

### How it works

1. The workflow is defined in `.github/workflows/publish.yml`.
2. When a push to `main` changes `package.json`, it compares the version field to the previous commit.
3. If the version has changed, it runs `npm ci` and `npm publish` using the `NPM_TOKEN` secret.
4. The `prepublishOnly` script automatically runs `build`, `typecheck`, `lint`, and `test` before publishing.

### Release steps

1. Bump the `version` in `package.json`.
2. Commit and push to `main`.
3. The GitHub Actions workflow handles the rest.
