Front end Interview Questions
=============================
-------
To rock the interview to achieve what you deserve and to improve your concepts about front end technologies, I have consolidated a list of questions and answers. It's a one stop solution for front end interview process.

## Table of Contents
* [JavaScript: Basics and Tricky Questions](#javascript-basics-and-tricky-questions)
* [Algorithm Beginners Level](#javascript-algorithm-beginners-level)
* [Intermediate Level Questions](#javascript-for-intermediate-level-developer)
* [css: Basics and Tricky Questions](#css-basics-and-tricky-questions)
* [DOM related Questions](#javascript-dom-related-questions)
* [html: Basic Questions for Begginers](#html-basic-questions-for-begginers)

### [Angular Interview Questions](https://github.com/khan4019/angular-interview-questions)
An exclusive list of Angular interview Questions are [here](https://github.com/khan4019/angular-interview-questions)

## [JavaScript: Basics and Tricky Questions](http://www.thatjsdude.com/interview/js2.html)
21+ questions and answers (for intermediate)
__________________
**What are the differences between ` null ` and ` undefined `?**

Javascript has two disting values for nothing, `null` and `undefined`.



**Undefined**

`Undefined` means, value of the variable is not defined.  Javascript has a global variable `undefined` whose value is "undefined" and `typeof undefined` is also "undefined".  Undefined is not a constant or a keyword.  Undefined is a type with exactly one value: undefined.  Assigning a new value to it does not change the value of the type undefined.

**8 ways to get Undefined:**

- A declared variable without assigning any value to it.
- Implicit returns of functions due to missing return statements.
- Return statements that do not explicitly return anything.
- Lookups of non-existent properties in an object.
- Function parameters that have not passed.
- Anything that has been set to the value of undefined
- The value of the global variable `undefined`



**null**

`null` means empty or non-existent value which is used by programmers to indicate "no value". `null` is a primitive value and you can assign null to any variable.  `null` is not an object, it is a primitive value.  For example, you cannot add properties to it.  Sometiems people wrongly asume that it is an object, because typeof null returns "object".



```
Note: undefined is from javascript engine, while null is usually coded from a progammer.
```





1. What are the differences between `==` and `===`?


1. How would you compare two objects in JavaScript?
2. 11+ true false related questions that will trick you.
3. As `[]` is true, `[] == true` should also be true. right?
4. How could you write a method on instance of a date which will give you next day?
5. If you want to use an arbitrary object as value of this, how will you do that?
6. Write a simple function to tell whether 2 is passed as parameter or not?
7. How could you use Math.max to find the max value in an array?
8. What the heck is this in JavaScript?
9. 21 quick questions that will trick you.
10. How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"
11. What will you see in the console for the following example?
12. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
13. Look at the code below, I have a property in a object and I am creating a new object where I am setting it to a new value. If I delete that property what will i get if I try to access that property?
14. Does JavaScript pass parameter by value or by reference?
15. How could you implement cache to save calculation time for a recursive fibonacci function?
16. How could you cache execution of any function?
17. If you need to implement the following chaining with call back, how will you implement it?
18. How could you implement moveLeft animation?
19. How would you implement currying for any functions? 

#### [JS: Answer for Basics and Tricky Questions](http://www.thatjsdude.com/interview/js2.html)



## [css: Basics and Tricky Questions](http://www.thatjsdude.com/interview/css.html)
21+ questions and answers
____________
1. What does float do?
2. How can you clear sides of a floating element?
  1. How can you clear sides of a floating element?
3. some tricky questions in rapid fire style
  1. Are CSS rule names case sensitive?
  2. Why css selectors mixed up with cases don't apply the styles?
  3. Does margin-top or margin-bottom has effect on inline element?
  4. Does padding-top or padding-bottom has effect on inline element?
  5. Does padding-left or padding-right or margin-left or margin-right has effect on inline element?
  6. If you have a &lt;p&gt; element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?
  7. The pseudo class :checked will select inputs with type radio or checkbox, but not &lt;option&gt; elements.
  8. In a HTML document, the pseudo class :root always refers to the &lt;html&gt; element.
  9. The translate() function can move the position of an element on the z-axis.
4. Which one would you prefer among px, em % or pt and why?
5. How absolute, relative, fixed and static position differ?
6. What are the differences between visibility hidden and display none?
7. What are the differences between inline, block and inline-block?
8. What are the properties related to box model?
9. Does overflow: hidden create a new block formatting context?
10. How could you apply css rules specific to a media?
  1. What is the use of only?
  2. Does the screen keyword apply to the device's physical screen or the browser's viewport?
11. What are the some pseudo classed u have used?
12. How do you align a p center-center inside a div?
13. How do you optimize css selectors?
14. How can you load css resources conditionally?
15. Why would you use sprites?
16. What is specificity? How do u calculate specificity?
17. What is shadow DOM?
18. What do you know about transition?
19. What are the different css filter you can use?
20. What are the reasons to use preprocessor?
21. [Show you couple of style example and you have to tell what does it do](http://www.thatjsdude.com/interview/css.html#seeAndTell).

#### [CSS: Answer for Basics and Tricky Questions](http://www.thatjsdude.com/interview/css.html)

### css Deleted questions!
Looks like these are for hardcore designer. Hence, didn't make for developers.
______
1. How descendant css selectors are matched? [get answer](https://www.youtube.com/watch?v=EW8Bg_H_P7M)
2. How would u implement modularity in css?
3. If something doesn't work in a specific browser (IE8), you would u approach this problem?
4. How do you test cross-browser compatibility of your site?
5. What is the greatest hack you did in css so far?
6. What is grid layout?
7. How can you make a site responsive?
8. Why reset css is useful? or how normalize.css works?
9. What do you know about text shadows, box shadows?




## [JavaScript: Algorithm Beginners Level](http://www.thatjsdude.com/interview/js1.html)
20 questions and answers (for beginners)
__________________
1. Verify a prime number?
2. Find all prime factors of a number?
3. Get nth Fibonacci number?
4. Find the greatest common divisor of two numbers?
5. Remove duplicate members from an array?
6. merge two sorted array?
7. Swap two numbers without using a temp variable?
8. Reverse a string in JavaScript?
9. How would you reverse words in a sentence?
10. Reverse words in place?
11. Find the first non repeating char in a string?
12. Remove duplicate characters from a sting?
13. How will you verify a word as palindrome?
14. Generate random between 5 to 7 by using defined function.
15. Find missing number from unsorted array of integers.
16. Get two numbers that equal to a given number?
17. Find the largest sum of any two elements?
18. Total number of zeros from 1 upto n?
19. Check whether a given string is a substring of bigger string
20. Get permutations of a string

#### [JS: Answer for Algorithm Beginners Level](http://www.thatjsdude.com/interview/js1.html)


## JavaScript for Intermediate Level Developer

1. What is the event loop? Can you draw a simple diagram to explain event loop?
2. How to you explain closure?
3. How would you make sure value of `this` works correctly inside `setTimeout`?
4. What are the different possible values for `this`?
5. What is debounce and how could you implement debounce?
6. How would you communicate with server
7. Explain Promise to your grandmother
8. If and website is slow how what would you do to make it faster?
9. What ES6 feature do you use other than let, var and arrow?
10. What build tool you use and tell me some advantages to use that build tool

## [JavaScript: DOM related Questions](http://www.thatjsdude.com/interview/dom.html)
21+ questions and answers (for intermediate JS Developers)
__________________
1. Is there any difference between window and document?
2. Does document.onload and window.onload fire at the same time?
3. Is attribute similar to property?
4. What are the different ways to get an element from DOM?
5. What is the fastest way to select elements by using css selectors?
6. How come, I can't use forEach or similar array methods on a NodeList?
7. If you need to implement getElementByAttribute, how would you implement it?
8. How would you add a class to an element by query selector?
9. How could I verify whether one element is child of another?
10. What is the best way to create a DOM element? Set innherHTML or use createElement?
11. What is createDocumentFragment and why you might use it?
12. What is reflow? What causes reflow? How could you reduce reflow?
13. What is repaint and when does this happen?
14. How could you make sure to run some JavaScript when DOM is ready like $(document).ready?
15. What is event bubble? How does event flows in DOM?
16. How would you destroy multiple list items with one click handler?
17. Create a button that is destroyed by clicking in it but two new buttons are created in it's place.
18. How could you capture all clicks in a page?
19. How can you get all the texts in a web page?
20. What is defer and async keyword does in a script tag?
21. 10 rapid fire questions

#### [JS: Answers for DOM related Questions](http://www.thatjsdude.com/interview/dom.html)




## [html: Basic Questions for Begginers](http://www.thatjsdude.com/interview/html.html)

15 basic questions and asnwers
______
1. Why do you need doctype?
2. What are data-* attributes used for?
3. How can you generate a public key in html?
4. How do you change the direction of html text?
5. How can you highlight text in html?
6. Can you apply css to a part of html document only?
7. Will a browser make http request for the following cases?
8. Which resource would be downloaded first?
9. What is an optional tag?
10. What are the differences between div and span?
11. How would you differentiate between div, section, and article?
12. How would you select svg or canvas for your site?
13. How to serve html in multiple languages?
14. Explain standard and quirks mode.
15. What is a semantic tag?

#### [HTML: Answers for Basic Questions](http://www.thatjsdude.com/interview/html.html)


## [JavaScript: LinkedList (part 4: work in process)](http://www.thatjsdude.com/interview/linkedList.html)
Very rough stage..need to finish (for intermediate)

## [JavaScript: search and Sort (part 5: work in process)](http://khan4019.github.io/front-end-Interview-Questions/sort.html)
Very rough stage..need to finish (for expert)

## [JavaScript: Binary Search Tree (part 6: work in process)](http://khan4019.github.io/front-end-Interview-Questions/bst.html)
Very rough stage..need to finish (for expert)
__________________

## TODO list
1. CSS: Generate mock up from provided layout
2. JavaScript: Programming challenges for expert
3. HR related questions like
  1. What is your weakness
  2. Why are you leaving your current job
  3. Tell me about a project that you weren't able to finish on time
  4. How you resolve conflict among team members
  5. How will you introduce a new technology to the team
  6. Do you prefer to work individually or in a team
  7. Sell this pen/coke/something to me
  8. How much salary do you want
  9. What you don't like you current job
  10. What you like least in your current job
4. Tree Data Structure in JavaScript
5. Graph and high order data structure in JavaScript
___________________

Inpsired by, [darcyclarke](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions), [css-tricks](http://css-tricks.com/interview-questions-css/), [david shariff](http://davidshariff.com/quiz/) and some google results. If you want to add any question to this let me know.
