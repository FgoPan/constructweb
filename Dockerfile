FROM packages.glodon.com/docker-pcop-releases/base/nginx:1.13.12
ARG GIT_COMMIT
ENV PCOP_WEB_NAME pcop_platform_web
COPY nginx.conf /usr/share/nginx/$PCOP_WEB_NAME/default.conf
ENV  PCOP_HOST pcop.glodon.com
ENV GIT_COMMIT=${GIT_COMMIT}
COPY dist /usr/share/nginx/$PCOP_WEB_NAME
CMD envsubst < /usr/share/nginx/$PCOP_WEB_NAME/default.conf > /etc/nginx/conf.d/$PCOP_WEB_NAME.conf && nginx -g 'daemon off;'