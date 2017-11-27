
function titleCase(str) {
  str = str
      .toLowerCase()
      .split (" ")
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
        })
      .join(" ");
  return str;
}

titleCase("I'm a little tea pot");
