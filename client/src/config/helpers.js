import { useToast } from "vue-toastification";
export const toast = useToast();


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

export const timestampRegex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/; // Regex for hh:mm:ss format
export  function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 10); // Random alphanumeric ID
    return `${timestamp}-${randomId}`;
  }


  export function secondsToTimestamp(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toFixed(3)}`;
  }
  


  export function formatDate(formatdate) {
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
