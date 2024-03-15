42 === 42;
// => true

42 === "42";
// => false

true === 1;
// => false

"0" === false;
// => false

null === undefined;
// => false

" " === 0;
// => false

9000 !== 9001
// => true

9001 !== '9001'
// => true

[] !== ''
// => true

42 == 42;
// => true

42 == "42";
// => true

true == 1;
// => true

"0" == false;
// => true

null == undefined;
// => true

" " == 0;
// => true

9000 != 9001
// => true

9001 != '9001'
// => false

[] != ''
// => false

88 > 9;
// => true

88 >= 88;
// => true

88 < 9;
// => false

88 > "9";
// => true

88 >= "hello";
// => false

88 <= "hello";
// => false