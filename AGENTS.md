# Setup Failure Findings

## Issue
When running `setup.command` (which executes `npm run build` and `npm run serve`), the project fails to build with the following error:
`Error: error:0308010C:digital envelope routines::unsupported`

## Root Cause
The project uses Webpack 4, which relies on the `MD4` cryptographic algorithm for its internal hashing mechanisms. Recent versions of Node.js (v17+) have upgraded their underlying cryptography library to OpenSSL 3.0. By default, OpenSSL 3.0 disables legacy algorithms like `MD4`. When Webpack attempts to create a hash, OpenSSL blocks it, causing the build to crash.

## Suggested Fixes
1. **Enable the OpenSSL Legacy Provider**: Instruct Node.js to allow legacy cryptography algorithms by setting the `NODE_OPTIONS=--openssl-legacy-provider` environment variable before running the build/serve commands.
2. **Downgrade Node.js**: Temporarily switch to Node v16 (which uses OpenSSL 1.1.1 and supports MD4) just for this project using a Node Version Manager.
3. **Upgrade to Webpack 5**: Migrate the project to Webpack 5, which no longer relies on MD4 hashing. This involves bumping the dependencies (`webpack`, `webpack-cli`, `webpack-dev-server`) and refactoring `webpack.config.js` to account for breaking changes.
