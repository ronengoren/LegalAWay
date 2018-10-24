"use strict"

const mapKey = "AIzaSyBHu5GCJWf4J6p03jgBXMWY_Od1BEtyU90"
export const urls = {
    distanceMatrix: (originLat, originLong, desLat, desLong) =>
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`,
    mapDirection: (originLat, originLong, desLat, desLong) =>
        `https://maps.googleapis.com/maps/api/directions/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`
}
