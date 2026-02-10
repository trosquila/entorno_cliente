<script setup>
    const props = defineProps(['listadoCitas'])
//obtener primerDiaMes
const generarCalendario = () =>{
    let calendario = [];

    const mesFebrero = new Date(2021, 2, 1);
    const primerDiaMes = mesFebrero.getDay();
    const numeroDias = diasEnUnMes(mesFebrero.getMonth(), mesFebrero.getFullYear());
    let dia = {
        num: 0,
        masInfo: ''
        };
    
    for( let s = 0; s < 5; s++){
        let semana = [];
        for (let d = 0; d < 7; d++) {
            if(dia.num < primerDiaMes || dia.num > numeroDias){
                semana.push('');
            }else{
                let buscarCita = props.listadoCitas.find(element => element.dia == dia.num);
                if(buscarCita){
                    dia.masInfo = buscarCita;
                }
                
                semana.push({...dia});
            }
            dia.num++;  
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
.rojo{
    color: red;
}
</style>
<template>
    <div class="contenedorTabla">
        <table class="calendario">
            <thead>
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                    <th>Domingo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(semana, index) in calendario" :key="index">
                    <td v-for="(diaMes, index) in semana" :key="index" :class="{'rojo':diaMes.masInfo}">
                        
                        {{ diaMes.num }}{{ diaMes.masInfo }}
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>

</template>