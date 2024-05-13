
class hashmap {
    constructor() {
        this.mapArray = [];
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
        this.mapArray[key] = value; 
    }

    get(key) {
        return this.mapArray[key];
    }


    has(key) {
        return key in this.mapArray;
    }
    

    remove(key) {
        if (this.has(key)) {
            delete this.mapArray(key);
            return true;
        }        
        return false;
    }


    length() {
        return Object.keys(this.mapArray).length;
    }


    clear() {
        this.mapArray = [];
    }

  
    keys() {
        return Object.keys(this.mapArray);
    }

 
    values() {
        return Object.values(this.mapArray);
    }

    
    entries() {
        return Object.entries(this.mapArray);
    }
}

const theMap = new hashmap();
theMap.set('Antonio', 'Sala');
theMap.set('Linda', 'Jones');
theMap.set('Alice', 'Taylor');

console.log(theMap.entries());
console.log(theMap.length());
console.log(theMap.keys());
console.log(theMap.values());
console.log(theMap.get('Antonio'));
console.log(theMap.has('Linda'));