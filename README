```sh
npx buidler compile
npx buidler run scripts/mytest.js
```
produces
```
All contracts have already been compiled, skipping compilation.
Files deployed to: 0xe6e9986bee76A976B3495fEcFF7dA79c50A8C1fb
web3 version: 1.3.0
Error: Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.
    at ABICoder.decodeParameters (/home/porton/Projects/bug/test-web3-read-int128/node_modules/web3-eth/node_modules/web3-eth-abi/lib/index.js:286:15)
    at Contract._decodeMethodReturn (/home/porton/Projects/bug/test-web3-read-int128/node_modules/web3-eth/node_modules/web3-eth-contract/lib/index.js:470:22)
    at Method.outputFormatter (/home/porton/Projects/bug/test-web3-read-int128/node_modules/web3-eth/node_modules/web3-eth-contract/lib/index.js:760:42)
    at Method.formatOutput (/home/porton/Projects/bug/test-web3-read-int128/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:147:54)
    at sendTxCallback (/home/porton/Projects/bug/test-web3-read-int128/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:523:33)
    at /home/porton/Projects/bug/test-web3-read-int128/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:293:9
    at cb (util.js:207:31)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
```
