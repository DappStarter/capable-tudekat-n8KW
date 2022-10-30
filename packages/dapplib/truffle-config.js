require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note spike prosper grace force fringe general'; 
let testAccounts = [
"0x0dfb610e2fc51ce2e89a5a80223ad289c6f317992ca2d4f6ecb39d3d01b05fe6",
"0x8e9549088ff58fb5d628a1de072165834cd77bbdca73bdc9729906855b4de904",
"0x650eac4a25cda47695c4c9e5dbabf0f896408455297d33c5e0a8b6bd745295d7",
"0xe512cd3dd72cfa75d8126f1cf1193fe1befb6da520ddd3cd03a0edd1e2fe9671",
"0xa1f9b5a2929664a77272b59f095d9f91c6852dcdde8a66b55d355c621ef72d09",
"0x4741cf0c8b79807fecf50ed6644c9f7a352650dc584e0578d51768c897a27118",
"0x8976a251aca3403b132b677c3614cfe05abe62726a49d28ea9023ce198707223",
"0x9b3b12053b5c47137773a0c9101d5abf3b6edd93caeb265ff7e194575b1eb7da",
"0x55370c43c8b9b09f4fe6b4f9144ade50338ddfe42cd47536a5bfb8c4f88b79ac",
"0xccf92207e40bee892324b3076c408b2e3ba1d2e8e90ec93cb2b43ad14a0394be"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

