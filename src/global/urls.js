"use strict"

const mapKey = "AIzaSyBHu5GCJWf4J6p03jgBXMWY_Od1BEtyU90"
export const urls = {
    distanceMatrix: (originLat, originLong, desLat, desLong) =>
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`,
    mapDirection: (originLat, originLong, desLat, desLong) =>

        `https://maps.googleapis.com/maps/api/directions/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`,
    lawyersList: (originLat, originLong, type) =>
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${originLat},${originLong}&radius=1500&type=${type}&keyword=lawyer=${mapKey}`

}
