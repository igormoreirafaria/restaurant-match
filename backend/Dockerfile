# Stage 1: Build the Kotlin Spring Boot application
FROM gradle:8.3-jdk17 AS build
WORKDIR /app

# Copy the build.gradle.kts and settings.gradle.kts files
COPY build.gradle.kts settings.gradle.kts ./

# Copy the entire source coded
COPY src/ src/

# Build the application
RUN gradle clean build

# Stage 2: Create the final image
FROM openjdk:17-alpine
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/build/libs/restaurant-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot application listens on (if applicable)
EXPOSE 8080

# Specify the command to run your Spring Boot application
CMD ["java", "-jar", "app.jar"]
