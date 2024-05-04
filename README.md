# How to run
### 1. Install NODEJS first

- Install Require Package.<br>
<code>npm install</code>

### 2. Install Metamask on browser
### 3. Install KUBO IPFS
- Download Kubo IPFS [here](https://dist.ipfs.tech/#kubo)<br>
Go to downloaded kubo folder from terminal and run <br>
```
$ ipfs daemon
```
### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save. 

### 5. Boot up local development blockchain
```
$ npx hardhat node
```

### 6. Run deploy script to migrate smart contracts
```
$ npx hardhat run scripts/deploy.js --network localhost
```
### 7. Run Tests
```
$ npx hardhat test
```

### 8. Launch Frontend
```
$ npm run dev
```

## Screenshots
![Image Alt text](/Screenshots/ss1.png)
![Image Alt text](/Screenshots/ss2.png)

## RESPECTFULLY REFERENCES TO
[Source git repository](https://github.com/dappuniversity/decentratwitter)<br>
[DAPP UNIVERSITY](https://www.dappuniversity.com/)