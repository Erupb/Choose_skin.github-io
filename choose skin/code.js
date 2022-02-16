const squares = document.querySelectorAll('.skin');
const open_button = document.getElementById('button_open_container');
const num_of_elems = 21;
const skins_array = [
    {
        img: 'berettas.png'
    },
    {
        img: 'glock.png'
    },
    {
        img: 'tec.png'
    },
    {
        img: 'deagle.png'
    },
    {
        img: 'p250.png'
    },
    {
        img: 'nova.png'
    },
    {
        img: 'xm.png'
    },
    {
        img: 'sawed.png'
    },
    {
        img: 'm249.png'
    },
    {
        img: 'negev.png'
    },
    {
        img: 'mac.png'
    },
    {
        img: 'mp7.png'
    },
    {
        img: 'ump.png'
    },
    {
        img: 'p90.png'
    },
    {
        img: 'bizon.png'
    },
    {
        img: 'galil.png'
    },
    {
        img: 'ak.png'
    },
    {
        img: 'ssg.png'
    },
    {
        img: 'sg.png'
    },
    {
        img: 'awp.png'
    },
    {
        img: 'scar.png'
    }
];
let array_id;
let new_num = Math.floor(Math.random() * num_of_elems);;
let num = 0;
let opened_skins_ids = [];
open_button.addEventListener('click', open_container);

function open_container(){
    document.getElementById('1').style.transform = 'scale(0.5,0.5)';
    fill_array();
    squares.forEach(skin => {
        setTimeout(setAttributes, 1000, skin, num);
        num++;
    });   
    fadeIn();
    num = 0;
}

function fadeIn(){
    document.getElementById('1').style.transform = 'scale(2,2)';
    setInterval(transform_half, 10);
}

function transform_half(){
    document.getElementById('1').style.transform = 'transform: rotate(0.5turn);';
}

function fill_array(){
    opened_skins_ids = [];
    opened_skins_ids[0] = Math.floor(Math.random() * num_of_elems);
    console.log(opened_skins_ids[0]);
    /*
    for(let r = 1; r < num_of_elems; r++){              Для 2 и более предметов в кейсе
        get_unique_num();
        opened_skins_ids.push(new_num);
    }
    console.log(opened_skins_ids);
    */
}

function get_unique_num(){
    new_num = Math.floor(Math.random() * num_of_elems);
    if(opened_skins_ids.includes(new_num)==true){
        get_unique_num();
    }
}

function setAttributes(skin, num){
    skin.setAttribute('src', skins_array[opened_skins_ids[num]].img);
}