## Демо
https://github.com/walkerman-on/rutube-survey/assets/82907949/5bf76087-d7ed-49a7-a935-b65a68208394

---

## Описание проекта
Форма опроса пользователей RUTUBE.

Выполнена кроссбраузерная адаптивная верстка по приложенным макетам в Figma для:
- [x] Главного окна с рейтингом прохождения опроса;
- [x] Окна расширенной обратной связи;
- [x] Окна с благодарностью;
- [x] Заглушки "Вы прошли опрос”.
      
Реализована следующая бизнес-логика переходов между окнами:
- [x] При выборе оценки обращения на главном экране, необходимо сохранять выбранное значение;
- [x] При активном выборе первого экрана происходит редирект на страницу с дополнительными вопросами и меняется URL;
- [x] Пока не выбраны все ответы для обязательных вопросов, кнопка **Отправить ответы** не реагирует на клики;
- [x] Каждый выбранный ответ дополнительных вопросов промежуточно сохраняется и запоминается его соответствие вопросу; при перезагрузке страницы, выбранные ранее значения вопросов отображаются как активный текущий выбор; конечная структура данных дополнительных вопросов должна выглядеть примерно следующим образом:
```
[
	{
		questionID:1,
		responseID:4
	},
	...
]
```
- [x] После заполнения всех обязательных вопросов, при клике на кнопку **Отправить ответы,** происходит редирект на страницу с благодарностью; меняется URL страницы; в консоль выводится структура всех ответов — первый выбранный рейтинг оценки и данные по всем дополнительным вопросам; происходит запоминание того, что пользователь уже отвечал по данной форме;
- [x] При повторном заходе на любую страницы формы, при условии, что пользователь ранее полностью ответил на все вопросы, происходит принудительный редирект на страницу заглушки с оповещением, что опрос пользователем уже был пройден; меняется URL страницы;
- [x] Обработаны ошибки при переходе на некорректный URL адрес.

---

## Запуск проекта

```
npm install - устанавливаем зависимости
npm start - запуск UI
npm run server - запуск сервера
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run server` - Запуск json-server
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run eslint` - Проверка ts файлов линтером
- `npm run stylelint` - Проверка scss файлов style линтером
- `npm run prettier` - Исправление ts и scss файлов
- `npm run prettier-check` - Проверка, есть ли доступные к исправлению ts и scss файлы

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design
- [ ] Ссылка на документацию - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров

- `npm run eslint` - Проверка ts файлов линтером
- `npm run stylelint` - Проверка scss файлов style линтером
- `npm run prettier` - Исправление ts и scss файлов
- `npm run prettier-check` - Проверка, есть ли доступные к исправлению ts и scss файлы

---

## Конфигурация проекта

Для разработки проект содержит Webpack конфиг

Вся конфигурация хранится в ./config

---

## pre commit хуки

В прекоммит хуках проверяем проект линтерами

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit.

---

## Технологии
React, React Router, TypeScript, Redux Toolkit, SCSS module, Webpack

---
