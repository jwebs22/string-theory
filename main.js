//xify

function xify(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        newStr += "x";
    }
    return newStr;
}

console.log(xify("hello"));
console.log(xify("hi There"));


//yellingChars

function yellingChars(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        newStr += str[i] + "!";
    }
    return newStr;
}

console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

//indexedChars

function indexedChars(str)
{
    let newStr = ""

    for (let i = 0; i < str.length; i++)
    {
        newStr += i + str[i];
    }
    return newStr;
}

console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

//exclaim

function exclaim(str)
    {
        let newStr = "";

        for (let i = 0; i < str.length; i++)
        {
            if (str[i] === "?" || str[i] === ".")
            {
                newStr += "!";
            } else
            {
                newStr += str[i];
            }
        } 
        return newStr;
    }

console.log(exclaim('What are you doing? Are you a fool?'));
console.log(exclaim('This is fine.'));


//truncate

function truncate(str)
{
    let newStr = "";

    for (let i = 0; i <= 14; i++)
    {
        newStr += str[i];
    }
    return newStr + "...";
}

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));


//ciEmailify

function ciEmailify(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === " ")
        {
            newStr += ".";
        } else
        {
            newStr += str[i];
        }
    }
    return newStr.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));


//reverse

function reverse(str)
{
    let newStr = "";

    for (let i = str.length-1; i >= 0; i--)
    {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse('colin'));
console.log(reverse('mesuara'));

//onlyVowels

function onlyVowels (str)
{
    let newStr = "";
    for (let i = 0; i < str.length; i++)
    {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u")
        {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));

//crazyCase

function crazyCase(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        if ([i] % 2 === 0)
        {
            newStr += str[i].toLowerCase();
        } else
        {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(crazyCase("hello"));
console.log(crazyCase("multiple words here"));
console.log(crazyCase("YELLING"));


//titleCase

function titleCase(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        if (i === 0)
        {
            newStr += str[i].toUpperCase();
        } else if (str[i] === " ")
        {
            newStr += " " + str[i + 1].toUpperCase();
            i++;
        } else
        {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}


console.log(titleCase("return of the king"));
console.log(titleCase("cOde iMMerSives"));


//camelCase

function camelCase(str)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        if (i === 0)
        {
            newStr += str[i].toLowerCase();
        } else if (str[i] === " ")
        {
            newStr += str[i + 1].toUpperCase();
            i++;
        } else
        {
            newStr += str[i];
        }
    }
    return newStr;

}

console.log(camelCase("oh Hello"));
console.log(camelCase("well yeah of course"));
console.log(camelCase("Boy howdy"));


// //crazyCase2ReturnOfCrazyCase Not done**

// function crazyCase2ReturnOfCrazyCase(str)
// {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i] === " ")
//         {


//             i++;
//         }
//         else if ([i] % 2 === 0)
//         {
//             newStr += str[i].toLowerCase();
//         } else
//         {
//             newStr += str[i].toUpperCase();
//         }
//     }
//     return newStr;
// }

// console.log(crazyCase2ReturnOfCrazyCase("multiple words here"));
// console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'));