<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import appHeader from '@/components/header';
export default {
  components: { appHeader },
};
</script>

<style>
body {
  margin: 0 !important;
  word-spacing: 0.3em;
}

:root {
  --global-font-size: 15px;
  --global-line-height: 1.3em;
  --global-space: 10px;
  --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --mono-font-stack: Inter, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --background-color: #222225;
  --page-width: 60em;
  --font-color: #e8e9ed;
  --invert-font-color: #222225;
  --secondary-color: #a3abba;
  --tertiary-color: #a3abba;
  --primary-color: #62c4ff;
  --error-color: #ff3c74;
  --progress-bar-background: #3f3f44;
  --progress-bar-fill: #62c4ff;
  --code-bg-color: #3f3f44;
  --input-style: solid;
  --display-h1-decoration: none;
}
</style>
