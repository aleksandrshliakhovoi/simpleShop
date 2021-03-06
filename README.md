# test shop

## Серверная часть

Серверная часть написана на Express JS
Использовались модули
*   "express": "^4.17.1",
*   "express-handlebars": "^5.1.0",
*   "mysql": "^2.18.1",
*   "uuid": "^8.3.1",
*   "nodemon": "^2.0.5"

## Фронтэнд
На фронтэнде использовались
* Vanilla JS 
* Materializecss

##### Структура директорий
```

|- views            Директория с дополнительными библиотеками
|- routes           Директория маршрутизации проекта
|- models           Директория с моделями проекта
|- public           Публичная директория
|- view             Директория с видами страниц
    |- layouts      Директория с Основным шаблоном
    |- partials     Диреккория с шаблонами страниц
```


## База данных
##### Структура БД
```
    +----------------------------------+
    | Tables                           |
    +----------------------------------+
    | courses                          |
    | card                             |
    +----------------------------------+
    mysql> card;
    +-------------+-------------+------+-----+---------+----------------+
    | Field       | Type        | Null | Key | Default | Extra          |
    +-------------+-------------+------+-----+---------+----------------+
    | idcard      | int         | NO   | PRI | NULL    | auto_increment |
    | cardcourses | varchar(45) | NO   |     | NULL    |                |
    | cardprice   | varchar(45) | NO   |     | NULL    |                |
    +-------------+-------------+------+-----+---------+----------------+
    mysql> courses;
    +-------+--------------+------+-----+---------+----------------+
    | Field | Type         | Null | Key | Default | Extra          |
    +-------+--------------+------+-----+---------+----------------+
    | id    | int          | NO   | PRI | NULL    | auto_increment |
    | title | varchar(45)  | NO   |     | NULL    |                |
    | price | int          | NO   |     | NULL    |                |
    | img   | varchar(255) | NO   |     | NULL    |                |
    | uuid  | varchar(45)  | NO   |     | NULL    |                |
    +-------+--------------+------+-----+---------+----------------+
