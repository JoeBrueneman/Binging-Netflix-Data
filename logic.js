function loadData() {
  const fileInput = document.getElementById('csvFileInput');
  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
          const text = event.target.result;
          processData(text);
      };

      reader.readAsText(file);
  } else {
      alert('Please select a CSV file to load.');
  }
}

function processData(csvText) {
  // Split the text into lines
  const lines = csvText.split('\n').map(line => line.trim()).filter(line => line);
  // Display the data
  displayData(lines);
}

function displayData(lines) {
  const outputDiv = document.getElementById('data-output');
  outputDiv.innerHTML = ''; // Clear previous data
  
  // Create a table to display the CSV data
  const table = document.createElement('table');
  lines.forEach((line, index) => {
      const row = document.createElement('tr');
      const columns = line.split(','); // Split by comma for CSV format
      columns.forEach(column => {
          const cell = document.createElement(index === 0 ? 'th' : 'td');
          cell.textContent = column;
          row.appendChild(cell);
      });
      table.appendChild(row);
  });
  outputDiv.appendChild(table);
}
