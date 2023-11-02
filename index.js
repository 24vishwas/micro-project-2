// import json from './food.json';
// const json = require("./food.json");
import json from "./food.json" assert { type: 'json' };; 


function display(list){
    console.log(list)
}

const displayAllItem = (json) =>{
 return display(json);
}

displayAllItem(json)

function vegee(json){
    let vegeeCatogary = json.filter(data => data.category == "Vegetable")
display(vegeeCatogary)
}
vegee(json)

function fruity(list){
    let fruitCatogary = list.filter(data => data.category == "Fruit")
    display(fruitCatogary)
}
fruity(json);

function protien(json){
    let protein = json.filter(data => data.category == "Protein")
    display(protein)
}
protien(json)

function nuts(json){
    let nuts = json.filter(data => data.category == "Nuts")
    display(nuts)
}
nuts(json)

function grains(json){
    let grains = json.filter(data => data.category == "Grain")
    display(grains)
}
grains(json)

function dairy(json){
    let dairy = json.filter(data => data.category == "Dairy")
    display(dairy)
}
dairy(json)

function calories_above_100(json){
    let above_100 = json.filter(data => data.calorie > 100)
    display(above_100)
}
calories_above_100(json)

function calories_below_100(json){
    let below_100 = json.filter(data => data.calorie < 100)
    display(below_100)
}
calories_below_100(json)


function protien_order(json){
    let order_protien = json.sort(function(a, b){
        return  b.protiens - a.protiens;
    });
    display(order_protien)
}

protien_order(json)

function cabs_order(json){
    let order_cabs = json.sort(function(a,b){
        return a.cab - b.cab
    })
    display(order_cabs)
}

cabs_order(json)