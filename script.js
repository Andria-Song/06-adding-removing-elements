// Get the elements we need from the page
const form = document.getElementById('form');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');

// Listen for form submission
form.addEventListener('submit', function (event) {
	// Stop the form from refreshing the page
	event.preventDefault();

	// Get the user's text and remove extra spaces
	const newItemText = itemInput.value.trim();

	// If the input is empty, do nothing
	if (newItemText === '') {
		return;
	}

	// Create a new list item and set its text
	const listItem = document.createElement('li');

	const itemText = document.createElement('span');
	itemText.textContent = newItemText;

	const deleteButton = document.createElement('button');
	deleteButton.type = 'button';
	deleteButton.className = 'delete-btn';
	deleteButton.setAttribute('aria-label', 'Delete item');
	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

	// Remove this list item when the delete button is clicked
	deleteButton.addEventListener('click', function () {
		listItem.remove();
	});

	listItem.appendChild(itemText);
	listItem.appendChild(deleteButton);

	// Add the new item to the list
	list.appendChild(listItem);

	// Clear the input box for the next item
	itemInput.value = '';
});
