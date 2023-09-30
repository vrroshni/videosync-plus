import { useToast } from "vue-toastification";
import loadingIcon from '../assets/img/ploading.gif';
import slider from '../assets/img/state.svg';
import indicatorIcon from '../assets/img/indicator.svg';
export { loadingIcon, slider, indicatorIcon }
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
export const generateUniqueId=()=> {
  const timestamp = new Date().getTime();
  const randomId = Math.random().toString(36).substring(2, 10); // Random alphanumeric ID
  return `${timestamp}-${randomId}`;
}


export const secondsToTimestamp=(duration)=> {
  const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    const milliseconds = Math.round((duration % 1) * 1000); // Convert fractional seconds to milliseconds
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

export const parseTimestamp=(timestamp) =>{
  const [hours, minutes, seconds, milliseconds] = timestamp.split(/[:.]+/).map(Number);
  return hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
}

export const formatDate=(formatdate)=>{
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
