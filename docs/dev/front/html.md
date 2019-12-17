## Бонус раздел 😝

Если вам нужно сверстать чистый HTML шаблон, вы так же можете использовать наш
пакет, его только немного нужно подправить, а точнее изменить конфигурацию файла `webpack.mix.js`.

 - дев зависимости оставляем
 - вырезаем то что нам не нужно
 - подключаем то что нужно)))
 - переписывает пути ввода и вывода файлов
 
#### Например сборка JavaScript
 
<!-- tabs:start -->

#### ** JS DeltaCMS **
 ```javascript
mix.js(["resources/builder-resources/js/app.js"], "public/js/app.js");
mix.js(["resources/builder-resources/js/system.js"], "public/js/system.js");
```
```html
<script defer src="{{ mix('js/manifest.js') }}"></script>
<script defer src="{{ mix('js/vendor.js') }}"></script>
<script defer src="{{ mix('js/system.js') }}"></script>
<script defer src="{{ mix('js/app.js') }}"></script>
```

#### ** JS HTML **
 ```javascript
mix.js(["resources/js/app.js"], "public/js/app.js");
mix.js(["resources/js/system.js"], "public/js/system.js");
```
```html
<script defer src="./js/manifest.js"></script>
<script defer src="./js/vendor.js"></script>
<script defer src="./js/system.js"></script>
<script defer src="./js/app.js"></script>
```

<!-- tabs:end -->


 #### Например сборка CSS
 
<!-- tabs:start -->
#### ** CSS DeltaCMS **
 ```javascript
mix.sass("resources/builder-resources/sass/app.sass", "public/css/app.css");
```
```html
<link rel="stylesheet" href="{{mix('css/app.css')}}">
```

#### ** CSS HTML **
 ```javascript
mix.sass("resources/sass/app.sass", "public/css/app.css");
```
```html
<link rel="stylesheet" href="./css/app.css">
```
<!-- tabs:end -->