# COPY --from=build ["/usr/src/app/dist/bisema-basic", "/usr/share/nginx/html"]
FROM nginx:alpine
LABEL autho="bisema-basic"

COPY ./bisemaa /usr/share/nginx/html
