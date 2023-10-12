// Define a type for the message object
interface Message {
  action: 'switchProxy' | 'clearCookies';
}

// Helper function to send a message to the background script
function sendMessage(message: Message): void {
  chrome.runtime.sendMessage(message);
}

// Get the buttons from the DOM
const switchProxyButton = document.getElementById('switchProxy') as HTMLButtonElement;
const clearCookiesButton = document.getElementById('clearCookies') as HTMLButtonElement;

// Add event listeners to the buttons
if (switchProxyButton && clearCookiesButton) {
  switchProxyButton.addEventListener('click', () => {
    sendMessage({ action: 'switchProxy' });
  });

  clearCookiesButton.addEventListener('click', () => {
    sendMessage({ action: 'clearCookies' });
  });
} else {
  console.error('Could not find buttons in the DOM');
}

