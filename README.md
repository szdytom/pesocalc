# peso calculator
A simple expression based script just like an enhanced calculator.

Working in progress, write in javascript, support node.js and broswer(even IE8 and old Edge!)

It will look like:
```plain
f(x)=x^2+2
f(3)
A=1
B=A+2
vec[1,2,3]*mat[[1,3],[3,4],[5,7]]+vec[4,5]*3
6*0.5
13%2+7//4
arctan(sqrt(3)/2)
```

## run the calculator in node.js

1. install `peggy`
	```sh
	npm i -g peggy
	```
2. compile lexi file
	```sh
	peggy lexi/main.pegjs
	```
3. run `main.js`
	```sh
	node main.js
	```

## run the calculator in browser
Not yet.
