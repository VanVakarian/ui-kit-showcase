# UiKit Showcase

<h2><a href="https://vanvakarian.github.io/ui-kit-showcase/">🚀 Live Demo</a></h2>

## Installation

This project uses git submodules to integrate UI Kit components.

### Initial repository clone

```bash
# Clone with submodule
git clone --recurse-submodules git@github.com:VanVakarian/ui-kit-showcase.git

# Or, if already cloned without submodule
git clone git@github.com:VanVakarian/ui-kit-showcase.git
cd ui-kit-showcase
git submodule init
git submodule update
```

### Updating submodule

```bash
# Update submodule to the latest version from main branch
cd src/ui-kit
git pull origin main
cd ../..
git add src/ui-kit
git commit -m "Update ui-kit submodule"
```

### Running the project

```bash
npm install
npm start
```

### Build

```bash
npm run build
```

## Structure

- `src/ui-kit/` - git submodule with UI Kit components (repository: [angular-ui-kit](https://github.com/VanVakarian/angular-ui-kit))
- `src/app/` - showcase application demonstrating UI Kit components
