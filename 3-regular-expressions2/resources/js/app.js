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


//string to match
const str = 'Gray?';

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