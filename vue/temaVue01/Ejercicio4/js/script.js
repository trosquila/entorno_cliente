const { createApp, ref, reactive, computed } = Vue;

const app = createApp({
  setup() {
    let propositos = reactive([
      { texto: "Hacer deporte", hecho: false, activo: false },
      { texto: "Comer más sano", hecho: false, activo: false },
      { texto: "Viajar más", hecho: true, activo: false }
    ]);

    let nuevoProposito = reactive({texto:"", hecho:false, activo:false});
  
    let agregarProposito = () => {
      if(nuevoProposito.texto!=""){
        propositos.push({...nuevoProposito});//Clonar nuevoProposito (objeto) con ... para que se único cada propósito añadido
        nuevoProposito.texto="";
      }
    };

    let eliminarProposito = () =>{
      let confirmacion = confirm("¿Estás seguro de eliminar todos los propósitos?");
      if(confirmacion){
        propositos.splice(0);
      }
    };

    let aplicarAmarillo = computed(() =>{
      let cumplidos = 0;
      for(let i=0;i<propositos.length;i++){
        if(propositos[i].hecho===true){
            cumplidos++;
        }
      }

      if(cumplidos>3 && cumplidos<=5){
        return true;
      }
      return false;
    });

    let aplicarRosa = computed(() =>{
      let cumplidos = 0;
      for(let i=0;i<propositos.length;i++){
        if(propositos[i].hecho===true){
            cumplidos++;
        }
      }

      if(cumplidos>5){
        return true;
      }
      return false;
    });

    return {
      propositos,
      nuevoProposito,
      agregarProposito,
      eliminarProposito,
      aplicarAmarillo,
      aplicarRosa
    };
  }
});