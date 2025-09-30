function ejer05(){
    let numUser = Number(prompt("inserte un número"));
    const cubo = num => numUser * numUser * numUser;
    console.log(cubo(numUser));
}
ejer05();