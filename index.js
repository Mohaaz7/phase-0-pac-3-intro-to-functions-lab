// Function 1: shout
function shout(string) {
  return string.toUpperCase();
}

// Function 2: whisper
function whisper(string) {
  return string.toLowerCase();
}

// Function 3: logShout
function logShout(string) {
  console.log(string.toUpperCase());
}

// Function 4: logWhisper
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Function 5: sayHiToHeadphonedRoommate
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
