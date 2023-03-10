# COPY --from=build ["/usr/src/app/dist/bisemaa", "/usr/share/nginx/html"]
FROM nginx:alpine
LABEL autho="bisemaa"

COPY ./bisemaa /usr/share/nginx/html
