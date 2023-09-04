import React, { useState } from 'react';

const NotificationSender = () => {
  const [notificationText, setNotificationText] = useState('');

  const handleInputChange = (e) => {
    setNotificationText(e.target.value);
  };

  const sendNotification = () => {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Custom Notification', {
        body: notificationText,
      });
    } else {
      requestNotificationPermission();
    }
  };

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

  return (
    <div>
      <h2>Send Notification to Everyone</h2>
      <input
        type="text"
        placeholder="Enter your notification message"
        value={notificationText}
        onChange={handleInputChange}
      />
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

export default NotificationSender;
