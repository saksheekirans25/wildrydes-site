
document.getElementById('colorContrastLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showModal();
});

// Function to show the modal
function showModal() {
    var modal = document.getElementById('colorContrastModal');
    modal.style.display = 'block';

    // Add event listener to the close button
    var closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Add event listeners to the range inputs
    var bgColorRange = modal.querySelector('#bgColorRange');
    var textColorRange = modal.querySelector('#textColorRange');
    
    bgColorRange.addEventListener('input', function() {
        var bgColor = 'hsl(' + bgColorRange.value + ', 100%, 50%)';
        document.body.style.backgroundColor = bgColor;
    });

    textColorRange.addEventListener('input', function() {
        var textColor = 'hsl(' + textColorRange.value + ', 100%, 50%)';
        document.body.style.color = textColor;
    });
}
