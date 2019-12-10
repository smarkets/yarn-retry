[![Build Status](https://travis-ci.org/artemv/yarn-retry.svg?branch=master)](https://travis-ci.org/artemv/yarn-retry)

Command line utility that retries  `yarn` when Yarn fails with `unexpected end of file` error.

This happens quite often for private NPM modules, see https://github.com/yarnpkg/yarn/issues/7521

## Installation

	yarn global add yarn-retry

## Usage

From command-line:

	yarn-retry --wait 500 --attempts 10 -- --frozen-lockfile

It has two options wait (defaults to 500) and attempts (default to 10). Everything after `--` goes directly to yarn.

## Other
Based on [npm-install-retry](https://github.com/jfromaniello/npm-install-retry) utility by José F. Romaniello.
