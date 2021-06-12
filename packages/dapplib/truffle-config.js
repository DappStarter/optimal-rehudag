require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth sister public install cart flush giant'; 
let testAccounts = [
"0x38cb63b1f77a264507c65118db27fb2ef2e0140662a01db98c543715d80bf015",
"0xdac79ee08b502a759f1657956587ed0601bbca3ac495b65197b0a02f965f5297",
"0xaafab5c9d799575035cc9b73ff0c16873b4c3042fd8fdadbf99f8d26e149716d",
"0x46d455cbd525116e25a149f6c0b75ba9133307483c1a9561ebba84da1883e4ac",
"0x778327d454d85bda708c30fe14e0e47b751dbd97851c913a3691773e4cd63b58",
"0x27a3c5dd5350badc44b8202ee1597cc6e4ede476cf21c86fd4a7d609ed7fecd5",
"0xb3c676fb25f73a139c91f7410f6e800d941b13bc9523dd90a09a123815c35e2d",
"0x329f2c2010835f8e1cc31526f23f941bcba04540b1abeb2e78aba865bbe3ad65",
"0x2c5f862224216e85361541fe8c7e4ca1c94c4826a963223842e34479489f529b",
"0xa584730d077f8e29405f542ce4f1977be73359addcd2160a54ad4cc2f1cca0b3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

