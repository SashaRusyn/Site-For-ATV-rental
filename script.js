let position = 0;
let width = 400;
let count = 3;

function prev() {
    let list = gallery.querySelector('ul');
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

function next() {
    let list = gallery.querySelector('ul');
    let listElems = gallery.querySelectorAll('li');
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.669377, lng: 23.327377 },
        zoom: 13,
    });
}

window.initMap = initMap;

function instagram() {
    window.location.href = "https://instagram.com/pylypets_expedition?igshid=YmMyMTA2M2Y=";
}