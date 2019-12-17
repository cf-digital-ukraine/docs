[repository](https://github.com/cf-digital-ukraine/docs)

#### for install run  
```shell
npm i docsify-cli -g
```

#### then execute  
```shell
docsify serve docs
```


1. [Руководство по документации](https://docsify.js.org/#/quickstart)  
2. [Инормация по боковой панели](https://github.com/docsifyjs/docsify/blob/master/docs/_sidebar.md)  
3. [AmazonWS Deploy - документация](https://docsify.js.org/#/deploy?id=aws-amplify)

#### Примеры разметки в корне ``/readme.md``
<!-- tabs:start -->

#### ** Quotes and Alerts **
<br>
<br>

>[!NOTE]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

<br>

>[!TIP]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

<br>

>Lorem ipsum dolor sit amet, consectetur adipiscing elit
>>[!DANGER]Lorem ipsum dolor sit amet, consectetur adipiscing elit
>  
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

<br>

>[!WARNING]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

<br>

>[!COMMENT]
>Lorem ipsum dolor sit amet, consectetur adipiscing elit

<br>

#### ** Tables **

First Header|Second Header|Second Header|Second Header
-|-|-|-
Content Cell|Content Cell|Content Cell|Content Cell
Content Cell  | Content Cell  | Content Cell  | Content Cell

#### ** javascript **

```javascript
var globalVar;
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
    url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace

    var urls = [ "www.cnn.com", 5, globalVar, url];
    function local() {
        console.log(urls);
    }
    this.request = new XMLHttpRequest();

    this.foo = new function() {
        local();
    };
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
  unicode-range: U+000-5FF, U+1e00-1fff, U+2000-2300, U+000-5FF, U+1e00-1fff, U+2000-2300, U+000-5FF, U+1e00-1fff, U+2000-2300, U+000-5FF, U+1e00-1fff, U+2000-2300;
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
//HEREDOC_ID;

function foo() {
   $a = [0, 1, 2];
   return SomeClass::$shared;
}
```
<!-- tabs:end -->





