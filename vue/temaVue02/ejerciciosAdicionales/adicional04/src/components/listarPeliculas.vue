<script setup>
import { ref, watch, computed, nextTick } from 'vue'

const props = defineProps(['cartelera'])

const carteleraTemp = ref([])

watch(
  () => props.cartelera,
  (nueva) => {
    carteleraTemp.value = [...(nueva ?? [])]
  },
  { immediate: true, deep: true }
)

const hoy = computed(() => {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
})

function toDateInput(v) {
  if (!v) return ''
  return String(v).split('T')[0]
}

const edit = ref(null) // { index, campo: 'titulo' | 'fecha' }
const draft = ref('')

const editando = (index, campo) =>
  edit.value && edit.value.index === index && edit.value.campo === campo

async function editar(index, campo) {
  const p = carteleraTemp.value[index]
  edit.value = { index, campo }
  draft.value = campo === 'fecha' ? toDateInput(p.fechaEstreno) : (p.titulo ?? '')
  await nextTick()
}

function cancelar() {
  edit.value = null
}

function guardar() {
  if (!edit.value) return
  const { index, campo } = edit.value
  const p = carteleraTemp.value[index]

  if (campo === 'fecha') {
    if (!draft.value || draft.value < hoy.value) return
    p.fechaEstreno = draft.value
  } else {
    p.titulo = draft.value
  }

  edit.value = null
}

// --- NUEVO: clase según género ---
function claseGenero(genero) {
  const g = (genero ?? '').toLowerCase().trim()

  if (g === 'accion') return 'g-accion'
  if (g === 'comedia') return 'g-comedia'
  if (g === 'drama') return 'g-drama'

  // Tu select separa "ciencia" y "ficcion"; ambas las pintamos rosa
  if (g === 'ciencia' || g === 'ficcion' || g === 'ciencia ficcion' || g === 'ciencia ficción') {
    return 'g-scifi'
  }

  return ''
}
</script>

<template>
  <ul>
    <li
      v-for="(pelicula, index) in carteleraTemp"
      :key="pelicula.id ?? index"
      :class="claseGenero(pelicula.genero)"
    >
      <ul>
        <li v-if="!editando(index, 'titulo')" @dblclick="editar(index, 'titulo')">
          {{ pelicula.titulo }}
        </li>
        <li v-else>
          <input
            autofocus
            type="text"
            v-model="draft"
            @keydown.enter.prevent="guardar"
            @blur="cancelar"
          />
        </li>

        <li>{{ pelicula.genero }}</li>

        <li v-if="!editando(index, 'fecha')" @dblclick="editar(index, 'fecha')">
          {{ pelicula.fechaEstreno }}
        </li>
        <li v-else>
          <input
            autofocus
            type="date"
            :min="hoy"
            v-model="draft"
            @keydown.enter.prevent="guardar"
            @blur="cancelar"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.g-accion { color: red; }
.g-comedia { color: blue; }
.g-drama { color: green; }
.g-scifi { color: pink; }
</style>
