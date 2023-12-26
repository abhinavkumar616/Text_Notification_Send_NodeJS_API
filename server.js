const sid="AC66ae52f6b739d90698aa983f2bcecb66"
const auth_token="ee4ffe5b7c8dd0ed09c3de04dbb6deae"

const twilio=require("twilio")(sid,auth_token)

twilio.messages.create({
    from:"+17069792538",
    to:"+918619943099",
    body:"Hello Chotu Yadav, klh office time pe chalna hai, okay!!!!!!"
})
.then((res)=>{
    console.log("message has sent");
})
.catch((error)=>{
    console.log(error);
})