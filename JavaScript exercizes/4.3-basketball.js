var average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
var mikeTeamAverage = average(116, 94, 123);
var johnTeamAverage = average(89, 120, 103);


if (mikeTeamAverage > johnTeamAverage) {
    console.log(`mike team won with the average score ${mikeTeamAverage}`);
} else if (johnTeamAverage > mikeTeamAverage) {
    console.log(`john team won with the average score ${johnTeamAverage}`);
} else {
    console.log(`A tie!
        mike team score: ${mikeTeamAverage}
        john team score ${johnTeamAverage}`);
}

var maryTeamAverage = average(97, 134, 105);

if (maryTeamAverage > mikeTeamAverage && maryTeamAverage > johnTeamAverage){
    console.log(`wait, seems like mary team is the winner!`);
}