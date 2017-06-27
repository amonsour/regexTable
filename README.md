# regexTable
This is a generator which converts a formula/table to a false table (using grids) using regular expressions.

### Motivation
I had the dreaded task of changing formula/tables to false tables/grids for every page out of several thousand pages. I knew there would be a quicker way to go about doing this,l and that's when I used global regular expressions. It was difficult however, since the tables were varying columns/rows so I would have to add another column/row. It was a very tedious job if you've ever done it (which is probably why you are here!). That's when I thought a generator would work best, and this tool came alive and decided to share it with the world while I was at it.

### Values
`Number of rows` : Currently, you can set up to 12 rows that your table has.

`Number of columns` : There are 12 columns, for a 12 grid page.

`Empty row` : If a table row is empty, this is where to place it the row number, so the regular expression knows to skip it.

`Column size` : 
''Default: 4'' ; If number of columns > 7: 1. This is where you would enter in the set columns to the grid, i.e. column 1: 3 = col-xs-3 ; column 2: 4 = col-xs-4, etc.

`Text-right on last column` : Apply the checkbox if working with a formula table, and the last column is a financial value.

`Replace capture groups with non-breaking spaces` : Apply the checkbox if you want to build a fake table, instead of find/replace/

`Generate` : Click this button when done customizing your table.

### Usage
