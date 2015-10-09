#!/bin/sh

docker run -ti -v $(readlink -f .):/app/ -w /app/ -p 3000:3000 alucas/piet-react bash
