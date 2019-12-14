#### for install run  
```shell
npm i docsify-cli -g
```

#### then execute  
```shell
docsify init
```  
```shell
docsify serve
```


1. [Руководство по документации](https://docsify.js.org/#/quickstart)  
2. [Инормация по боковой панели](https://github.com/docsifyjs/docsify/blob/master/docs/_sidebar.md)  
3. [AmazonWS Deploy - документация](https://docsify.js.org/#/deploy?id=aws-amplify)

#### Примеры разметки в корне ``/readme.md``

<!-- tabs:start -->

#### ** English **

Hello!

#### ** French **

Bonjour!

#### ** Italian **

Ciao!

#### ** javascript **

```javascript
var globalVar;
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
  function local() {}
  var urls = [ "www.cnn.com", 5, globalVar];
  this.request = new XMLHttpRequest();
  url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
  /* check the url to be in urls */
  this.foo = new function() {};
  foo();

  var hello = () => console.log("hello")}

    class NameClass {
    }
```

#### ** css **

```css
@import "manual.css";

@font-face {
  font-family: DroidSans;
  src: url(DroidSans.ttf);
  unicode-range: U+000-5FF, U+1e00-1fff, U+2000-2300;
}

h1.mystyle:lang(en) {
  color:blue; /* TODO: change THIS to yellow for next version! */
  border:rgb(255,0,0);
  background-color: #FAFAFA;
  background:url(hello.jpg) !important;
}
```

#### ** php **
```php
<?php
$contents = 'dsadhjsadhjas';
$heredoc = <<< HEREDOC_ID
some $contents
HEREDOC_ID;

function foo() {
   $a = [0, 1, 2];
   return SomeClass::$shared;
}
```




<!-- tabs:end -->


>[!NOTE] 
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

>[!TIP]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

>[!DANGER]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

>[!WARNING]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

>[!COMMENT]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit



