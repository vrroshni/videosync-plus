import { useToast } from "vue-toastification";
import loadingIcon from '../assets/img/ploading.gif';
import slider from '../assets/img/state.svg';
import indicatorIcon from '../assets/img/indicator.svg';


// Export icons need for player
export {
  loadingIcon,
  slider,
  indicatorIcon
}

// Initialize toast for displaying notifications.
export const toast = useToast();

// Define steps for a multi-step process.
export const steps = [

  {
    stepsTitle: "Start ",
    name: "starting timestamp",

  },
  {
    stepsTitle: "End",
    name: "ending timestamp",

  },
  {
    stepsTitle: "SubTitle",
    name: "subtitle",

  }
]


// Generate a unique ID based on the current timestamp and random alphanumeric characters.
export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const randomId = Math.random().toString(36).substring(2, 10); // Random alphanumeric ID
  return `${timestamp}-${randomId}`;
}

// Convert seconds to timestamp format (hh:mm:ss.SSS).
export const secondsToTimestamp = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);
  const milliseconds = Math.round((duration % 1) * 1000); // Convert fractional seconds to milliseconds

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}


// Parse a timestamp in the format hh:mm:ss.SSS into milliseconds.
export const parseTimestamp = (timestamp) => {
  const [hours, minutes, seconds, milliseconds] = timestamp.split(/[:.]+/).map(Number);
  return hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
}


// Format a date as a string in the format "day month, year".
export const formatDate = (formatdate) => {
  const date = new Date(formatdate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}



// Generate an SRT file content from an array of subtitles.
export const generateSRT = (subtitles) => {

  let srtContent = '';

  const formatSRTSubtitle = (index, subtitle) => {
    return (
      `${index}\n` +
      `${subtitle.startingTimestamp} --> ${subtitle.endingTimestamp}\n` +
      `${subtitle.subtitle}\n\n`
    );
  }

  subtitles.forEach((subtitle, index) => {
    const formattedSubtitle = formatSRTSubtitle(index + 1, subtitle);
    srtContent += formattedSubtitle;
  });

  // Create a Blob with the SRT content and return its URL.
  const srtBlob = new Blob([srtContent], { type: 'text/plain' });
  return window.URL.createObjectURL(srtBlob);

}




// Generate a random HSL color.
export function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}