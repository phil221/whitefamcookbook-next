/**
 * Returns a formatted date string in the format 'Month Day, Year' based on the provided timestamp string.
 * If the timestamp string is falsy, returns 'N/A'.
 *
 * @param {string} timestampString - The timestamp string to convert to a date string.
 * @return {string} The formatted date string in the format 'Month Day, Year'.
 */
const getPrettyDate = (timestampString: string): string => {
    if (!timestampString) {
      return 'N/A';
    }
  
    const nextRenewalDate = new Date(timestampString.concat('T00:00:00'));
  
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(nextRenewalDate);
  };
  
  export default getPrettyDate;