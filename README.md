# 🚀 TitanFlow - Умный планировщик задач

## 🌐 Ссылки

- **Живой сайт:** https://effymeow.github.io/titanflow/
- **Бэкенд API:** https://titanflow-backend.onrender.com/api/v1
- **Репозиторий:** https://github.com/effymeow/titanflow

## 🛠️ Технологии

- **Frontend:** React 18, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Java 21, Spring Boot 3, PostgreSQL, Redis
- **Deploy:** GitHub Pages (frontend), Render.com (backend)

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Клонируем репозиторий
git clone https://github.com/effymeow/titanflow.git
cd titanflow

# Запускаем бэкенд
cd backend
./mvnw spring-boot:run

# Запускаем фронтенд (в новом терминале)
cd frontend
npm install
npm run dev

---

## 🔵 **ШАГ 2: БЭКЕНД (ДЕПЛОЙ В RENDER.COM)**

### 2.1 Создаём Dockerfile для бэкенда

📁 **Файл:** `backend/Dockerfile`

```dockerfile
# Многоступенчатая сборка для уменьшения размера
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Копируем pom.xml и скачиваем зависимости
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходный код
COPY src ./src

# Собираем jar файл
RUN mvn clean package -DskipTests

# Второй этап - запуск
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Копируем собранный jar
COPY --from=build /app/target/*.jar app.jar

# Добавляем пользователя для безопасности
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

# Переменные окружения (будут переопределены в Render)
ENV SPRING_PROFILES_ACTIVE=production
ENV DB_HOST=postgres.railway.internal

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]