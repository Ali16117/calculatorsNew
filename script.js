document.getElementById('generateBtn').addEventListener('click', function () {
    let calculatorName = document.getElementById('calculatorName').value.trim();
    let calculatorFormula = document.getElementById('calculatorFormula').value.trim();

    let command1 = `[Calculator Name]\n Please give each element in calculator a seperate line 
    \nplease create a [Calculator Name] in HTML and css to be embedded into a WordPress blog. 
    \n Write the html and css code only combined and donot put boiler plate in the code. start right away with div
    \n follow this structure
    \n //html Code
    \n div class="sticky-calculator"
    \n    div 
    \n      inputs fields with units
    \n      buttons
    \n      outputs field
    \n    div
    \n //css code
    \n  style
    \n      Css Code
    \n  style
    \n div 


    \nHere's the information for the [Calculator Name] :
    \n\n use this formula for [Calculator Name]
    \n[Calculator Formula]


    \n Mention the units of input and outpput as well where aplicable
    \n\nPlease make the design modern and give each element a unique id so that the code will not mess up with the WordPress page layout. 
    Also, add a reset button next to the calculate button to reset the values. 
    Use #be00d9 as the primary color. Do not use h1, h2, or any headings.
    Also, put a border around the calculator.


    \n\nHere is the css that you have to write for styling 
    \n\n 

    .calculator-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .calculator {
        border: 1px solid #be00d9;
        color: #be00d9;
        padding: 10px;
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 20px auto;
    }

    .inputGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .calculator-button {
        background-color: #be00d9;
        color: white;
        border: none;
        padding: 10px;
        margin: 10px auto; /* Centered and added vertical margin */
        cursor: pointer;
        display: block;
        width: 80%; /* Increased the length of the buttons */
    }

    .buttonGroup {
        display: block;
        text-align: center; /* Center-aligned the buttons */
    }


    \na. If any input value does not meet the criteria, show an error message.
    \nb. If all input values meet the criteria, proceed with the calculation.
    \n\nAdditional requirements for the calculator:
    \n\n1. Ensure that the calculator is responsive and adapts well to various screen sizes.
    \n2. Use proper input types for each variable (e.g., number, text) and set required attributes (e.g., min, max, step) if necessary.
    \n3. Make sure the calculator is accessible by adding relevant aria-labels and roles.
    \n4. Add form validation to check if the input values meet the necessary criteria before performing the calculation.`; 

    command1 = command1.replace(/\[Calculator Name\]/g, calculatorName);
    command1 = command1.replace(/\[Calculator Formula\]/g, calculatorFormula);
    command1 = command1.replace(/\n/g, '&#10;'); // Replace newlines with HTML-safe newlines

    // Command 2: JavaScript with optional library usage
    let command2 = `Now write JavaScript for this calculator to implement the functionality using the formula "${calculatorFormula}". Consider using libraries to enhance the calculator. Ensure to:
    - Validate input values
    - Perform calculations and display results in the output field
    - Gracefully handle errors
    - also write code within <script> </script> tags
    \n Here are instructions for Javascript code `;
    
    command2 = command2.replace(/\[Calculator\]/g, calculatorName);
    command2 = command2.replace(/\[Calculator Formula\]/g, calculatorFormula);
    command2 = command2.replace(/\n/g, '&#10;'); // Replace newlines with HTML-safe newlines
    

    let command3 = `Write an article on "${calculatorName}", covering its workings, definition, formula "${calculatorFormula}", examples, and relevant information tables. please you must write in simple language and dont use difficult words. Ensure the article includes:
    - An introduction to the calculator
    - A detailed explanation of its purpose and functionality
    - Step-by-step examples
    - A table with relevant information or data
    - A conclusion summarizing the calculator's benefits and applications.`;
    
    command3 = command3.replace(/\[Calculator\]/g, calculatorName);
    command3 = command3.replace(/\[Calculator Formula\]/g, calculatorFormula);
    command3 = command3.replace(/\n/g, '&#10;'); // Replace newlines with HTML-safe newlines


    document.getElementById('command1Output').innerHTML = command1;
    document.getElementById('command2Output').innerHTML = command2;
    document.getElementById('command3Output').innerHTML = command3;
});

const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const outputEl = e.target.previousElementSibling;
        const copiedTextEl = document.createElement("span");
        copiedTextEl.textContent = "Copied to clipboard";
        copiedTextEl.classList.add("copied-text");

        // Create a new 'pre' element, and fill it with the output text
        const pre = document.createElement('pre');
        pre.style.position = 'fixed';
        pre.style.left = '-5000px';
        pre.textContent = outputEl.textContent;

        // Add the 'pre' element to the body
        document.body.appendChild(pre);

        // Select the 'pre' content
        const selection = getSelection();
        const range = document.createRange();
        range.selectNodeContents(pre);
        selection.removeAllRanges();
        selection.addRange(range);

        // Copy the selected content
        document.execCommand('copy');

        // Remove the 'pre' element
        document.body.removeChild(pre);

        // Show copied to clipboard message
        e.target.after(copiedTextEl);

        // Remove copied to clipboard message after 5 seconds
        setTimeout(() => {
            copiedTextEl.remove();
        }, 5000);
    });
});
