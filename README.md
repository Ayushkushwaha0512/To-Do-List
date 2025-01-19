# Todo List App

This is a simple todo list application built with HTML, CSS, and JavaScript. It allows users to add tasks to a list with only unique elements, automatically removes extra spaces, and stores everything in local storage.

## Functionality

- Users can add tasks to the todo list.
- The application ensures that only unique tasks are added.
- Extra spaces are automatically removed from the task.
- Tasks can be marked as checked or unchecked by clicking on them.
- Tasks can be deleted by clicking on the remove icon next to them.

## Demo

![Screenshot 2024-05-06 225000](https://github.com/sanjay-1458/JavaScript-Projects/assets/121040100/71928ae1-8932-4165-9903-d06c05e24acc)

![Screenshot 2024-05-06 225103](https://github.com/sanjay-1458/JavaScript-Projects/assets/121040100/d7a8dad6-01ed-489b-a9a5-6098bf3da79b)



## How to Use

1. Enter a task in the input box.
2. Press the "Add" button or hit Enter to add the task to the list.
3. Click on a task to mark it as checked or unchecked.
4. Click on the remove icon next to a task to delete it.

## Code Explanation

### JavaScript Functions
1. check(str): This function removes extra spaces from a string.
2. exists(li): This function checks if a task already exists in the list.
3. addTask(): This function adds a task to the list. It checks for uniqueness, removes extra spaces, and handles task addition.
4. saveData(): This function saves the list data to local storage.
5. showTask(): This function retrieves and displays saved tasks from local storage.
 
### Dependencies
No external libraries or frameworks are used. Only native JavaScript is utilized.

### Local Storage
The application uses local storage to store the todo list data. This ensures that the tasks persist even after the page is refreshed or closed.

### License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sanjay-1458/JavaScript-Projects/blob/main/LICENSE) file for details.
