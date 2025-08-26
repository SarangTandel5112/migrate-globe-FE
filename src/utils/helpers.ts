import moment from "moment-timezone";

export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
    dd: String(date.getDate()).padStart(2, "0"),
    mm: String(date.getMonth() + 1).padStart(2, "0"),
    yyyy: String(date.getFullYear()),
  };

  return format.replace(/dd|mm|yyyy/g, (match) => map[match]);
}
export type Country =
  | "Australia"
  | "India"
  | "USA"
  | "Canada"
  | "UnitedKingdom"
  | "Germany"
  | "France"
  | "Japan"
  | "China"
  | "Russia"
  | "Brazil"
  | "SouthAfrica" | string;

export const getUserTimeZone = (country: Country) => {
    // For simplicity, this is a mock. You can replace it with a real service to fetch time zone based on the country.
    // Example: Return "Australia/Sydney" if the user is from Australia
    const countryTimeZones: { [key: string]: string } = {
      Australia: 'Australia/Sydney',
      India: 'Asia/Kolkata',
      USA: 'America/New_York',
      Canada: 'America/Toronto',
      UnitedKingdom: 'Europe/London',
      Germany: 'Europe/Berlin',
      France: 'Europe/Paris',
      Japan: 'Asia/Tokyo',
      China: 'Asia/Shanghai',
      Russia: 'Europe/Moscow',
      Brazil: 'America/Sao_Paulo',
      SouthAfrica: 'Africa/Johannesburg',
      Mexico: 'America/Mexico_City',
      Argentina: 'America/Argentina/Buenos_Aires',
      Egypt: 'Africa/Cairo',
      SaudiArabia: 'Asia/Riyadh',
      UnitedArabEmirates: 'Asia/Dubai',
      Singapore: 'Asia/Singapore',
      SouthKorea: 'Asia/Seoul',
      Indonesia: 'Asia/Jakarta',
      Malaysia: 'Asia/Kuala_Lumpur',
      Philippines: 'Asia/Manila',
      Thailand: 'Asia/Bangkok',
      NewZealand: 'Pacific/Auckland',
      Israel: 'Asia/Jerusalem',
      Turkey: 'Europe/Istanbul',
      Spain: 'Europe/Madrid',
      Italy: 'Europe/Rome',
      Portugal: 'Europe/Lisbon',
      Greece: 'Europe/Athens',
      Poland: 'Europe/Warsaw',
      CzechRepublic: 'Europe/Prague',
      Hungary: 'Europe/Budapest',
      Romania: 'Europe/Bucharest',
      Sweden: 'Europe/Stockholm',
      Denmark: 'Europe/Copenhagen',
      Norway: 'Europe/Oslo',
      Finland: 'Europe/Helsinki',
      Iceland: 'Atlantic/Reykjavik',
      Switzerland: 'Europe/Zurich',
      Austria: 'Europe/Vienna',
      Belgium: 'Europe/Brussels',
      Netherlands: 'Europe/Amsterdam',
      Luxembourg: 'Europe/Luxembourg',
      Ireland: 'Europe/Dublin',
      Estonia: 'Europe/Tallinn',
      Latvia: 'Europe/Riga',
      Lithuania: 'Europe/Vilnius',
      Belarus: 'Europe/Minsk',
      Ukraine: 'Europe/Kiev',
      Bulgaria: 'Europe/Sofia',
      Serbia: 'Europe/Belgrade',
      Croatia: 'Europe/Zagreb',
      Slovenia: 'Europe/Ljubljana',
      Slovakia: 'Europe/Bratislava',
      Cyprus: 'Asia/Nicosia',
      Malta: 'Europe/Malta',
      Montenegro: 'Europe/Podgorica',
      Kosovo: 'Europe/Belgrade', // Kosovo uses the same timezone as Serbia
      Albania: 'Europe/Tirane',
      Macedonia: 'Europe/Skopje',
      BosniaAndHerzegovina: 'Europe/Sarajevo',
      Moldova: 'Europe/Chisinau',
      Andorra: 'Europe/Andorra',
      SanMarino: 'Europe/San_Marino',
      Monaco: 'Europe/Monaco',
      VaticanCity: 'Europe/Vatican',
      Liechtenstein: 'Europe/Vaduz',
      Maldives: 'Indian/Maldives',
      Bhutan: 'Asia/Thimphu',
      Nepal: 'Asia/Kathmandu',
      SriLanka: 'Asia/Colombo',
      Bangladesh: 'Asia/Dhaka',
      Myanmar: 'Asia/Yangon',
      Laos: 'Asia/Vientiane',
      Cambodia: 'Asia/Phnom_Penh',
      Vietnam: 'Asia/Ho_Chi_Minh',
    };
    return countryTimeZones[country] || 'UTC'; // Default to UTC if not found
};

// Convert a time from the user's time zone to UTC
export const convertToUTC = (localTime: string, timeZone: string) => {
  const formattedTime = moment.tz(localTime, timeZone).utc().format('YYYY-MM-DD HH:mm:ss');
  return formattedTime;
};

// Convert UTC to local time for display
export const convertToLocal = (utcTime: string, timeZone: string) => {
  return moment.utc(utcTime).tz(timeZone).format('h:mm A'); // Format it to h:mm AM/PM
};

function buildDateTime(date: Date, timeString: string, timeZone: string) {
  // timeString: "2:30 PM" or "14:30"
  const [time, modifier] = timeString.split(" ");
  // let [hours, minutes] = time.split(":").map(Number);
  const timeParts = time.split(":").map(Number);
  let hours = timeParts[0];
  const minutes = timeParts[1];

  // Handle 12-hour format
  if (modifier) {
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const iso = `${year}-${month}-${day}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;

  // Build Date in the given timezone
  const zonedDate = new Date(
    new Date(iso).toLocaleString("en-US", { timeZone })
  );
  return zonedDate;
}

// Convert AU slot to local timezone
export function convertSlotToLocal(selectedDate: Date, slot: string) {
  const auDate = buildDateTime(selectedDate, slot, "Australia/Sydney");
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // user’s device tz
  }).format(auDate);
}

export const getAuthHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});
