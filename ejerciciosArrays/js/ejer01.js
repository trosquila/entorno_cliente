function ejer01(){
    let array = [];
    let control = true;
    
    while(control == true){
        try {
            let numeroUser = Number(prompt('Inserte un número'));
            let nombreUser = prompt('Inserte un nombre');
            let guardado = confirm('¿desea guardar los datos?');
            if(!NaN(numeroUser)){
                if(guardado == true){
                if(numeroUser >= 0){
                    array.splice(numeroUser,1, nombreUser);
                }else{
                    array.push(nombreUser);
                }
                }else{
                    if(numeroUser >= 0){
                        array.splice(numeroUser,1);
                    }else{
                        array.pop(nombreUser);
                    }
                }
                console.log(array);   
            }else{
                control = false;
            }
            
        } catch (error) {
            console.warn('Hubo un error');
            control = false;
        }
    }
}
ejer01();