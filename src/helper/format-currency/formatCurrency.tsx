export function formatCurrency(value: number | string) {
  // Check if value is undefined or null
  if (value === undefined || value === null) {
    return ""; // Return empty string or handle accordingly
  }

  // Convert the value to a string
  let stringValue = value.toString();

  // Use a regular expression to add commas
  let formattedValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `₦${formattedValue}`;
}

export function formatCurrency2(value: string | number) {
  // Check if value is undefined or null
  if (value === undefined || value === null) {
    return ""; // Return empty string or handle accordingly
  }

  // Convert the value to a string if it's not already
  let stringValue = value.toString();

  // Use a regular expression to add commas
  let formattedValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${formattedValue}`;
}
