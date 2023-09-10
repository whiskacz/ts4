"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollectionl_1 = require("./CharactersCollectionl");
const LinkedList_1 = require("./LinkedList");
// const numberCollection = new NumbersCollection([1,5,-6,12])
const numbersCollection = new NumbersCollection_1.NumbersCollection([3234, 234, -523, 23]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollectionl_1.CharactersCollection('xYabZ');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(523);
linkedList.add(53);
linkedList.sort();
linkedList.print();
