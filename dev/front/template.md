

## Стандартний шаблон CF.Digital

[![Build Status](https://travis-ci.com/cf-digital-ukraine/default-html-template.svg?branch=master)](https://travis-ci.com/cf-digital-ukraine/default-html-template) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/43d32cd89e5e42dabcef8c0ad6aeb5a7)](https://www.codacy.com/app/cf-digital-ukraine/default-html-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cf-digital-ukraine/default-html-template&amp;utm_campaign=Badge_Grade) [![Greenkeeper badge](https://badges.greenkeeper.io/cf-digital-ukraine/default-html-template.svg)](https://greenkeeper.io/) [![devDependency Status](https://david-dm.org/cf-digital-ukraine/default-html-template/dev-status.svg)](https://david-dm.org/cf-digital-ukraine/default-html-template#info=devDependencies) [![Dependency Status](https://david-dm.org/cf-digital-ukraine/default-html-template.svg)](https://david-dm.org/cf-digital-ukraine/default-html-template)


- Webpack расширен пакетом "laravel-mix" и его конфигурация отличаеться от стандартной.
- Шаблон предназначен как для верстки на готовой системе, так и для чистой верстке на HTML.
- Перед началом разработки, необходимо настроить `webpack.mix.js`, в зависимости от того где ведеться разработка:
  - _Пути файлов и директорий;_  
  - _Очистка не используемых параметров;_  
  - _Если необходимо, обновить модули и зависимости;_  
 
- Больше информации по зависимостям пакетов можно найти в файле `package.json`  
- По умолчанию webpack production `npm run prod` собирает:  
  - _JavaScript совместимый с старыми версиями браузеров которые не поддерживают "ES6";_  
  - _postCss минимизация и групировка медиа запросов(адаптив) по такой логике:
    - (min-width) - по возрастанию;
    - (max-width) - по убыванию;  

- По умолчанию webpack development `npm run watch` выполняет:
  - _Собирает JavaScript совместимый только с ES6 и выше, включенный soucemap для кода._  
  - _CSS аналогичен production версии кроме минимизации_


## Установка

Для установки пакета на комьютере должен біть установлен [Node.js with npm 6+](https://nodejs.org/uk/download/)  
Команды выполняются в терминале, с корня директории где расположен `package.json`  
Для загрузки всех зависимостей, выполнить:
```shell
npm install
```
Для запуска слушателя файлов, выполнить:
```shell
npm run watch
```
  
Для установки библиотека, вы должны добавить ее в раздер зависимотей в файле `package.json`, и выполнить `run npm install`.
Или выполнить в терминале команду `npm install *package-name* -S`  
Названия пакетов можно найти на [оффициальном сайте](https://www.npmjs.com/)  


## Обязательная структура каталолов

Приведенная структура актуальна для верстки на HTML,
в случае если разработка сразу ведется на развернутой системме DeltaCMS,
необходимо переписать пути сборки файлов в `webpack.mix.js`.
 
>[!NOTE]Структура дирректорий может меняться и не является обязательной, но при изменении, всегда нужно следить чтобы все пути были прописаны в `webpack.mix.js`

<pre>📁 root
├── 📁 public
│   ├── *.html
│   └── index.html
├── 📁 resources
│   └── 📁 fonts
│   │   └── 📁 bold
│   │   │   ├── font-name.eot
│   │   │   ├── font-name.svg
│   │   │   ├── font-name.ttf
│   │   │   ├── font-name.woff
│   │   │   └── font-name.woff2
│   │   ...
│   │   └── 📁 medium
│   │       ├── font-name.eot
│   │       ├── font-name.svg
│   │       ├── font-name.ttf
│   │       ├── font-name.woff
│   │       └── font-name.woff2
│   ├── 📁 image
│   │   ├── 📁 folder
│   │   │   ├── ...
│   │   │   └── *.jpg|.svg|.png
│   │   ├── ...
│   │   └── *.jpg|.svg|.png
│   ├── 📁 sass
│   │   ├── 📁 infoblock
│   │   │   ├── ...
│   │   │   └── *.sass
│   │   ├── 📁 pages
│   │   │   ├── ...
│   │   │   └── *.sass
│   │   ├── 📁 elements
│   │   │   ├── ...
│   │   │   └── *.sass
│   │   ├── _default.sass
│   │   ├── _fonts.sass
│   │   ├── _functions.sass
│   │   ├── _normalize.sass
│   │   ├── _variables.sass
│   │   ├── app.sass
│   │   └── polyfill.sass
│   ├── 📁 js
│   │   ├── 📁 _system-classes
│   │   │   ├── css
│   │   │   ├── AxiosGet.js
│   │   │   ├── ...
│   │   │   └── AxiosPost.js
│   │   ├── delta-functions.js
│   │   ├── polyfill.js
│   │   ├── system.js
│   │   └── app.js
│   └── 📁 for-remove
│       ├── ...
│       └── ***.ext
├── .gitignore
├── package.json
├── webpack.mix.js
└── mix-manifest.json
</pre>

## Настройка и конфигурация `webpack.mix.js`

При необходимости, детальную документацию по laravel-mix можно найти на [оффициальном сайте](https://laravel.com/docs/6.x/mix).  
Изменение конфигурации webpack производиться [методом laravel-mix](https://laravel.com/docs/6.x/mix#custom-webpack-configuration)
и доступна на [оффициальном сайте](https://webpack.js.org/configuration/).

#### Для сборки проекта под DeltaCMS ключивыми параметрами являются:

```javascript
mix.version();
```
Добавляет в подключение информацию о версии файла.

<br>

```javascript
var arrayToExtract = [
    'jquery'
    //...
    // Масив библиотек который при сборке
    // выносятся в отдельный файл vendor.js.
];
mix.extract(arrayToExtract);
```
В резульстате работы медота в корень `./public/js` будет вынесено 2 файла:
 - manifest.js - служебный файл **webpack.js**
 - vendor.js - в файл выносятся все библиотеки которые прописаны в массиве `arrayToExtract`  
 
Названия ставятся такие же, как при подключении в `package.json`  