window.onload = () =>{

   'use restrict';
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }


}