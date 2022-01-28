# Semiprime Numbers

According to [Wikipedia](https://en.wikipedia.org/wiki/Semiprime), a semiprime number is a natural number that is the product of exactly two prime numbers.  For example, 91 is a semiprime number, because its prime factors are 7 and 13.  The two primes in the product may equal each other, so the semiprimes include the squares of prime numbers.  For example, 9 is a semiprime number - its prime factors are 3.  The aim of the project is to investigate the numbers using HTML Forms and JavaScript.

## UX

**Getting Started**

In the input field, enter a whole number between 2 and 1000000 (e.g. 91).  Then click on the Submit Button.  If you enter anything else other than a whole number or fail to enter anything, you will get an error message:

    `Invalid Input.  Please enter a whole number between 2 and 1000000.`

Assuming that your input is valid, you should get something like:

    `You have entered the number 91.
    91 is a Semiprime Number.`

Click on the reset button to clear the information or to start again.

**User Stories**

As a user, if I enter a number less than 2 or greater than 1000000, I get an error message.

As a user, if I enter text, I get an error message.

As a user, if I enter a number, but it is not an integer, I get an error message.

As a user, if I do not enter anything, I get an error message.

As a user, assuming that my input is valid, I should get something like:

    `You have entered the number 91.
    91 is a Semiprime Number.`

As a user, I can clear the information or start again by clicking on the Reset Button.

**Information Architecture**

The number is an integer between 2 and 1000000.  The functions isSemiPrime and isPrime are boolean.

## Features

Allows the user to enter a number as well as getting the information for that number.  Performs checks on valid input.

## Technologies

Uses HTML5, CSS3, JavaScript, Google Fonts and Bootstrap 5.1.3.

## Testing

Ensure all the user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/semiprime-numbers) at the main branch.

## Credits

### Content

Written by me.

### Acknowlegements

- [Wikipedia](https://en.wikipedia.org)
- [FreeCodeCamp](https://www.freecodecamp.org)