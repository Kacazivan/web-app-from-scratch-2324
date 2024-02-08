function main(){
    console.log('Hello world')
};

main();

async function getData(){
    const response = await fetch("../1.json");
    const data = await response.json();
    console.log(data);
};

getData();

