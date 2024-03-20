<template>
    <div >
      <div class="container" v-if="loaded">
      <!-- Code for the div when loaded is true -->
      <div class="columna infoMovie">
            <FichaSesion :datosSesion="sesionActual"></FichaSesion>
      </div>
     
      <div class="columna theater">
            <div class="fila" v-for="row in 12" :key="row">
              <span  v-for="seat in 10" :key="seat" >
                <img v-if="estadoButaca(row,seat)=='vip'" @click="escogerButaca(row,seat)"  width="40px" class="seat"  src="/seat_vip.png" alt="Butaca" />     
                <img v-if="estadoButaca(row,seat)=='ocupada'" width="40px" class="seat"  src="/seat.png" alt="Butaca" />
                <img v-if="estadoButaca(row,seat)=='libre'" @click="escogerButaca(row,seat)" width="40px" class="seat" src="/seat_libre.png" alt="Butaca" />
                <img v-if="estadoButaca(row,seat)=='seleccionada'" @click="escogerButaca(row,seat)"  width="40px" class="seat"  src="/seat_verde.png" alt="Butaca" />     
              </span>   
          </div>
        </div>
      <div class="columna">
        <ResumenCompra :seleccion="seleccion"></ResumenCompra>        
        <button class="btn btn-danger" @click="comprarEntradas()">Comprar</button>
      </div>
    </div>
    <div v-else>
      <!-- Code for the div when loaded is false -->
      <p>Loading...</p>
    </div>
    
    </div>
</template>

<script>
import {useCompraStore} from '../../store/compra.js'

    export default {
      data() {
            return {
              loaded:false,
              seleccion:[],
              ocupacion: [],
              sesionActual:{}
            }
        },
         created(){
            console.log("cargando datos de la sesion actual y su ocupacion")

            fetch(`https://cinema.daw.inspedralbes.cat/api.php/records/SESION/${this.$route.params.id}?join=PELICULA`)
            .then(response => response.json())
            .then(data =>{console.log(data); 
                          this.sesionActual=data; 
                          this.loaded=true;              
                          const store = useCompraStore();
                          store.sesion=this.sesionActual;
                        })
            .catch(error => console.error('Error:', error));
            
            fetch(`https://cinema.daw.inspedralbes.cat/api.php/records/ENTRADA?filter=id_sesion,eq,${this.$route.params.id}`)
            .then(response => response.json())
            .then(data =>{console.log(data); this.ocupacion=data.records.map(b=>b.id_butaca)})
            .catch(error => console.error('Error:', error));
            

        },
        methods: {
          escogerButaca(row, seat) {
            console.log("escogiendo butaca");
            const estado = this.estadoButaca(row, seat);
            const butaca = row*10+seat;

            if (estado === 'libre') {
              console.log("butaca libre");
              this.seleccion.push(butaca); // Almacena la butaca escogida
            } else if (estado === 'seleccionada') {
              const index = this.seleccion.findIndex(b => b==butaca);
              if (index !== -1) {
                this.seleccion.splice(index, 1); // Elimina la butaca escogida
              }
            }
          },
          estadoButaca(row, seat) {
            const butaca=row*10+seat;
            const ocupada = this.ocupacion.some(b => b==butaca);
            const seleccionada = this.seleccion.some(b => b==butaca);
            if (ocupada) {
              console.log("ocupada"+butaca);
              return "ocupada";
            }
            else{
              if (seleccionada) {
                console.log("seleccionada"+butaca);
                return "seleccionada";
              }
              if (row==6) {
                console.log("vip"+butaca);
                return "vip";
              }
            }
            return "libre";
          },
          comprarEntradas(){
            const store = useCompraStore();
            store.seleccion=this.seleccion;
            this.$router.push('/confirmacion');

          }
        }
      }
</script>

<style scoped>
.container {
  display: flex;
}

.columna {
  flex: 1;
  padding: 10px;
}

.theater {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fila {
  display: flex;
  justify-content: center;
}

.seat {
  margin: 5px;
}
</style>