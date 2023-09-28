
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

  
