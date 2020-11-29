module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __resources: true,
    PIXI: 'readable',
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // StandardJS — The Rules
    indent: 'off', // 2 spaces – for indentation

    'no-console': 'off',
    semi: [2, 'always'],
    'arrow-parens': 'off',
    'comma-dangle': [2, 'always-multiline'],
    curly: ['error', 'multi-line'],

    'import/no-extraneous-dependencies': 'off',
    'require-await': 0,

    'global-require': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': ['error'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 0,
    "vue/html-self-closing": 0,
    "vue/max-len": 0,

    "vue/array-bracket-newline": "off",
    "vue/array-bracket-spacing": "off",
    "vue/arrow-spacing": "off",
    "vue/block-spacing": "off",
    "vue/block-tag-newline": "off",
    "vue/brace-style": "off",
    "vue/comma-dangle": "off",
    "vue/comma-spacing": "off",
    "vue/comma-style": "off",
    "vue/dot-location": "off",
    "vue/func-call-spacing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-end-tags": "off",
    "vue/html-indent": "off",
    "vue/html-quotes": "off",
    "vue/key-spacing": "off",
    "vue/keyword-spacing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/no-extra-parens": "off",
    "vue/no-multi-spaces": "off",
    "vue/no-spaces-around-equal-signs-in-attribute": "off",
    "vue/object-curly-newline": "off",
    "vue/object-curly-spacing": "off",
    "vue/object-property-newline": "off",
    "vue/operator-linebreak": "off",
    "vue/script-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/space-in-parens": "off",
    "vue/space-infix-ops": "off",
    "vue/space-unary-ops": "off",
    "vue/template-curly-spacing": "off",
    "unicorn/number-literal-case": "off"
  },
};
