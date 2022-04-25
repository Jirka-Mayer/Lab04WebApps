# labs04js

Lab 04, Advanced Web Apps - Jiří Mayer

Assignment at: https://webik.ms.mff.cuni.cz/labs/04-js.html

## Commands for running in docker

```sh
docker build --tag lab04js-mayer:latest .

docker run -it --rm -p 8080:8080 lab04js-mayer:latest

chromium http://localhost:8080/
```

## Commands for development

```sh
npm install # project setup
npm run serve # compile and hot-reload for development
npm run build # compile and minify for production
```