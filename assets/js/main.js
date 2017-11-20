/*inicio fx jquery*/
$(document).ready(function(){
	  $('.modal').modal();

	a.forEach(function(el){
		var name= el.name;
		var desc=$('<p/>', {"text": el.description});
		var img=$('<img/>', {'src': el.photo, 'class': 'img-content circle'});
		/*lista de names*/	
	$('#cont_name').append('<p>'+ el.name +'</p>');
	$('#cont_name').append(img);
	/*lista de descripciones*/
	$('#cont_desc').append(desc);
 })

});
