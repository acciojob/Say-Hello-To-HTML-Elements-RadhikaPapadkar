!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Say Hello to HTML Elements</title>
</head>
<body>
    <script>
        // Step 1: Create the h1 element
        const h1Element = document.createElement('h1');
        
        // Step 2: Add text to the h1 element
        h1Element.textContent = 'Hello World';
        
        // Step 3: Append the h1 element to the body
        document.body.appendChild(h1Element);
    </script>
</body>
</html>
