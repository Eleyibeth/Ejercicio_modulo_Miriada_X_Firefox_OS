var map, lat, lng, positionList;

$(function(){

  function enlazarMarcador(e){

    dibujarRuta([lat,lng], [e.latLng.lat(),e.latLng.lng()])

    positionList.push([e.latLng.lat(), e.latLng.lng()]);

        map.addMarker({ lat: lat, lng: lng});  // pone marcador en mapa
      };

      function dibujarRuta(posOrigen, posDestino){
        // muestra ruta entre marcas anteriores y actuales
        map.drawRoute({
          origin: [posOrigen[0], posOrigen[1]],  // origen en coordenadas anteriores
          // destino en coordenadas del click o toque actual
          destination: [posDestino[0], posDestino[1]],
          travelMode: 'driving',
          strokeColor: '#000000',
          strokeOpacity: 0.6,
          strokeWeight: 5
        });

        lat = posDestino[0];   // guarda coords para marca siguiente
        lng = posDestino[1];
      }

      function geolocalizar(){
        GMaps.geolocate({
          success: function(position){

            lat = position.coords.latitude;  // guarda coords en lat y lng
            lng = position.coords.longitude;

            map = new GMaps({  // muestra mapa centrado en coords [lat, lng]
              el: '#map',
              lat: lat,
              lng: lng,
              click: enlazarMarcador,
              tap: enlazarMarcador
            });
            map.addMarker({ lat: lat, lng: lng});  // marcador en [lat, lng]
            positionList = [[lat, lng]];

            inicializar();
          },
          error: function(error) { alert('Geolocalización falla: '+error.message); },
          not_supported: function(){ alert("Su navegador no soporta geolocalización"); },
        });
      };

      $(window).bind ('beforeunload', function(){
          localStorage.positions = JSON.stringify(positionList);
        }
      );

    function inicializar(){
        positionList = JSON.parse(localStorage.positions);
        
        // Si hay más de dos posiciones
        if(positionList.length > 1){
          for (var i = 0; i < positionList.length; i++) {
            // Creamos el marcador
            map.addMarker({ lat: positionList[i][0], lng: positionList[i][1]});
            if(i+1 < positionList.length){
              dibujarRuta(positionList[i], positionList[i+1]);
            }
          };
        }
      };
      
    geolocalizar();
  });



function inicializarMapa(){
      // Cargamos el valor de la variable si existe
      localStorage.positions = "";

      // Limpiamos el mapa

      map.cleanRoute();
      map.removeMarkers();

      // Ponemos las posiciones iniciales
      if (positionList.length > 0) {
        lat=positionList[0][0];
        lng=positionList[0][1];
        map.addMarker({ lat: lat, lng: lng});  
      };
      
      positionList = [positionList[0]];
      
    }