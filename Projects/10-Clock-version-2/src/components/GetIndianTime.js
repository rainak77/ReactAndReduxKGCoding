import { useState } from "react";

export default function getIndiaDateTime() {
  // Create a new Date object for the current date and time
  const now = new Date();
  // Use Intl.DateTimeFormat to format the date and time for the India time zone
  const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
  };
  const formatter = new Intl.DateTimeFormat('en-IN', options);
  return formatter.format(now);
}
