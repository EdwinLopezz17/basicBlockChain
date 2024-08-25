const Block = require("./src/block");
const BlockChain = require("./src/blockchain");


async function main(){
    const blockChain = await new BlockChain();
    const block1 = new  Block({data: "block #1"});
    const block2 = new  Block({data: "block #2"});
    const block3 = new  Block({data: "block #3"});
    const block4 = new  Block({data: "block #4"});

    await blockChain.addBlock(block1);
    await blockChain.addBlock(block2);
    await blockChain.addBlock(block3);
    await blockChain.addBlock(block4);


    blockChain.print();
}

main();