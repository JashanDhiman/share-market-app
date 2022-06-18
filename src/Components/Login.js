import React from "react";
//import fyersApiV2 from "fyers-api-v2";
import { useEffect } from "react";
//import axios from "axios";

//rtConnect(user, pwd, symbols, port, (bidask = 1), (heartbeat = 1));

const Login = () => {
  //const domain = process.env.REACT_APP_DEPLOY_DOMAIN;
  //const domain = "http://192.168.137.1";

  useEffect(() => {
    // -----------------generate auth code-----------------
    //fyersApiV2.setAppId(process.env.REACT_APP_App_Id);
    //fyersApiV2.setRedirectUrl("http://localhost:3000/login");
    //const responseurl = fyersApiV2.generateAuthCode();
    //console.log(responseurl);
    // -----------------generate access token-----------------
    //var config = {
    //  method: "post",
    //  url: "https://api.fyers.in/api/v2/validate-authcode",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  data: {
    //    grant_type: "authorization_code",
    //    appIdHash:
    //      "264d53e0988a7791c9656e1d7f94a3fc24aff8bbed5fecf6de0f9789f6677c5a",
    //    code: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE2NTU5MDAxNzgsImV4cCI6MTY1NTkzMDE3OCwibmJmIjoxNjU1ODk5NTc4LCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYUzQ3NTA4Iiwibm9uY2UiOiIiLCJhcHBfaWQiOiI1SEtSMDc5U1c4IiwidXVpZCI6IjcwODc0ZTZkZTEzYzRmMDZhNjdhNTUyNzcyZGU0OTllIiwiaXBBZGRyIjoiMC4wLjAuMCIsInNjb3BlIjoiIn0.1Wh8eI91QpgbZ7BRaV6fZkoSVaE5984jZAHEPgJbfIE",
    //  },
    //};
    //axios(config)
    //  .then((response) => {
    //    //localStorage.setItem("ATG_AccessToken", JSON.stringify(response.data));
    //    console.log(response.data);
    //  })
    //  .catch((error) => {
    //    console.log(error.response.data);
    //    //alert(error.response.data);
    //  });
    //------------------------------------------------------------------
    //const access_token =
    //  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2NTU5MTg5ODQsImV4cCI6MTY1NTk0NDI0NCwibmJmIjoxNjU1OTE4OTg0LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCaXMxR0lfcC11a1RMOEpJOUd0dW5zano2VUxGYUctenBZTDdzZEhzSVlJeFNRQjhLanVJUlByWG9PbE9tbmNPREFyVVVoSjJPeV9OaERCak5XM2FQSWFKMlp0Z3ZNRzFvTXYyWGF0NC1pMkZ4blFTTT0iLCJkaXNwbGF5X25hbWUiOiJTVU1BTFlBIEJIQVRUQUNIQVJZQSIsImZ5X2lkIjoiWFM0NzUwOCIsImFwcFR5cGUiOjEwMCwicG9hX2ZsYWciOiJOIn0.Fl12aX4yT7FpzTIbd3z5rKAPCuFhT6IJgdItR2K1RAg";
    //fyersApiV2.setAccessToken(access_token);
    //fyersApiV2.get_profile().then((response) => {
    //  console.log(response);
    //});
    //const reqBody = {
    //  dataType: "orderUpdate",
    //};
    //fyersApiV2.fyers_connect(reqBody, function (data) {
    //  console.log(data);
    //});
  }, []);

  return <div>Login</div>;
};

export default Login;
