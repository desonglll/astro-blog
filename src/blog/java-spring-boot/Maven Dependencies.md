
## Spring Boot

```xml
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-web</artifactId>  
</dependency>
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-test</artifactId>  
    <scope>test</scope>  
</dependency>  
<dependency>  
    <groupId>org.mybatis.spring.boot</groupId>  
    <artifactId>mybatis-spring-boot-starter-test</artifactId>  
    <version>3.0.4</version>  
</dependency>
```

## JPA Java Persistence API

```xml
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-data-jpa</artifactId>  
</dependency>
```

## Flyway DB

```xml
<dependency>  
    <groupId>org.flywaydb</groupId>  
    <artifactId>flyway-core</artifactId>  
</dependency>  
<dependency>  
    <groupId>org.flywaydb</groupId>  
    <artifactId>flyway-database-postgresql</artifactId>  
</dependency>
```

## Mybatis

```xml
<dependency>  
    <groupId>org.mybatis.spring.boot</groupId>  
    <artifactId>mybatis-spring-boot-starter</artifactId>  
    <version>3.0.4</version>  
</dependency>
```

## AssertJ

```xml
<dependency>  
    <groupId>org.assertj</groupId>  
    <artifactId>assertj-core</artifactId>  
    <version>3.27.2</version>  
    <scope>test</scope>  
</dependency>
```

## Jupiter 5 Junit 5

```xml
<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.13.0-M3</version>
    <scope>test</scope>
</dependency>
```
## Test Containers

```xml
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-testcontainers</artifactId>  
    <scope>test</scope>  
</dependency>  
<dependency>  
    <groupId>org.testcontainers</groupId>  
    <artifactId>testcontainers</artifactId>  
    <version>1.21.0</version>  
    <scope>test</scope>  
</dependency>  
<dependency>  
    <groupId>org.junit.jupiter</groupId>  
    <artifactId>junit-jupiter</artifactId>  
    <version>5.8.1</version>  
    <scope>test</scope>  
</dependency>  
<dependency>  
    <groupId>org.testcontainers</groupId>  
    <artifactId>junit-jupiter</artifactId>  
    <version>1.21.0</version>  
    <scope>test</scope>  
</dependency>  
  
<dependency>  
    <groupId>org.testcontainers</groupId>  
    <artifactId>postgresql</artifactId>  
    <version>1.21.0</version>  
    <scope>test</scope>  
</dependency>
```

## Lombok

```xml
<dependency>  
    <groupId>org.projectlombok</groupId>  
    <artifactId>lombok</artifactId>  
    <optional>true</optional>  
</dependency>
```

## Mapstructure

```xml
<dependency>  
    <groupId>org.mapstruct</groupId>  
    <artifactId>mapstruct</artifactId>  
    <version>1.6.3</version>  
</dependency>  
<dependency>  
    <groupId>org.mapstruct</groupId>  
    <artifactId>mapstruct-processor</artifactId>  
    <version>1.6.3</version>  
    <scope>provided</scope>  
    <optional>true</optional>  
</dependency>

<plugin>  
    <groupId>org.apache.maven.plugins</groupId>  
    <artifactId>maven-compiler-plugin</artifactId>  
    <version>3.8.1</version>  
    <configuration>  
       <source>${java.version}</source>  
       <target>${java.version}</target>  
       <annotationProcessorPaths>  
          <path>  
             <groupId>org.mapstruct</groupId>  
             <artifactId>mapstruct-processor</artifactId>  
             <version>1.6.3</version>  
          </path>  
          <path>  
             <groupId>org.projectlombok</groupId>  
             <artifactId>lombok</artifactId>  
             <version>1.18.38</version>  
          </path>  
          <path>  
             <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok-mapstruct-binding -->  
             <groupId>org.projectlombok</groupId>  
             <artifactId>lombok-mapstruct-binding</artifactId>  
             <version>0.2.0</version>  
          </path>  
       </annotationProcessorPaths>  
    </configuration>  
</plugin>
```

