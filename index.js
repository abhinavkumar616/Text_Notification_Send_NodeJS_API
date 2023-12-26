const Nexmo=require("nexmo")

const nexmo= new Nexmo({
    apiKey:"27099b9c",
    apiSecret:"Wxt9xgnBUnAz3igs"
});

const from ="Vonage APIs";
const to="+917505666762";
const text="Hello Chotu Yadav, klh office time pe chalna hai, okay!!!!!!";

nexmo.message.sendSms(from,to,text)

