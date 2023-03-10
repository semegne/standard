# COPY --from=build ["/usr/src/app/dist/bisema-basic", "/usr/share/nginx/html"]
FROM nginx:alpine
LABEL autho="bisema-basic"

COPY ./bisema-basic /usr/share/nginx/html
