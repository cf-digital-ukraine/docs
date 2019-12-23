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
Приведенный ниже скрипт вноситься в самый конец тега `<head>`.
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
Здесь объявляется объект ``site`` который в дальнейшем будет использован для быстрого доступа к самым частым значениям. Этот объект зарезервирован системой, и его изменение приведет к полному отказу работы.
Объект необходимо наполнять нужными вам значениями, но не переписывать существующие:  
- `site.language`
- `site.theme`
- `site.isInternerExplorer`
- `site.filterDelimiters`
- `site.filter`
- `site.checkout`




### system.js

Расположение `resources/builder-resources/js/system.js`  
Файл отвечает за вызов системных классов, функций и переменных.
  
#### Глобальные переменные:  

`templateTriggers`: данный объект служит для быстрого изменения триггеров шаблона.
Детальное описание каждого компонента и его применение описано в разделе [Реализованные-модули](/dev/front/structure?id=Реализованные-модули):
* attributes
     - [checkout](/dev/front/structure?id=checkout)
     - [comparison](/dev/front/structure?id=checkout)
     - [cart](/dev/front/structure?id=checkout)
     - [favorite](/dev/front/structure?id=checkout)
     - [filter](/dev/front/structure?id=checkout)
     - [forms](/dev/front/structure?id=checkout)
     - [pagination](/dev/front/structure?id=checkout)
* [cookie](/dev/front/structure?id=checkout)


```javascript
global.templateTriggers = {
    attributes: {
        checkout: {
            delivery: {
                trigger: 'data-checkout="delivery"',
                template: 'select'
            },
            payments: {
                trigger: 'data-checkout="payments"',
                template: 'select'
            },
            deliveryPrice: 'data-delivery-price'
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

>[!WARNING]
>Здесь проставляются все атрибуты-триггеры, которые необходимы для расстановки в шаблоне. Меняя их здесь, так же необходими их изменить в шаблоне.

#### Глобальные функции:
 - `sendStatistics`
 - `paginateDefault`
 - `productAction`
 - `changeCount`
 - `repeatOrder`
 - `callModal`
 - `formControllerInit`

#### Вспомогательные функции:
 - `onOpenModal`
 - `onCloseModal`

#### Вызываемые классы:
 - `UpdateTab`
 - `Filter`
 - `Checkout`


Необходимо обратить внимание на то, что в системе предусмотрено 2 варианта вызова модуля:
 - непосредственно через управляющий атрибут `onclick`, `onchange`
 - через data-* атрибуты
 - вызом Класса в файле `system.js` 
 
Это вызвано оптимизаций ответов сервера и обработкой этих ответов.  
Таблица data-* атрибутов:


Когда модуль вызывается первым методом, для него предусмотрена глобальная функция, которая задана в файле system.js
Если же модуль вызывается вторым методом, значит он запущен через класс в файле  system.js
Подробное описание метода вызова будет в каждом модуле.


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



### Checkout


<!-- tabs:start -->
#### ** javascript **
```javascript
checkout: {
    delivery: {
        trigger: 'data-checkout="delivery"',
        template: 'select'
    },
    payments: {
        trigger: 'data-checkout="payments"',
        template: 'select'
    },
    deliveryPrice: 'data-delivery-price'
}
```
#### ** html **
```html
<select name="delivery" data-checkout="delivery">
    <option data-placeholder="true" value="">Спосіб доставки*</option>
    <option value="1" data-options="{'price': false, 'payments': '[1]'}">Самовывоз</option>
    <option value="2" data-options="{'price': false, 'payments': '[1]'}">Новою Поштою</option>
</select>
```
<!-- tabs:end -->


Параметр|Тип данных|Обязательно|Описание
-|-|:-:|-
| |-| 
| |-| 


### ParseResponse

Асинхронный класс прослойка между запросом и ответом сервера. Вызов только с файла *.js.
По сути его вызывать кроме 2х мест(AxiosGet/AxiosPost), больше нигде не нужно, поскольку все запросы идут через эти классы и имеют функции
обратного вызова `complete` и `fail`  

```javascript
new ParseResponse(response, initiator).then(() => {
    //дополнительные обработки  ;
});
```
Параметр|Тип данных|Обязательно|Описание
-|-|:-:|-
response|  **Object**  |+| Данныые полученные от сервера.
initiator|  **HTMLElement**  |-| Необходим для манипуляций с елементом который инициировал запрос.
