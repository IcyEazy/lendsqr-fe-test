import { parseISO, format } from "date-fns";

const convertDate = (dateStr: string) => {
  // Remove the space between the time and the timezone offset
  const cleanedDateStr = dateStr.replace(" ", "");

  // Parse the ISO date string
  const dateObj = parseISO(cleanedDateStr);

  // Format the date to the desired format
  const formattedDate = format(dateObj, "MMMM dd, yyyy hh:mm a");

  return formattedDate;
};

export default convertDate;
