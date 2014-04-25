/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function geolocation() {
   alert('no carga el plugin');
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
// onSuccess Geolocation
//                      
function onSuccess(position) {
    alert('falla');
    document.myform.texto.value =position.coords.latitude + ',' + position.coords.longitude;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('No se pudo establecer la ubicación');
}