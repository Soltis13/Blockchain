const lightningHash = (data) => {
    return data + '*';
}

class Block {
    constructor(data,hash,lastHash){
        this.data = data; //specifies what the block is storing.
        this.hash = hash; //a unique value which represents the data 
        this.lastHash = lastHash; //A link to the past block hash.
    }
}

class Blockchain {
    constructor(){
        const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');

        this.chain = [genesis];
    }

    addBlock(data) {
        //find the last block in the chain and its hash
        const lasthash = this.chain[this.chain.length-1].hash;
        //new hash is equal to data and last hash
        const hash = lightningHash(data + lasthash)
        // new blcok is equal to the data of this block
        const block = new Block(data, hash, lastHash);
        //add block to chain
        this.chain.push(block);
    }
}

const fooBlockchain = new Blockchain();
fooBlockchain.addBlock('one');
fooBlockchain.addBlock('two');
fooBlockchain.addBlock('three');

console.log(fooBlockchain);