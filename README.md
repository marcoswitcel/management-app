# Management App

## Front-end React

Como rodar o projeto front-end:
```
cd manager-project
npm install
npm run start
```

## Backe-end (API) Lumen

Como rodar a API:
```
cd backend-api
composer install
composer run post-root-package-install
````
Insira as credenciais no arquivo .env
````
php artisan migrate
php -t public -S localhost:8082
````