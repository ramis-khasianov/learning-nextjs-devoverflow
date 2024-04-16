# DevOverflow

## Setup

- run `npx create-next-app@latest` to create project in folder
- install ESLint `npm install eslint-config-standart`
- install ESLint for Tailwind CSS: `npm install eslint-plugin-tailwindcss`
- install ESLint for Prettier: `npm install eslint-config-prettier`
- edit your `/.eslintrc.json` to look like this:

```JavaScript
{
  "extends": ["next/core-web-vitals", "standard", "plugin:tailwindcss/recommended", "prettier"]
}
```

- install Prettier: `npm install prettier`
- make alteration to vscode setup: type in search bar `>settings` and select `Preferences: Open User Settings (JSON)`. There enter following:

```JSON
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.jsxSingleQuote": false,
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "always",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- install extensions: Prettier and ESLint
- type in search bar `>reload` and select `Developer: Reload window`.
