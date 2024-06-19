class HashMap {
    constructor() {
        this.arrSize = 24;
        this.loadfactor = 0.75;
        this.arr = new Array(this.arrSize);

    }




     hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
      set(key, value) {
        const hashCode = this.hash(key);

        this.arr[hashCode] = value;
      }

      get(key) {
        let value = this.arr[this.hash(key)];
        return value ? value[1] : null;
      }


      has(key) {
        return this.get(key)

      }
      length() {
        return this.arr.length(this.key);
          }

      remove(key) {
        if(this.has(key)) {
            this.arr[this.hash(key)] = null;
            return true;
        }
        return false;
      }
      values() {
        const iterator = arr.values();
        for (const letter of iterator) {
            console.log(letter);
        }
      }
      entries() {
        return this.set(key,value);
      }

      clear() {
        while (this.arr.length > 0) {
            this.arr.pop();
        }
      }

}
