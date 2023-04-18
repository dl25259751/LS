false || (true && false); // evals to false
true || (1 + 2); // evals to true, returns last operand
(1 + 2) || true; // evals to 3, returns last operand read, and 3 is truthy
true && (1 + 2);// evals to 3, returns last operand
false && (1 + 2); //evals to false
(1 + 2) && true; // evals to true
(32 * 4) >= 129; // evals to false
false !== !true; //evals to false
true === 4; //evals to true fals cause of strict equality
false === (847 === '847'); //evals to true
false === (847 == '847'); // evals to false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // evals to true