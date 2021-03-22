import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = [
 {
 name: "John",
 birthday: "1-1-1995",
 favoriteFoods: {
 meats: ["hamburgers", "sausages"],
 fish: ["salmon", "pike"],
 },
 },
 {
 name: "Mark",
 birthday: "10-5-1980",
 favoriteFoods: {
 meats: ["hamburgers", "steak", "lamb"],
 fish: ["tuna", "salmon", "barracuda"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["ham", "chicken"],
 fish: ["pike"],
 },
 },
 {
 name: "Thomas",
 birthday: "1-10-1990",
 favoriteFoods: {
 meats: ["bird", "rooster"],
 fish: ["salmon"],
 },
 },
 {
 name: "Johnny",
 birthday: "1-10-1992",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
 },
 },
];

function FromName(){
  let names = data.map((e)=>{
    return <p>{e.name}</p>;
  })
  console.log(names);

  return <div>{names}</div>
}

function FromNinties(){
  let born90 = data.map((e)=>{
    console.log(e.birthday.split("-")[2]);
    if (e.birthday.split('-')[2] < 1990){
      return <p>{e.name + e.birthday}</p>
    }
  })

  return <div>{born90}</div>
}



ReactDOM.render(
  <React.StrictMode>
    {/* <FromName /> */}
    <FromNinties />
  </React.StrictMode>,
  document.getElementById("root")
);
