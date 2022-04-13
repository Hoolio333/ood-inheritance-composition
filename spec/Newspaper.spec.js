const { Newspaper } = require("../src/Readable.js");

describe("Newspaper", () => {
  let newspaper;
  beforeEach(() => {
    newspaper = new Newspaper("My Lovely Newspaper");
  });

  describe("#constructor", () => {
    it("has a title", () => {
      expect(newspaper.title).toEqual("My Lovely Newspaper");
    });

    it("is not on loan", () => {
      expect(newspaper.isOnLoan()).toEqual(false);
    });
  });

  describe("#checkOut", () => {
    it("raises an error ", () => {
      expect(() => newspaper.checkOut()).toThrowError(
        "newspapers are not available for loan"
      );
    });
  });

  describe("#checkIn", () => {
    it("raises an error ", () => {
      expect(() => newspaper.checkIn()).toThrowError(
        "newspapers are not available for loan"
      );
    });
  });
});
