import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from './Sorter';
import { CharactersCollection } from "./CharactersCollectionl";
import { LinkedList } from "./LinkedList";

// const numberCollection = new NumbersCollection([1,5,-6,12])

const numbersCollection = new NumbersCollection([3234, 234, -523, 23])
numbersCollection.sort()
console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection('xYabZ')

charactersCollection.sort()

console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500); 
linkedList.add(-19); 
linkedList.add(523); 
linkedList.add(53); 

linkedList.sort()

linkedList.print()