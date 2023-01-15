let vote_1 = prompt('Service quality assessment? (0-10)');

let vote_2 = prompt('Staff performance appraisal? (0-10)');

let vote_3 = prompt('Website evaluation? (0-10)');

alert(' Average level of service ' + (+vote_1 + +vote_2 + +vote_3) / 3);