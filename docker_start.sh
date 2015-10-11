#!/bin/sh

docker run -ti -v $(readlink -f .):/home/swuser/app/ -w /home/swuser/app/ -p 3000:3000 --user swuser $(id -un)/piet-react bash

