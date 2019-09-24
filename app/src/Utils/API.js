// This is where we put our axios calls
import axios from "axios"

export default {
    getEvents: function (query) {
        return axios.get("/v1/events/" + query);
    },

    getYelp: function (query) {
        return axios.get("/v1/yelp/"  + query);
    },

    getFlight: function (query) {
        return axios.get("/v1/flight");
    },

    getHotel: function (query) {
        return axios.get("/v1/hotel");
    }
};