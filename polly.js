
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAVRUVPYLZHXQ2AYNF',
  secretAccessKey: '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',
  region: 'us-east-2'
});

const polly = new AWS.Polly();
const params = {
  Text: 'Welcome to Wild Rides. How can I assist you today?', 
  OutputFormat: 'mp3',
  VoiceId: 'Joanna'
};
polly.synthesizeSpeech(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data); // You can handle the converted audio data here
  }
});

// Function to initialize speech recognition
function initializeSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
      // Create a new instance of SpeechRecognition
      var recognition = new webkitSpeechRecognition();
  
      // Set parameters for recognition
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US'; // Set language to English (United States)
  
      // When speech recognition starts, log a message
      recognition.onstart = function() {
        console.log('Speech recognition started');
      };
  
      // When speech recognition ends, log a message
      recognition.onend = function() {
        console.log('Speech recognition ended');
      };
  
      // When speech is recognized, handle the result
      recognition.onresult = function(event) {
        var result = event.results[0][0].transcript; // Get the recognized text
        console.log('Recognized text:', result);
        
        // Process the recognized text and trigger corresponding actions
        processVoiceCommand(result);
      };
  
      // Start speech recognition when the button is clicked
      document.getElementById('voiceNavigationButton').onclick = function() {
        recognition.start();
      };
    } else {
      console.log('Speech recognition not supported');
    }
  }
  
  // Call the function to initialize speech recognition
  initializeSpeechRecognition();
  

  // Function to process voice command and trigger corresponding actions
function processVoiceCommand(command) {
    // Convert the command to lowercase for easier comparison
    var lowerCaseCommand = command.toLowerCase();
  
    // Define the actions to be triggered based on different voice commands
    switch (lowerCaseCommand) {
      case 'go to rides':
        // Trigger action to navigate to rides section
        console.log('Navigating to rides section');
        break;
      case 'show map':
        // Trigger action to display map
        console.log('Displaying map');
        break;
      case 'help':
        // Trigger action to provide assistance
        console.log('Providing assistance');
        break;
      default:
        // Handle unrecognized commands
        console.log('Unrecognized command:', lowerCaseCommand);
        break;
    }
  }
  
