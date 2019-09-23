// This is where we put our axios calls
import axios from "axios"

export default {
    getEvents: function (query) {
        return axios.get("/v1/events/:city");
    },

    getYelp: function (query) {
        return axios.get("/v1/yelp/:city");
    },

    getFlight: function (query) {
        return axios.get("/v1/flight");
    },

    getHotel: function (query) {
        return axios.get("/v1/hotel");
    }
};