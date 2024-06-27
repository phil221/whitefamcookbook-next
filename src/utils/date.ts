/**
 * Returns a formatted date string in the format 'Month Day, Year' based on the provided timestamp.
 *
 * @param {number} timestamp - The timestamp to convert to a date string.
 * @return {string} The formatted date string in the format 'Month Day, Year'.
 */
const getPrettyDate = (timestamp: number) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(timestamp);
  };
  
  export default getPrettyDate;