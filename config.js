/**
 * Engagement Event Configuration
 * 
 * Update any text, date, time, venue, or calendar details below.
 * Changes here reflect immediately on the invitation site.
 */
window.EVENT_CONFIG = {
  // Event Date & Time (ISO 8601 format with timezone)
  startDate: "2026-10-25T10:00:00+05:30",
  
  // Ceremony Time Display Strings
  timeRangeMobile: "10:00 AM — 12:00 PM",
  timeRangeDesktop: "10:00 AM – 12:00 PM",
  
  // Google Calendar Integration Parameters (UTC: 10:00 AM IST = 04:30 UTC, 12:00 PM IST = 06:30 UTC)
  calendar: {
    title: "Vignesh & Keerthana — Engagement",
    dates: "20261025T043000Z/20261025T063000Z",
    location: "Hotel Venkateshwara, Madurai"
  },
  
  // Family Details
  groom: {
    name: "Vignesh",
    father: "R.Kasilingam",
    mother: "K.Manjula"
  },
  bride: {
    name: "Keerthana",
    father: "C.Balasubramanian",
    mother: "M.Aruna"
  },
  
  // Venue Details
  venue: {
    name: "Hotel Venkateshwara",
    formerName: "(Former name : Hotel Sree Devi)",
    city: "Madurai",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Venkateshwara+Madurai"
  }
};
