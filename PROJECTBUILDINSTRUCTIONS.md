# Laravel 8 API

## Chapter 1 Install and Build Laravel

``` composer create-project laravel/laravel laravel_api ```

``` php artisan key:generate ```

### Configure the .env file

``` 
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:xLPFDzcn2xRF1AjZVvWM2dp5p7k41z4aXX8l8xI8R1Q=
APP_DEBUG=true
APP_URL=http://laravelapi.co.uk

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"   

```

### General preparation

``` routes/web.php <?php // empty file  ```

Models folders

``` php artisan migrate  ```

Create ``` app/Services directory ```

Prepare ``` routes/api.php ```

Initialize GIT

```  
[dadawashingmachine@localhost laravel_api]$ git init
[dadawashingmachine@localhost laravel_api]$ git add .
[dadawashingmachine@localhost laravel_api]$ git commit -m "first commit"
[dadawashingmachine@localhost laravel_api]$ git branch -M main
[dadawashingmachine@localhost laravel_api]$ git remote add origin https://github.com/deepsquad-dev/laravel-api.git
[dadawashingmachine@localhost laravel_api]$ git push -u origin main

```
### Automated testing

Create a testing database

Create .env.testing 

Add this to  the phpunit.xml file: 
```
        <testsuite name="API">
            <directory suffix="Test.php">./tests/API</directory>
        </testsuite>
```
Remove the Feature test example

./vendor/bin/phpunit

### Install NUXT.js as frontend app
npx --version
npx create-nuxt-app frontend
cd frontend

Add NUXT urls
.
.
.

#### Abstracting API callbacks into reusable modules
Create /api directory in the frontend folder
Create file customAPI.js in the /plugins folder
Create the export, const and inject pattern

Update the nuxt.config.js file with the plugin details '~/plugins/customAPI.js'

Add the axios key to nuxt.config.js

axios: {
    baseURL: '{BASE_URL_HERE}',
    credentials: true
},

Create a module file entities.js for example and addd the code
```
export default axios => ({
    async index( params ) {
        return await $axios.$get('/api/v1/entities', {
            params: params
        });
    },
});
```
Add an import in customAPI.js
import EntitiesAPI from '@/api/entities.js'
Add the object to the const array

Call from the code as this.api.entities.index()

### Managing events witn the Event Bus

Add event-bus.js to the root of the Frontend folder






