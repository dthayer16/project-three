import axios from "axios";
require("dotenv").config();


// Export an object containing methods we'll use for accessing the eventful API

export default {
    getEvents: function(location) {
    return axios.get("http://api.eventful.com/json/events/search?app_key=" + process.env.eventfulKey + "&location=" + location + "date=Future&sort_order=date&category=music,comedy,family_fun_kids,festivals_parades,movies_film,food,art,holiday,attractions,community,singles_social,outdoors_recreation,performing_arts,animals,sports,other");
  }
};
