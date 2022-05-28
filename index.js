module.exports = {
  "root": true,
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended"
  ],
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error"
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error"
    ],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [
      "error"
    ],
    "no-tabs": [
      "error"
    ],
    "semi": [
      2,
      "always"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          [
            "internal"
          ],
          [
            "parent",
            "sibling"
          ],
          "index"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "pathGroups": [
          {
            "pattern": "src/**",
            "group": "internal",
            "position": "after"
          }
        ]
      }
    ],
    "import/no-cycle": [
      2,
      {
        "maxDepth": 1
      }
    ],
    "import/newline-after-import": [
      "error",
      {
        "count": 1
      }
    ],
    "no-var": 2,
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "object-curly-spacing": [
      2,
      "always"
    ],
    "vue/multi-word-component-names": [
      "off"
    ]
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": false,
    "tsconfigRootDir": "./"
  },
  "ignorePatterns": [
    "dist",
    "examples",
    "node_modules"
  ]
}