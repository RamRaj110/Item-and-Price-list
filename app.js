document.getElementById('addbtn').addEventListener('click', function() {
    const itemName = document.getElementById('item-field').value.trim();
    const itemPrice = document.getElementById('price-field').value.trim();
  
    // Check if the input fields are empty
    if (itemName === '' || itemPrice === '') {
      alert('Please enter both the item name and price.');
      return;
    }
  
    // Check if the price field contains only numbers
    if (isNaN(itemPrice)) {
      alert('The price field should contain only numbers.');
      return;
    }
  
    // Create a new div to hold the item and price
    const newItem = document.createElement('div');
    newItem.classList.add('item-result');
  
    // Add the item name and price to the new div
    newItem.innerHTML = `<strong>${itemName }: </strong> $${itemPrice}`;
  
    // Add the new div to the result div
    const resultDiv = document.getElementById('result');
    resultDiv.insertBefore(newItem, resultDiv.firstChild);
  
    // Store the item in local storage
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ itemName, itemPrice });
    localStorage.setItem('items', JSON.stringify(items));
  
    // Clear the input fields
    document.getElementById('item-field').value = '';
    document.getElementById('price-field').value = '';
  });
  
  document.getElementById('removebtn').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    const itemResults = resultDiv.getElementsByClassName('item-result');
  
    // Remove the last item in the result div
    if (itemResults.length > 0) {
      resultDiv.removeChild(itemResults[itemResults.length - 1]);
  
      // Remove the item from local storage
      const items = JSON.parse(localStorage.getItem('items'));
      items.pop();
      localStorage.setItem('items', JSON.stringify(items));
    }
  });
  
  // Load items from local storage on page load
  document.addEventListener('DOMContentLoaded', function() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    for (const item of items) {
      const newItem = document.createElement('div');
      newItem.classList.add('item-result');
      newItem.innerHTML = `<strong>${item.itemName}:</strong> $${item.itemPrice}`;
      const resultDiv = document.getElementById('result');
      resultDiv.insertBefore(newItem, resultDiv.firstChild);
    }
  });