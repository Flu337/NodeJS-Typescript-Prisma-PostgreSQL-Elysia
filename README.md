## Установка
bun install
## Запуск сервера 
bun run src/index.ts
## Настройте базу данных:

npx prisma migrate dev --name init

npx prisma generate

# 1. Добавление преподавателя (POST)
### запрос:
curl -X POST http://localhost:3000/api/teachers \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Nikita","lastName":"Borisenko"}'

  ![Добавление преподавателя (POST)](image_2025-05-31_01-21-30.png)

  ### ответ:
  {
  "id": 4,
  "firstName": "Nikita",
  "lastName": "Borisenko"
}

# 2 Получение всех преподавателей (GET)
### запрос: 
curl http://localhost:3000/api/teachers


![Получение всех преподавателей (GET)](photo_2025-05-31_01-22-11.jpg)

### ответ:

[{"id": 4,"firstName": "Nikita","lastName": "Borisenko"}]

# 3. Получение преподавателя по ID (GET)
### Запрос:
curl http://localhost:3000/api/teachers/4

![Получение преподавателя по ID (GET)](photo_2025-05-31_01-22-26.jpg)


### ответ: 

{
  "id": 1,
  "firstName": "Nikita",
  "lastName": "Borisenko"
}


# 4. Удаление преподавателя (DELETE)
### запрос: 
curl -X DELETE http://localhost:3000/api/teachers/4

![Удаление преподавателя (DELETE)](photo_2025-05-31_01-22-36.jpg)

### ответ:
{
  "success": true
}


# 5. Проверка после удаления
### запрос:

curl http://localhost:3000/api/teachers

![Проверка после удаления](photo_2025-05-31_01-22-44.jpg)

### ответ:
[]



#### *Роутер есть, но он скрыт в Elysia.js.*
