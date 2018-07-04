import Web3 from 'web3'

const main = "wss://mainnet.infura.io/ws"
const ropesten = ""
const rinkeby = "wss://rinkeby.infura.io/ws"

let getWeb3 = new Promise(function(resolve, reject) {

  window.addEventListener('load', function() {
    console.log(new Web3)
    const web3 = new Web3(new Web3.providers.WebsocketProvider(main));

    const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
      if (error) return console.error(error);
    }).on('data', (blockHeader) => {
      console.log('data: ', blockHeader);
    });

    subscription.unsubscribe((error, success) => {
      if (error) return console.error(error);

      console.log('Successfully unsubscribed!');
    });

    var results = {
      web3: web3,
    }
    resolve(results)
  })
})

export default getWeb3
