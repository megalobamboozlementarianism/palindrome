// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Add a `blank` boolean test to all strings.
String.prototype.blank = function() {
  if (this.length = 0) {
    return true;
  } else if (this.includes(/\s+/)) {
    return true;
  } else {
    return false;
  }
}




// Defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    this.string = string;
    return this.string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Makes the phrase LOUDER.
//  this.louder = function() {
//    let processedContent = this.content.toUpperCase();
//    return processedContent;
//  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

let greeting = new Phrase("Hello, world!");
