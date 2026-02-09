<script setup>
//obtener primerDiaMes
const generarCalendario = () =>{
    let calendario = [];

    const mesFebrero = new Date(2021, 2, 1);
    const primerDiaMes = mesFebrero.getDay();
    const numeroDias = diasEnUnMes(mesFebrero.getMonth(), mesFebrero.getFullYear());
    let dia = 0;
    
    for( let s = 0; s < 5; s++){
        let semana = [];
        for (let d = 0; d < 7; d++) {
            if(dia < primerDiaMes || dia > numeroDias){
                semana.push('');
            }else{
                semana.push(dia);
            }
            dia++;
        }
        calendario.push(semana);
    }
    return calendario;

}

function diasEnUnMes(mes, year) {
    return new Date(year, mes, 0).getDate();
}
let calendario = generarCalendario();


</script>
<style>
.contenedorTabla{
    margin-top: 20px;
}
.calendario {
    border-collapse: collapse;
    width: 60%;
}

.calendario,
th,
td {
    border: 1px solid black;
    text-align: center;
}

th {
    padding: 5px 10px;
    background-color: rgb(255, 223, 182);
}
</style>
<template>
    <div class="contenedorTabla">
        <table class="calendario">
            <tr>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sabado</th>
                <th>Domingo</th>
            </tr>
            <tr v-for="(semana, index) in calendario" :key="index">

                <td v-for="(dia, index) in semana" :key="index">
                    {{ dia }}   
                </td>

            </tr>
        </table>
    </div>

</template>