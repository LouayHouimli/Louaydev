import React, { useEffect, useState } from 'react';

const NotificationComponent = () => {
  // Initialize the button state from local storage (if available)
  const [buttonOn, setButtonOn] = useState(
    localStorage.getItem('notificationButton') === 'on'
  );

  // Function to toggle the button and save the choice in local storage
  const toggleButton = () => {
    const newButtonState = !buttonOn;
    setButtonOn(newButtonState);
    // Save the choice in local storage
    localStorage.setItem('notificationButton', newButtonState ? 'on' : 'off');
  };

  // Function to show a notification
  const showNotification = () => {
    if (buttonOn && Notification.permission === 'granted') {
      const notification = new Notification('Hello!', {
        body: 'This is a notification from your website!',
      });
    } else if (!buttonOn) {
      console.log('Notification button is turned off.');
    } else {
      // Request notification permission if not granted
      requestNotificationPermission();
    }
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  // Effect to initialize the button state and local storage
  useEffect(() => {
    // If local storage is empty or contains 'on', set the button to 'on'
    // Otherwise, set it to 'off'
    setButtonOn(
      localStorage.getItem('notificationButton') !== 'off'
    );
  }, []);

  return (
    <div>
      <button onClick={toggleButton}>
        {buttonOn ? 'Turn Off' : 'Turn On'}
      </button>
      <br />
      <button onClick={showNotification}>Send Notification</button>
    </div>
  );
};

export default NotificationComponent;
