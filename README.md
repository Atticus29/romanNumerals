
# A website that converts numbers into Roman numerals

#### 23 Feb., 2017, v.1.0.0

#### By Mark Fisher and Liam Stabeno

## Description

A website that converts numbers input by the user into Roman numerals, which then gets displayed to the user upon submission.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Reject user input if it is a non-numerical string|"evilUser"|"Please enter a number"|
|Reject user input if the number is greater than 3,999|4002|"Please enter a number less than 4000"|
|Split the number into sub-numbers of thousands, hundreds, tens, and ones|1499| 1000, 400, 90, 9|
|Populate each sub-number with as many Ns as warranted, where N is M for thousands, C for hundreds, X for tens, and I for ones|1000, 400, 90, 9|M, CCCC, XXXXXXXXX, IIIIIIIII|
|If there are nine of any of these strings, replace the last eight with the N in the next order of magnitude (i.e., M for C, C for X, X for I)|M, CCCC, XXXXXXXXX, IIIIIIIII|M, CCCC, XC, IX|
|If there are exactly four of any symbol remaining, replace the last three with the half-magnitude value corresponding to the symbol (i.e., D for C, L for X, and V for I)|M, CCCC, XXXX, IIII| M, CD, XL, IV|
|If there are more than three of any symbol remaining, replace the first five with the half-magnitude value corresponding to the symbol (i.e., D for C, L for X, and V for I)| CCCCCCCC, XXXXXXX, IIIIII|DCCC, LXX, VI|


## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/romanNumerals).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/TrackSuggester.git`
* Download
  * Click [here](https://github.com/Atticus29/romanNumerals/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the TrackSuggester folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* bash
* git v. 2.11.1

### Template
* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Liam Stabeno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
