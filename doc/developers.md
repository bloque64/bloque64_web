## Public API ##

There is two API`s which are needed to retrieve the necesary information:

* scot-api
* steem-api

## scot-api
Its a restfull api coded by @holger80 as part of the steem-engine tokens proofe of brain distribution tools.
The api can be publicly acceded via: https://scot-api.steem-engine.com/
Avalaliable documentation can be reached : https://github.com/steem-engine-exchange/scotbot-docs/tree/master/docs/api

### Read content of a post:
```shell
 curl "https://scot-api.steem-engine.com/@irvinc/dia-de-clap" -s | jq
 ```
 Output:
 ```
 


## steem-api

