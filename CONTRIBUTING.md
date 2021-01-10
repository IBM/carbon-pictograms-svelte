# Contributing

## Getting Started

For MacOS, prerequisites include [homebrew](https://docs.brew.sh/Installation), [node (version >=12)](https://nodejs.org/en/download/package-manager/#macos) and [yarn](https://yarnpkg.com/en/docs/install#mac-stable).

Run the following shell commands to install all three prerequisites.

```bash
# installs homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# installs both yarn and node (if not installed)
brew install yarn
```

Fork the repo and clone your fork:

```bash
git clone <YOUR_FORK>
cd carbon-pictograms-svelte
```

Set the original repo as the upstream:

```bash
git remote add upstream git@github.com:IBM/carbon-pictograms-svelte.git
# verify that the upstream is added
git remote -v
```

Install the project dependencies:

```bash
yarn install
```

## Workflow

### Developing

Run `yarn test:tdd` to run tests in watch mode.

### Building

Run `yarn prepack` to build the library. Pictograms should be emitted to the `lib` folder.

### Validating Types

Run `yarn validate` to run `svelte-check` to validate the TypeScript definitions.

## Submitting a Pull Request

### Sync Your Fork

Before submitting a pull request, make sure your fork is up to date with the latest upstream changes.

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

### Submit a PR

After you've pushed your changes to remote, submit your PR. Make sure you are comparing `<YOUR_USER_ID>/feature` to `origin/master`.
