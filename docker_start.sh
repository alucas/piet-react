#!/bin/sh

docker run -ti -v $(readlink -f .):/app/ -w /app/ alucas/nodejs bash
