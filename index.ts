// keyof typeof


type Programmer = {
    name: string;
    age: number;
    stack?: string[];
    amountOfVygoranie: number;
};

type Person = Omit<Programmer, 'stack' | 'amountOfVygoranie'>;
type Person2 = Pick<Programmer, 'age' | 'name'>;
type Person3 = Partial<Programmer>;
type Person4 = Required<Programmer>;

// const person = {
//     name: 'Peter',
//     age: 2,
//     stack: [2,3,1,4]
// };



// function add (a: number, b: number) {
//     return [a + b];
// }


// type A = ReturnType<typeof add>;
// type B = Parameters<typeof add>;

// const smth: B = [1,2]




// type PersonKey = keyof typeof person;

// const key: PersonKey = 'stack';

// person[key];










// type Person = typeof person;

// const person2: Person = {
//     name: 'Valerchik',
//     age: 2,
//     stack: [2,4,1]
// };





// interface IUser {
//     name: string;
//     age: number;
//     city: string;
// }

// type Smth = keyof IUser;



// const key: Smth = 'city' || 1;

// const user: IUser = {
//     age: 23,
//     name: 'John',
//     city: 'Boston'
// };

// console.log( user[key] );



// interface ILodka {
//     vesla: number;
// }

// interface IShip {
//     height: number;
//     width: number;
// }

// interface ISwimmingShip extends IShip, ILodka {
//     swim(): void;
// }

// type SwimmingShip = IShip & {swim():void} & ILodka;

// const obj: ISwimmingShip = {
//     vesla: 2,
//     swim: () => {},
//     height: 2,
//     width: 1
// };


// type Car = {
//     price: number;
//     model: string;
//     engineVol: number;
// };

// type Moped = {
//     price: string;
//     hasSeat: boolean;
//     wheels: number;
// };

// type CaroMoped = Car & Moped;
// type CaroMoped = Car | Moped;



// const buggie: CaroMoped = {
//     price: 'asdsd',
//     wheels: 2,
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false,
// };

// const isCar = (val: CaroMoped ): val is Car => {
//     return 'price' in val && typeof val.price === 'number'; // instanceof
// };


// function showModel (obj: CaroMoped) {
//     if (isCar(obj)) {
//         console.log( obj );
//     } else {
//         console.log( obj );
//     }
// }


// interface IAnimal {
//     paws: number;
//     hasTail: boolean;
//     run? (): void;
//     walk?: (destination: string) => void;
// }

// interface IAnimal {
//     animalName?: string;
// }

// const cat: IAnimal = {
//     animalName: 'murzik',
//     hasTail: true,
//     paws: 4,
//     run () {},
//     walk () {},
// };


// type Person = {
//     name: string;
//     age: number;
//     city: string;
//     status: 'admin' | 'user' | 'none';
//     programmingSkills?: string[];
//     run: (destination: string) => void;
//     walk (): void;
// };


// const john: Person = {
//     name: 'John',
//     age: 22,
//     city: 'Boston',
//     status: 'admin',
//     programmingSkills: ['HTML']
// };

// const peter: Person = {
//     name: 'Peter',
//     age: 23,
//     city: 'Gomel',
//     status: 'none',
// };

// const valerchik: Person = {
//     name: 'Valerchik',
//     age: 2,
//     city: 'Buda-koshelevo',
//     status: 'user'
// };


// const arr: Person[] = [john, peter, valerchik]


// const adults = arr.map(({programmingSkills}) => {

//     programmingSkills?.forEach(() => {});

    // if (Array.isArray(programmingSkills)) {
    //     programmingSkills.filter(() => {})
    // }
    
// })




// const arr: [number, string, boolean] = [2, 'asd', false];


// const arr: (number | string)[][] = [[2,'2'],[5,1]];

// const arr2: Array<Array<string> | string> = [2, 3, 1];
// const arr3: number[][] = [4, 1, 5];


// const onClick = (event: Event): void => {};


// const components = (a: number, cb: () => void) => {
//     cb();
//     console.log()
// }

// const func: () => number = () => 2;

// components(2, func)


// const a = 2;
// const b = 3;

// const res = a < b ? 'hello' : 'goodbye';

// const func = (a: number) => {
//     throw new Error('some custom error');
// };




// const add = (a: number, b?: string) => {
//     if (b) {
//         return Number(a + b);
//     } else {
//         return a * 2 + '';
//     }      
// };

// const res = add(1, 'as');



