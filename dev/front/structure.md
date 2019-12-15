## Глобальные переменные и конфигурация проекта.

Ключевые файлы в структуре:
### app.blade.php
Расположение `resources/views/layouts/app.blade.php`  
Главный файл шаблона сайта, в данный момент для нас представляет интерес глобальная переменная, которая находиться в разделе `<head>`


<!-- tabs:start -->

#### ** Перед закрытием тега <\head> **

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
Здесь объявляется объект ``site`` который в дальнейшем будет использован для быстрого доступа к самым частым значениям. Этот объект зарезервирован системой, и его изменение приведет к полному отказу работы.
Объект необходимо наполнять нужными вам значениями, но не переписывать существующие:  
- `site.language`
- `site.theme`
- `site.isInternerExplorer`
- `site.filterDelimiters`
- `site.filter`
- `site.checkout`


#### ** Перед закрытием тега <\body> **

Основные подключения
```html
<script defer src="{{mix('js/manifest.js')}}"></script>
<script defer src="{{mix('js/vendor.js')}}"></script>
<script defer src="{{mix('js/system.js')}}"></script>
<script defer src="{{mix('js/app.js')}}"></script>
```
`manifest.js` - служебный файл webpack.mix.js  
`vendor.js` - см. в соответствуещем разделе руководства.  
`system.js` - см. в соответствуещем [разделе](/dev/front/structure?id=systemjs) руководства.  
`app.js` - см. в соответствуещем разделе руководства.  

Дополнительные подключения
```html
<script defer src="{{asset('js/polyfill.js')}}"></script>
```

<!-- tabs:end -->

### system.js

Расположение `resources/builder-resources/js/system.js`  
Файл отвечает за вызов системных классов, функций и переменных.  
Глобальные переменные:  
 - `templateTriggers`: данный объект служит для быстрого изменения триггеров шаблона.
 
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
Это вызвано оптимизаций ответов сервера и обработкой этих ответов.  
Таблица data-* атрибутов:

Важно! В файле system.js проставляются все атрибуты-триггеры, которые необходимы для расстановки в шаблоне. 

Когда модуль вызывается первым методом, для него предусмотрена глобальная функция, которая задана в файле system.js
Если же модуль вызывается вторым методом, значит он запущен через класс в файле  system.js
Подробное описание метода вызова будет в каждом модуле.

## Реализованные модули:

### AxiosGet

Данный класс предназначен для обработки всех запросов к серверу GET методом. Перед вызовом параметров complete/fail выполняется асинхронный вызов класса `ParseResponse`. Вызов только с файла *.js.  
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
Параметр|Тип данных|Описание
-|-|-
url|  **string**  |обязательный параметр. Ссылка на которую отправляется запрос. Могут дополнительно передаваться параметры внутри ссылки по стандарту.
initiator|  **HTMLElement**  |необязательный параметр. Следует передать если отправляется форма. Необходим для обработки запросов.
options|  **Object**  |необязательный параметр. JavaScript объект который содержит набор параметров.
complete|  **Function**  |необязательный параметр. CallBack функция, вызывается после успешного выполнения запроса.
fail|  **Function**  |необязательный параметр. CallBack функция, вызывается в случае возникновения ошибки.
always|  **Function**  |необязательный параметр. CallBack функция, вызывается всегда вне зависимости от того удался запрос или нет.