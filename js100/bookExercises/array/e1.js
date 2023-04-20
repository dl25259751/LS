let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/*
a1=4
a2=5
a3=0 ;neg and non inte indexes dont count, 0->posInf
a4=3
a5=101; length is highest idx pos that has a value, ie a5[1000] =1 makes len = 1001
*/