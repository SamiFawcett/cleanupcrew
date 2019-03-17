/*
 * Determines whether or not a user's location is within a circular cleanup region.
 *
 * @param userLat       The latitude of the user's location.
 * @param userLong      The longitude of the user's location.
 * @param originLat     The latitude of the origin of the cleanup region.
 * @param originLong    The longitude of the origin of the cleanup region.
 * @param regionRadius  The radius of the cleanup region.
 * @return Whether or not the user's location is within the cleanup region.
 */
function inCleanupRegion(userLat, userLong, originLat, originLong, regionRadius) {
  originToUserLocation = computeDistance(userLat, userLong, originLat, originLong)  // Distance formula
  return originToUserLocation < radius;
}

/*
 * Computes the distance between two latitude and longitude locations
 * using the Haversine formula:
 * https://en.wikipedia.org/wiki/Haversine_formula
 *
 * @param lat1 The latitude of the first location.
 * @param lon2 The longitude of the second location.
 * @param lat2 The latitude of the first location.
 * @param lon2 The longitude of the second location.
 * @return The distance between the two locations [meters]
 */
function computeDistance(lat1, lon1, lat2, lon2){
  var R = 6378.137; // Radius of earth in km
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000; // meters
}

/*
 * Returns whether or not the date/time of the user's recorded location is between the cleanup's start and end time/date.
 *
 * @param utcDateUserLocation The date/time when the user's location was recorded in ISO-8601 format
 * @param utcDateCleanupStart  The date/time of the cleanup's start in ISO-8601 format
 * @param utcDateCleanupEnd    The date/time of the cleanup's end in ISO-8601 format
 * @return Whether or not user location's date/time is within the cleanup period.
 */
function duringCleanupPeriod(utcDateUserLocation, utcDateCleanupStart, utcDateCleanupEnd) {
  var dateUserLocation = new Date(utcDateUserLocation);
  var dateCleanupStart = new Date(utcDateCLeanupStart);
  var dateCleanupEnd = new Date(utcDateCleanupEnd);
  return dateUserLocation <= dateCleanupEnd && dateUserLocation >= dateCleanupStart;
}
