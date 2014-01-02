function cargarTabla(){
	var tabla = document.getElementById("tabla");
	var string="";
	var i = 0;

	for (i in location){
		string+="<tr>";
		string+="<td>"+i+"</td>";
		if(typeof location[i] === "string")
			string+="<td>"+location[i]+"</td>";
		else
			string+="<td>No imprimible</td>";
		string+="</tr>";
	}

	tabla.innerHTML="<tbody>"+string+"</tbody>"
			
}

