// This is where we put our axios calls
import axios from "axios"

   let token = localStorage.getItem("token");
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
    },


    //Save/Delete
    getSavedEvent: function(){
        return axios.get("/v1/saved/event");
    },
    getSavedYelp: function(){
        return axios.get("/v1/saved/yelp");
    },
    saveYelp: function(yelpData){
        return axios.post("/v1/saved/yelp", {headers: {"Authorization" : token}}, yelpData)
    },
    saveEvent: function(eventData){
        return axios.post("/v1/saved/event", {headers: {"Authorization" : token}}, eventData)
    },
    deleteYelp: function(id){
        return axios.delete("/v1/saved/yelp/" + id)
    },
    deleteEvent: function(id){
        return axios.delete("/v1/saved/event/" + id)
    }
};