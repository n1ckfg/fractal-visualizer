# Architecture

The `fractal-visualizer` project is a collection of interactive WebGL/Three.js shader visualizations.

## Directory Structure

* **`build/`**: Contains the Node.js build configuration. It uses Webpack to bundle the JavaScript for each visualization and Webpack Dev Server to serve them locally.
* **`core/`**: Contains shared JavaScript utilities, libraries (e.g., `threex.domevents.js`, `filesaver.js`), controls logic, and common styles used across multiple visualizations.
* **Visualization Directories (`01-mandelbrot-set`, `02-mandelbulb`, `03-diffusion`, `04-gray-scott`, `05-smooth-gol`)**: Each folder represents a standalone visualization. They typically contain:
  * `index.html`: The main entry point HTML file.
  * `js/entry.js`: The JavaScript Webpack entry point for the visualization logic.
  * `README.md` & `images/`: Documentation and preview media for the specific visualization.

## Build System

The project uses a centralized `webpack.config.js` in the `build/` folder to manage the compilation of all visualizations.
- **Entry Points**: Each visualization's `entry.js` is mapped in Webpack as a separate entry point (`mandelbrot-set`, `mandelbulb`, `diffusion`, `gsvideo`, `smooth-gol`).
- **Output**: Bundled assets are compiled into a virtual `/dist/` directory when served locally via `webpack-dev-server`.

## Execution

The `setup.command` bash script automates the installation of dependencies (via `npm install`) and starts the Webpack build and development server from within the `build/` directory.
