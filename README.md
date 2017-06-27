# regexTable
This is a generator which converts a formula/table to a false table (using grids) using regular expressions.

### Motivation
I had the dreaded task of changing formula/tables to false tables/grids for every page out of several thousand pages. I knew there would be a quicker way to go about doing this, and that's when I used global regular expressions to get the job done. It was difficult however, since the tables were varying columns/rows so I would have to add or remove a column/row making it quicker, but not quick enough. It was a very tedious job if you've ever done it (which is probably why you are here!). That's when I thought a generator would work best, and this tool came alive and decided to share it with the world while I was at it.

### Pre-Software
1. Your favourite IDE that supports Regular Expresions (Sublime, Dreamweaver, Notepad++) (This guide will be using Dreamweaver in the instructions).

### Step-by-step
1. Read the value guide below if you would like to use the more advanced tools, if not, skip to Step 2.
	- `Number of rows` : This dropdown is set up to 12 rows (didn't have a reason to increase the number).
	- `Number of columns` : This dropdown has up to 12 columns, for a 12 grid page.
	- `Empty row` : If a table row is empty, this is where to place it the row number, so the regular expression knows to skip it and to count it as a blank row.
   - `Column size` : This is where you would enter in the set columns to the grid. See below for the default if the column size is:
      - `Less than 3` : Default is 4;
      - `Greater than 4, and less than 6` : Default is 2;
      - `Greater than 7` : Default is 1.
   - `Text-right on last column` : Apply the checkbox if working with a formula table, and the last column is a financial value.
   - `Replace capture groups with non-breaking spaces` : Apply this checkbox if you want to build a fake table, instead of find/replace.
   - `Generate` : Click this button when done customizing your table.
2. Once `Generate` has been pressed, the values would appear below `Find` and `Replace`.
3. Open your favourite IDE with the page that has the table that you would like to change into a grid.
4. Copy and paste the `Find` on the generator into the `Find` text data in the IDE.
5. Copy and paste the `Replace` on the generator into the `Replace` text data in the IDE.
6. Click on the button `Find next`, to make sure that the table is found.
7. Click the button `Replace`.
8. See your data appear with the regular expression generator.

`Note` : This website is not liable for any data you may lose or corrupt during the process. Please backup your website prior to using this tool, as if you do a global replace and something goes wrong, you cannot undo the changes.

### Troubleshooting
- If you are clicking `Find next` and it is not finding the table with the `exact` details, there may be a `break line` at the end of your `Find` search.

### Contribute
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.
