document.addEventListener('DOMContentLoaded', function () {
    const data = [
      {
        "name": "foo1",
        "value": "bar1",
      },
      {
        "name": "foo2",
        "value": "bar2",
      },
      // Add more elements here...
    ];
  
    const elementsContainer = document.getElementById('elements-container');
    const valueInput = document.getElementById('value-input');
    const saveButton = document.getElementById('save-button');
  
    let selectedElementIndex = 0; // Initialize with the first element
  
    function renderElements() {
      elementsContainer.innerHTML = ''; // Clear previous content
      data.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.textContent = `Element ${index + 1}: ${element.value}`;
        elementDiv.addEventListener('click', () => {
          selectedElementIndex = index;
          valueInput.value = element.value;
        });
        elementsContainer.appendChild(elementDiv);
      });
    }
  
    function saveValue() {
      const newValue = valueInput.value;
      data[selectedElementIndex].value = newValue;
      renderElements();
    }
  
    saveButton.addEventListener('click', saveValue);
  
    // Initial rendering
    renderElements();
  });
  