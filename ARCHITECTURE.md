# Architecture

The `fractal-visualizer` project is a collection of interactive WebGL/Three.js shader visualizations.

## Directory Structure

* **`index.html` & `style.css`**: The root entry point acts as a gallery/hub that links to each individual visualization directory.
* **`build/`**: Contains the Node.js build configuration. It uses Webpack to bundle the JavaScript for each visualization and Webpack Dev Server to serve them locally.
* **`core/`**: Contains shared JavaScript utilities, libraries (e.g., `threex.domevents.js`, `filesaver.js`), controls logic, and common styles used across multiple visualizations.
* **`dist/`**: The output directory where Webpack compiles the bundled JavaScript files for each visualization.
* **Visualization Directories (`01-mandelbrot-set`, `02-mandelbulb`, `03-diffusion`, `04-gray-scott`, `05-smooth-gol`)**: Each folder represents a standalone visualization. They typically contain:
  * `index.html`: The main HTML file for the visualization.
  * `js/entry.js`: The JavaScript Webpack entry point for the visualization logic.
  * `README.md` & `images/`: Documentation and preview media for the specific visualization.

## Build System

The project uses a centralized `webpack.config.js` in the `build/` folder to manage the compilation of all visualizations.
- **Entry Points**: Each visualization's `entry.js` is mapped in Webpack as a separate entry point (`mandelbrot-set`, `mandelbulb`, `diffusion`, `gsvideo`, `smooth-gol`).
- **Output**: Bundled assets are compiled into the `/dist/` directory. When served locally via `webpack-dev-server`, they are served from this path.

## Execution

The project provides multiple scripts to facilitate running the visualizations locally:
- **`setup.command`**: A macOS/Linux bash script that automates the installation of dependencies (via `npm install`), builds the project, and starts the Webpack development server from within the `build/` directory.
- **`run.command` & `run.bat`**: Platform-specific scripts (macOS/Linux and Windows, respectively) that start a simple static file server (`http-server`) at the project root on an available port, allowing you to browse the root gallery and visualizations without running the Webpack dev server.
