class GuessingGame {
    constructor(first = null, last = null, assumption = 0) {
        this.first  = first;
        this.last   = last;
        this.assumption = assumption;
    }

    setRange(min, max) {
        this.first = min;
        this.last  = max;
        this.assumption = Math.ceil((this.first + this.last)/2);
    }

    guess() {
      return this.assumption;
    }

    lower() {
      this.last = this.assumption;
      this.assumption = Math.ceil((this.first + this.last)/2);
    }

    greater() {
       this.first = this.assumption;
       this.assumption =  Math.ceil((this.first + this.last)/2);
    }
}

module.exports = GuessingGame;
