function shout(string) {
    return string.toUpperCase("Hello");
}

function whisper(string) {
    return string.toLowerCase("Hello")
}

function logShout(string) {
    console.log(string.toUpperCase("hello"));
}

function logWhisper(string) {
    console.log(string.toLowerCase('hello'));
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
  
    if (string.toUpperCase() === string) {
      return "YES INDEED!"
    }
  
    if (string === "Let's have dinner together!") {
      return "I would love to!"
    }
  }

