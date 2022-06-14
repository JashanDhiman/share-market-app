import "./App.css";
import fyersApiV2 from "fyers-api-v2";
import { useEffect } from "react";
//import DataStored from "./Components/DataStored";

function App() {
  useEffect(() => {
    // generate auth code
    //fyersApiV2.setAppId(process.env.REACT_APP_App_Id);
    //fyersApiV2.setRedirectUrl("http://localhost:3000/login");
    //const responseurl = fyersApiV2.generateAuthCode();
    //console.log(responseurl);
    // generate access token
    //const reqBody = {
    //  auth_code:
    //    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE2NTU2NTk2ODIsImV4cCI6MTY1NTY4OTY4MiwibmJmIjoxNjU1NjU5MDgyLCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYUzQ3NTA4Iiwibm9uY2UiOiIiLCJhcHBfaWQiOiI1SEtSMDc5U1c4IiwidXVpZCI6IjkxYjM1MjIwZDlhZjRmZDM4NmVjM2NlMzUwMjdkOWIyIiwiaXBBZGRyIjoiMC4wLjAuMCIsInNjb3BlIjoiIn0.zbPGDTF2MkX5VNSpxRzD6FHnwJzcowY2CqxJjrWZAag",
    //  secret_key: process.env.REACT_APP_Secret_Id,
    //};
    //fyersApiV2.generate_access_token(reqBody).then((response) => {
    //  console.log(response);
    //});
  }, []);

  // request data
  const access_token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2NTU2NTk3MjksImV4cCI6MTY1NTY4NTA0OSwibmJmIjoxNjU1NjU5NzI5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCaXIxelIwelpjWkRUN1J2WFQySmQ2R3hSUnZDTkJTMTdsY3g5N1F2QWxnVXdqcmdGbEdKZkQtbGY0LV9qd3VXREpEdXRpcm05TFdHZ2ctam5USkJtQUdzdHRwcE1vQVJCVEVCNXZDZWhTdzZ6V3RmTT0iLCJkaXNwbGF5X25hbWUiOiJTVU1BTFlBIEJIQVRUQUNIQVJZQSIsImZ5X2lkIjoiWFM0NzUwOCIsImFwcFR5cGUiOjEwMCwicG9hX2ZsYWciOiJOIn0.nr5QBNl7h53_aoNxnrytS29gLD3pRTmpTjT3VAwy1Ic";
  fyersApiV2.setAccessToken(access_token);
  fyersApiV2.get_profile().then((response) => {
    console.log(response);
  });
  return (
    <div className="App">
      jashan says hello from backend
      {/*<DataStored />*/}
    </div>
  );
}

export default App;
