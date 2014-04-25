/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var pictureSource;   // origen de la imagen
    var destinationType; // establece el formato del valor devuelto 

    // Esperamos a que Cordova conecte con la cámara
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova preparado para ser usado
    function onDeviceReady() 
    {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }

    // Se ejecuta cuando la imagen se recupera correctamente desde foto 
    function onPhotoDataSuccess(imageData) 
    {
      // Si queremos ver la imagen en codificación base64
      // console.log(imageData);

      // Obtenemos el handle de la imagen
      var imagen = document.getElementById('imagen');

      // Desbloqueamos los elementos de la imagen
      imagen.style.display = 'block';

      // Mostramos la foto capturada
      imagen.src = "data:image/jpeg;base64," + imageData;
    }

    // Se ejecuta cuando la imagen se recupera correctamente desde galería
    function onPhotoURISuccess(imageURI) 
    {
      // Para ver el URI de la imagen 
      // console.log(imageURI);
      
      // Obtenemos el handle de la imagen
      var imagen = document.getElementById('imagen');

      // Desbloqueamos los elementos de la imagen
      imagen.style.visibility = "visible";
      imagen.style.display = 'block';
      // Mostramos la foto capturada
      imagen.src = imageURI;
    }

    // Función que se ejecuta cuando se pulsa el botón "Capturar foto"
    function capturePhoto() 
    {
      // Mostramos la cámara del móvil y obtenemos la imagen 
      // capturada codificada en base64
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
      { 
        quality: 50,
        destinationType: destinationType.DATA_URL 
      });
    }

    // Función que se ejecuta cuando se pulsa el botón "Capturar foto editable"
    function capturePhotoEdit() 
    {
      // Mostramos la cámara del móvil y permitimos editar la imagen, 
      // y obtenemos la imagen capturada codificada en base64
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
      { 
        quality: 50, 
        allowEdit: true,
        destinationType: destinationType.DATA_URL 
      });
    }

    // Función que se ejecuta cuando se pulsa 
    // el botón "Desde album" o "Desde librería" 
    function getPhoto(source) 
    {
      // Obtenemos la imagen del origen especificado (librería o galería)
      navigator.camera.getPicture(onPhotoURISuccess, onFail, 
      {
        quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source 
      });
    }

    // Si hay algún error
    function onFail(message) 
    {
      alert('Error al trabajar con la cámara: ' + message);
    }