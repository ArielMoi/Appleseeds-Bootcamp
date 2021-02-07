var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ['january', 'february', 'march', 'april', 'may', 'june', ' july', 'august', 'september', 'october', 'november', 'december']
console.log('today is ' + days[now.getDay()] + ' the ' + now.getDate() + ' of ' + months[now.getMonth()] + ', ' + now.getFullYear()); 
