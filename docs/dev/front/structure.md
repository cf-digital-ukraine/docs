## Глобальные переменные и конфигурация проекта.

Ключевые файлы в структуре:

### app.blade.php

Расположение `resources/views/layouts/app.blade.php`  
Главный файл шаблона сайта. Здесь подключаются файлы стилей CSS и JavaScript файлы

<!-- tabs:start -->

#### ** CSS **
Основные подключения в раздел `<head>` **перед** закрытием тега.
```html
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
```

---

Дополнительные подключения в раздел `<head>` **после** всех стилей.
Файл необходим для старых версий браузера Internet Explorer.
```html
    <link rel="stylesheet" href="{{mix('css/polyfill.css')}}">
```

#### ** JS **

Основные подключения в раздел `<body>` **перед** закрытием тега:  
 - `manifest.js` - служебный файл [webpack(см.описание)](dev/front/template?id=Настройка-и-конфигурация-webpackmixjs).  
 - `vendor.js` - Файл генерируется с помощью инструмента [webpack(см.описание)](dev/front/template?id=Настройка-и-конфигурация-webpackmixjs).  
 - `system.js` - дополнительно см. в соответствуещем [разделе](/dev/front/structure?id=systemjs) руководства.  
 - `app.js` - дополнительно см. в соответствуещем разделе руководства.  

```html
<script defer src="{{ mix('js/manifest.js') }}"></script>
<script defer src="{{ mix('js/vendor.js') }}"></script>
<script defer src="{{ mix('js/system.js') }}"></script>
<script defer src="{{ mix('js/app.js') }}"></script>
```

---

Дополнительные подключения в раздел `<body>` **перед** всеми подключениями JavaScript файлов.
Файл необходим для старых версий браузеров. Использовать полифилы только те, которые необходимы в проекте.
```html
<script defer src="{{ mix('js/polyfill.js') }}"></script>
```
<!-- tabs:end -->


#### Зарезервированная переменная `site`
Приведенный ниже скрипт расположить перед закрытием тега `<head>`.
```javascript
<script>
    window.site = {
        language: "{{ locale() }}",
        theme: "{{ asset('/') }}".replace(/\/$/, ""),
        isInternetExplorer: {{ isOldExplorer('11.0') ? 'true' : 'false' }},
        filterDelimiters: {
            afterParameter: '{{ config('seo_module.delimiters.multiple.after_parameter') }}',
            inGroup: '{{ config('seo_module.delimiters.multiple.after_data') }}',
            afterGroup: '{{ config('seo_module.delimiters.multiple.after_block') }}'
        }
    };
</script>
```
>[!DANGER]
Здесь объявляется объект ``site`` который в дальнейшем будет использован для
>быстрого доступа к самым частым значениям. Этот объект зарезервирован системой,
>и его изменение приведет к полному отказу работы.
Объект необходимо наполнять нужными вам значениями, но не переписывать существующие:  
- `site.language`
- `site.theme`
- `site.isInternerExplorer`
- `site.filterDelimiters`
- `site.filter`
- `site.checkout`


### system.js - системный

Расположение `resources/builder-resources/js/system.js`  
Файл отвечает за вызов системных классов, функций и переменных.  
#### Глобальные переменные:  
 - `templateTriggers`: данный объект служит для быстрого изменения триггеров шаблона.
>[!WARNING]
>Здесь проставляются все атрибуты-триггеры, которые необходимы для расстановки в шаблоне.
>Меняя их в объявлении, так же необходимо изменить вызовы и в шаблоне.
>Рекомендуется оставить по умолчанию, и использовать те, которые 
>описаны в разделе [Триггеры](/dev/front/structure?id=Триггеры)

```javascript
global.templateTriggers = {
    attributes: {
        checkout: {
            delivery: '[data-checkout="delivery"]',
            payments: '[data-checkout="payments"]',
            deliveryPrice: '[data-delivery-price]'
        },
        comparison: {
            link: 'data-comparison-link',
            quantity: 'data-comparison-quantity',
            item: 'data-comparison-item'
        },
        cart: {
            quantity: 'data-cart-quantity',
            total: 'data-cart-total',
            summary: 'data-cart-summary',
            item: 'data-cart-item'
        },
        favorite: {
            quantity: 'data-favorite-quantity',
            item: 'data-favorite-item'
        },
        filter: {
            products: '[data-filter="products"]',
            tags: '[data-filter="tags"]',
            totalCounters: '[data-filter="counter"]',
            loaders: '[data-filter="loading"]',
            links: '[data-filter="href"]',
            linksID: '#filter-item-',
            linksCounter: '[data-filter="href-count"]',
            pagination: '[data-filter="pagination"]',
            ranges: {
                slider: '[data-filter="range"]',
                param: '[data-filter-param]',
                min: '[data-filter="range-min"]',
                max: '[data-filter="range-max"]'
            },
            sort: {
                event: 'change',
                items: '[data-filter="sort"]'
            }
        },
        forms: {
            el: 'form[action]',
            excludeFieldsClear: ['form.personal-form-tag'],
            submitOnchange: '[data-send-onchange]',
            phoneMask: 'label input[type="tel"]'
        },
        pagination: {
            list: '[data-pagination="products"]',
            wrapper: '[data-pagination="wrapper"]',
            wantToUpdate: ['products', 'articles']
        }
    },
    cookie: {
        comparisonLink: 'compare_url',
        comparisonQuantity: 'compare_quantity',
        cartQuantity: 'cart_quantity',
        favoriteQuantity: 'favorite_quantity'
    }
    
};
```

<!-- tabs:start -->

#### ** Глобальные функции: **
Функции для корректной работы основных модулей
- `sendStatistics`
- `paginateDefault`
- `productAction`
- `changeCount`
- `repeatOrder`
- `formControllerInit`
 
#### ** Дополнительные функции: **
Их можно не использовать, на основной функционал не влияют
- `onOpenModal`
- `onCloseModal`
- `isDomainLink`
- `phoneMask`
- `loadAndResize`

#### ** Вызываемые классы: **
- `UpdateTab`
- `Filter`
- `Checkout`
- `FormController`
 
<!-- tabs:end -->


Необходимо обратить внимание на то, что в системе предусмотрено 3 варианта вызова модуля:
 - непосредственно через управляющий атрибут `onclick`, `onchange`. Когда модуль вызывается
 inline методом, для него предусмотрена глобальная функция, которая объявлена в файле system.js :
```html
<a href="/favorite" onclick="productAction(event, this, ID, 'post');"></a>
```
 - через data-* атрибуты, когда модуль вызывается таким методом - он инициализирован
классом в файле system.js:
 ```html
<a href="request-url" data-filter="href" id="filter-item-{category}{item}"></a>
```
 - вызовом класса в файле `system.js`, но в данном случае, нет дополнительных требований по разметке
 кроме как следовать всем стандартам спецификации **W3C**:
```javascript
window.site.checkout = new Checkout();
```
>[!NOTE]
>Использование разных методов вызвано оптимизаций ответов сервера и обработкой этих ответов
>для шаблонов без реактивных компонентов(Vue/React/Angular).  
>Подробное описание методов и их возможностей описано для каждой функции и класса.


### app.js - клиентский
Расположение `resources/builder-resources/js/app.js`  
Основное предназначение - кастомные отработки Front-End\`a
которые могут понадобиться в проекте. Привет jQuery)  
Также содержит зарезервированные функции:  

- `callModal` - производит вызов модального окна с системных модулей. Вынесена отдельно чтобы исключить
зависимости объемных библиотек и системы. Вы можете использовать абсолютно любую библиотеку с ее зависимостями.
Примеры асинхронного объявления:

<!-- tabs:start -->

#### ** Fancybox + jQuery **
```javascript
global.callModal = async function (src) {
    let type = 'html';
    if (src.startsWith('#')){
        type = 'inline';
    }
    return $.fancybox.open({
        src: src,
        type: type,
        beforeShow: onOpenModal,
        afterClose: onCloseModal
    });
};
```

#### ** lightGallery **
```javascript
global.callModal = async function (src) {
    let gallery = null;
    let options = {};
    if (src.startsWith('#')){
        gallery = document.getElementById(src);
    } else {
        document.body.insertAdjacentHTML('beforeend', `<div id="call-modal">${src}</div>`);
        gallery = document.getElementById('call-modal');
    }
    gallery.addEventListener('onBeforeOpen', onOpenModal, false);
    gallery.addEventListener('onBeforeClose', onCloseModal, false);
    lightGallery(gallery, options); 
    return gallery;
};
```

#### ** Асинхронный Вызов **
```javascript
callModal(src).then(function(modal) {
    console.log(modal);
});
```

<!-- tabs:end -->

- `onProductAction` - фукнция-заглушка для пост-обработки запросов от eCommerce.
Вынесена в клиенсткий файл для быстрого доступа и манипуляций с DOM не предусмотренных системой.
```javascript
global.onProductAction = function (element, data, type, method, id) {
    console.log(element, data, type, method, id);
};
```

Параметр|Тип данных|Описание
-| - | - 
element|HTMLElement|Инициатор события
data|JSON-Object|Response от сервера, регулируется Back-End\`ом
type|string|Тип запроса на сервер, может быть 3 варианта: `cart`, `favorite`, `comparison`
method|string/`false`|Метод отправки: `GET`, `POST`, `DELETE`. `False` - заглушка для тестирования.
id|string/`null`|ID - eCommerce объекта


## Реализованные модули:

### AxiosGet

Данный класс предназначен для обработки всех запросов к серверу GET методом.
Перед вызовом параметров complete/fail выполняется асинхронный вызов класса `ParseResponse`.  
Вызов только с файла *.js.  
Примеры использования:

```javascript
new AxiosGet({
   initiator: HTMLElement,
   url: LINK,
   options: DATA,
   complete: function (instance, data) {},
   always: function (instance, data) {},
   fail: function (data) {}
});
```
Параметр|Тип данных|Обязательно|Описание
-|-|:-:|-
url|  **string**  |+|Ссылка на которую отправляется запрос. Могут дополнительно передаваться параметры внутри ссылки по стандарту.
initiator|  **HTMLElement**  |-| Следует передать если отправляется форма. Необходим для обработки запросов.
options|  **Object**  |-| JavaScript объект который содержит набор параметров.
complete|  **Function**  |-| CallBack функция, вызывается после успешного выполнения запроса.
fail|  **Function**  |-| CallBack функция, вызывается в случае возникновения ошибки.
always|  **Function**  |-| CallBack функция, вызывается всегда вне зависимости от того удался запрос или нет.


### AxiosPost

Данный класс предназначен для обработки всех запросов к серверу POST методом.
Перед вызовом параметров complete/fail выполняется асинхронный вызов класса `ParseResponse`.  
Вызов только с файла *.js.  

```javascript
new AxiosPost({
   initiator: HTMLElement,
   url: LINK,
   options: DATA,
   type: STRING,
   complete: function (instance, data) {},
   always: function (instance, data) {},
   fail: function (data) {}
});
```
Параметр|Тип данных|Обязательно|Описание
-|-|:-:|-
url|  **string**  |+| Ссылка на которую отправляется запрос.
initiator|  **HTMLElement**  |-| Следует передать если отправляется форма. Необходим для обработки запросов.
options|  **Object**  |-| JavaScript объект который содержит набор параметров.
type |  **string**  |-| необязательный параметр. По умолчанию все запросы отправляются **POST** методом. Может принимать **POST, DELETE, PUT, PATH**.
complete|  **Function**  |-| CallBack функция, вызывается после успешного выполнения запроса.
fail|  **Function**  |-| CallBack функция, вызывается в случае возникновения ошибки.
always|  **Function**  |-| CallBack функция, вызывается всегда вне зависимости от того удался запрос или нет.





## Триггеры