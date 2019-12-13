

### Стандартний шаблон CF.Digital

[![Build Status](https://travis-ci.com/cf-digital-ukraine/default-html-template.svg?branch=master)](https://travis-ci.com/cf-digital-ukraine/default-html-template) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/43d32cd89e5e42dabcef8c0ad6aeb5a7)](https://www.codacy.com/app/cf-digital-ukraine/default-html-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cf-digital-ukraine/default-html-template&amp;utm_campaign=Badge_Grade) [![Greenkeeper badge](https://badges.greenkeeper.io/cf-digital-ukraine/default-html-template.svg)](https://greenkeeper.io/) [![devDependency Status](https://david-dm.org/cf-digital-ukraine/default-html-template/dev-status.svg)](https://david-dm.org/cf-digital-ukraine/default-html-template#info=devDependencies) [![Dependency Status](https://david-dm.org/cf-digital-ukraine/default-html-template.svg)](https://david-dm.org/cf-digital-ukraine/default-html-template)


- Webpack расширен пакетом "laravel-mix" и его конфигурация отличаеться от стандартной.
- Шаблон предназначен как для верстки на готовой системе, так и для чистой верстке на HTML.
- Перед началом разработки, необходимо настроить **webpack.mix.js**, в зависимости от того где ведеться разработка:
  - _Пути файлов и директорий_  
  - _Очистка не используемых параметров_  
  - _Если необходимо, обновить модули и зависимости_  
 
- More information about dependencies is in the file [package](./package.json)  
- По умолчанию webpack prodaction (npm run prod command) собирает:  
  - _JavaScript is compatible with "ES6 <" - browsers_  
  - _postCss minimizes and groups mediaQueries with logic: (min-width) - to increase, (max-width) - to decrease_  

- По умолчанию webpack development (npm run dev / watch) performs a similar function, except:
  - _JavaScript ES6 +, enabled soucemap, does not delete comments and console._  

### Установка

Must be installed [Node.js with npm 6+](https://nodejs.org/uk/download/)  
Teams run in the terminal - the root of [package](./package.json)  
To download all development dependencies:
```shell
npm install
```
To start file listeners:
```shell
npm run watch
```
  
To install the library, you must add it to the dependent dependencies section of the [package](./package.json), and then `run npm install`.
Or execute the command `npm install *package-name* -S` in the terminal

---
### Обязательная структура каталолов
<sup>If necessary, the structure must be expanded</sup>
<pre>📁root
├── 📁public
│   ├── *.html
│   └── index.html
├── 📁resources
│   └── 📁fonts
│   │   └── 📁bold  
│   │   │   ├── font-name.eot  
│   │   │   ├── font-name.svg  
│   │   │   ├── font-name.ttf  
│   │   │   ├── font-name.woff  
│   │   │   └── font-name.woff2  
│   │   ...
│   │   └── 📁medium  
│   │       ├── font-name.eot  
│   │       ├── font-name.svg  
│   │       ├── font-name.ttf  
│   │       ├── font-name.woff  
│   │       └── font-name.woff2  
│   ├── 📁image
│   │   ├── 📁folder  
│   │   │   ├── ...  
│   │   │   └── *.jpg|.svg|.png 
│   │   ├── ...  
│   │   └── *.jpg|.svg|.png 
│   ├── 📁sass
│   │   ├── 📁infoblock  
│   │   │   ├── ...
│   │   │   └── *.sass 
│   │   ├── 📁pages  
│   │   │   ├── ...
│   │   │   └── *.sass  
│   │   ├── 📁elements  
│   │   │   ├── ...
│   │   │   └── *.sass 
│   │   ├── _default.sass
│   │   ├── _fonts.sass
│   │   ├── _functions.sass
│   │   ├── _normalize.sass
│   │   ├── _variables.sass
│   │   ├── app.sass
│   │   └── polyfill.sass
│   ├── 📁js
│   │   ├── 📁_system-classes
│   │   │   ├── css
│   │   │   ├── AxiosGet.js
│   │   │   ├── ...
│   │   │   └── AxiosPost.js
│   │   ├── delta-functions.js
│   │   ├── polyfill.js
│   │   ├── system.js
│   │   └── app.js
│   └── 📁for-remove
│       ├── ...
│       └── ***.ext
├── .gitignore
├── package.json
├── webpack.mix.js
└── mix-manifest.json
</pre>
