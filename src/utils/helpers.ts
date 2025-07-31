export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
    dd: String(date.getDate()).padStart(2, "0"),
    mm: String(date.getMonth() + 1).padStart(2, "0"),
    yyyy: String(date.getFullYear()),
  };

  return format.replace(/dd|mm|yyyy/g, (match) => map[match]);
}