

$(document).ready(function() {
    console.log( "ready!" );
});

let secondDiv = $("div:eq(1)");

$('.slider').glide({
    autoplay: false,
    arrowsWrapperClass: 'slider-arrows',
    arrowRightText: '',
    arrowLeftText: ''
});





let watch = {
    Omega: {
        name: "name1",
        serialNumber: "serialnumber1",
        brand: "brand",
        series: 'series1',
        model: "model1",
        gender: "gender1",
        watchlevel: "swiss1",
        movement: 'movement1',
        img: './img/test1.png',
    },
    Rado: {
        name: "name2",
        serialNumber: "serialnumber2",
        brand: "brand2",
        series: 'series2',
        model: "model2",
        gender: "gender2",
        watchlevel: "swiss2",
        movement: 'movement2',
        img: './img/watch.png',
    }
};
const name = document.getElementById('name');
const serialNumber = document.getElementById('serialNumber');
const brand = document.getElementById('brand');
const series = document.getElementById('series');
const model = document.getElementById('model');
const gender = document.getElementById('gender');
const watchlevel = document.getElementById('watchlevel');
const movement = document.getElementById('movement');

let watches = [];

for (let key in watch){
    if (watch.hasOwnProperty(key)){
        watches.push(key)
    }
    else{
        console.log('empty array')
    }
}

console.log('finish loop');
console.log(watches);



name.innerHTML = watches[1];
serialNumber.innerHTML = watch.Rado.serialNumber;
brand.innerHTML = watch.Rado.brand;
series.innerHTML = watch.Rado.series;
model.innerHTML = watch.Rado.model;
gender.innerHTML = watch.Rado.gender;
watchlevel.innerHTML = watch.Rado.watchlevel;
movement.innerHTML = watch.Rado.movement;

