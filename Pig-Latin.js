
function translatePigLatin(str) {
  
    return str.match(/^[aeiou]/) ? 
      str + "way" : 
      str.replace(/(^[^aeiou]+)(\w+)/, "$2$1") + "ay";
      // regex parens remember matches into an array
}

translatePigLatin("consonant");
