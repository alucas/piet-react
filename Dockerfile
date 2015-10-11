FROM alucas/nodejs

RUN npm install -g rimraf
RUN npm install -g webpack

RUN mkdir -p /home/swuser && groupadd -r swuser -g 1000 && useradd -u 1000 -r -g swuser -d /home/swuser -s /sbin/nologin -c "Docker image user" swuser && chown -R swuser:swuser /home/swuser

