# regexTable
This is a generator which converts a formula/table to a false table (using grids) using regular expressions.

### Motivation
While changing tables to false tables for each page out of several thousand pages, I knew there would be a quicker way to go about doing this. That's what I used global regular expressions, but I would have to add another column, or row for each depending on the length of the formula table, and it's very tedious if you've ever done it (which is probably why you are here!). That's when I thought a generator would be best, and this tool came alive.

### Values
`Number of rows` : Currently, you can set up to 12 rows that your table may have

`Number of columna` : There are 12 columns, for a 12 grid page.

`Empty row` : If a table row is empty, this is where to place it, so the regular expression knows to skip it

`Column size`  : Default: 2 ; If number of columns > 7: 1. This is where you would enter in the set columns to the grid, i.e. column 1: 3 = col-xs-3 ; column 2: 4 = col-xs-4, etc.

`Text-right on last column` : Apply the checkbox if working with a formula table, and the last column is a financial value.

`Replace capture groups with non-breaking spaces` : Apply the checkbox if you want to build a fake table, instead of find/replace/

`Generate` : Click this button when done customizing your table.

### Usage
