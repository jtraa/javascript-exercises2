let re;
//Literal Characters
re= /hello/;
re= /hello/i;

//Metacharacter symbols
re = /^h/i; // Must start with
re = / world$/i; // Must ends with
re = /^hello world$/i; // Must begin and end with
re = /^h.llo world$/i; // Matches any ONE character
re = /h*llo/i; // Matches any 0 or more times
re = /gre?a?y/i; // Optioinal character
re = /gre?a?y\?/i; // Escape character

//Brackets [] = Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/i;  // Must be an G or F
re = /[^GF]ray/i;  // Match anything except a G or F
re = /[A-Z]ray/i;  // Match any letter
re = /[0-9][0-9]ray/;   // Match any digit

//Braces {} = Quantifiers
re = /Hel{2}o/i;  // Must occur exactly (m) amount of times
re= /Hel{2,3}/i; // Multiple
re= /Hel{2,}/i; // Must occur at least {n} times

//Parentheses () - Grouping
re = /^([0-9]x){3}$/

//string to match
const str = '3x3x3x';

//Log results
const result = re.exec(str);
console.log(result);


function reTest(re, str){
    if(re.test(str)){
        console.log((`${str} matches ${re.source}`));
    }else
    console.log((`${str} does NOT match ${re.source}`));
}

reTest(re, str);