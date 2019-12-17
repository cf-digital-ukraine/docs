## Краткое описание.

Данный документ предназначен для технических специалистов которые будут верстать проект под систему DeltaCMF.
Так как система построена на базе Laravel, она использует Blade шаблонизатор, подробную техническую документацию
по работе с ним можно найти на [**официальном сайте**](https://laravel.com/docs/5.8/blade).  
Также необходимо учесть архитектуру(дерево) шаблона,
которое описано в технической документации по Back-End части в разделе Blade. Там подробно расписано
для чего служит каждый модуль и какие переменные доступны для использования.
Часть информации Back-End и Front-End документации будет пересекаться.

Корневая директория с исходными файлами Front-end\`a расположены в директори:
``resources/builder-resources``  
Более детально структура исходников описана в разделе [**Шаблон**](/dev/front/template?id=Обязательная-структура-каталолов). 

>[!WARNING] Важно!  
>Этот шаблон включает как рекомендуемые инструменты так и необходимые системные классы которые необходимы для полноценной работы сайта. Список классов и как с ними работать, будет описан ниже. 

Также необходимо учесть что данный шаблон стоит всегда адаптировать под каждый проект, адаптация заключается в проставлении путей и указании всех зависимостей для проекта, поскольку те или иные инструменты не всегда нужны.

>[!NOTE]Большая часть системных модулей имеет привязки друг к другу и их наличие в проекте обязательно, но это никоим образом не влияет на структуру фронта. Каждый из них выполняет свою задачу.