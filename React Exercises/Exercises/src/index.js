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


ReactDOM.render(
  <React.StrictMode>
    <JokeBoard />
  </React.StrictMode>,
  document.getElementById("root")
);
