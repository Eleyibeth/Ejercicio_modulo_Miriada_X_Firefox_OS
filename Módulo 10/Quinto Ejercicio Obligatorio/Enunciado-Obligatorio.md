#Explicación de la tarea

Modificar la aplicación con geolocalización en Google Maps para cuando se cierre la App, se guarde la ruta en una variable de localStorage. Al volver a abrir la App deberá reproducir la ruta que se cargo en localStorage, en vez de cargar un mapa limpio, como hace el ejemplo presentado.

Recomendación: guardar  la ruta como un array de posiciones, donde cada posición es un array de [lat, lng], por ejemplo:
   
     [[-1.040, 11.029], [0.040, 10.029], [5.040, 12.030]]
 
Además se debe incluir un boton de inicializar, que cargue un mapa limpio centrado en nuestra posición, colocando un marcador en dicho punto.
 
Guardar el array en localStorage serializado con JSON.stringify y recuperarlo de localStorage deserializando con JSON.parse.
 
Publicar la App como aplicaciones hosted y packaged en el directorio público de Google Drive que se ha creado cada participante y comprobar que se instala correctamente en el simulador de FirefoxOS.