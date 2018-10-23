import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
   height: 500,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
export default styles;