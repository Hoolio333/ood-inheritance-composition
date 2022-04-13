class Readable {
  constructor(title) {
    this.title = title;
    this.onLoan = false;
  }

  isOnLoan() {
    return this.onLoan;
  }

  checkIn() {
    if (!this.isOnLoan()) throw new Error("item is not currently on loan");
    this.onLoan = false;
  }

  checkOut() {
    if (this.isOnLoan()) throw new Error("item is currently on loan");
    this.onLoan = true;
  }
}

class Book extends Readable {}

class Article extends Readable {}

class Newspaper extends Readable {
  checkIn() {
    throw new Error("newspapers are not available for loan");
  }

  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

class Author extends Readable {
  super(name, telNumber) {
    this.name = name;
    this.telNumber = telNumber;
  }
}

module.exports = {
  Readable: Readable,
  Book: Book,
  Article: Article,
  Newspaper: Newspaper,
  Author: Author,
};
