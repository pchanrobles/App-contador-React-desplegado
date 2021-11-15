// #1 registrando serviceWorker

//if('serviceWorker' in navigator)

//#2(las dos son lo mismo)
if(navigator.serviceWorker)
{
    navigator.serviceWorker.register('./sw.js')
    // console.log('si existe')
}