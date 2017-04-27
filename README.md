# mathjax-single-file #

An **experimental** MathJax build as a single file.

This built offers two example configurations -- MMMLSVG, TeXSVG -- providing

* MathML input or TeX input
* SVG output with MathJax TeX "fonts"
* extensions 
    * MMLSVG: mml3.js, webfonts matching, AssistiveMML
    * TeXSVG: almost all core TeX extensions
* misc. MathJax internals

See the Gruntfile for more information.

For more background, see [https://github.com/mathjax/MathJax/wiki/Single-file-built](https://github.com/mathjax/MathJax/wiki/Single-file-built)

## Getting Started ##

This project assumes you have NodeJS installed.

1. Install dependencies

```shell
npm install grunt-cli -g
npm install
```

2. Build the MathJax configuration bundles

```shell
grunt
```

3. View test pages in your browser

```shell
npm start
```



