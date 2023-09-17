# node-fetch-timeout
This is a test to validate timeout to requests made by the node-fetch lib. 

The aim is to check the **hypothesis** that the timeout consideres the download of the whole payload.

### -> Start the server

```
npm run start:server
```

### -> Test node-fetch in specific network scenarios

Use some of the methods to validate the **hypothesis**.

```
node fetch-constant-rate --total <total chunks> --interval <interval between each chunk (ms)> --timeout <timeout to be considered (ms)>
```

The request made here uses an endpoint that increments the rate of bits wrote in the response progressivelly
```
node fetch-progressive-rate --total <total chunks> --timeout <timeout to be considered (ms)>
```
