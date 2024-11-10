import Navbar from "../../../navbar/navbar";

function todoPost(){
return (
<div>
    <Navbar i={2}/>
    <div style={{marginTop:"10%", marginLeft:"10%", fontSize:"medium", maxWidth:"60%"}}>
    <div className="text-3xl pb-2">Work in Progress</div>
    <div>        
        Nothing here yet. but the functionality exists already for writing, so.
        I have am currently writing on some code for a museum to automate tours through it. 
        It is 80% done, and I will soon make some test runs with it through the museum. I hope to
        have everything funcional before that happens. 
        </div>
    <div>also I have an two old Python Projects I want to do some summaries on: one talking about CNN's about transfer learning, and the other about LSTM for stock market prediction.</div>
    <div>The latter will be used in Stock market Prediction, which I want to have done by around Jul 2025, when I have more time. </div>
    <div> I also look forward to make some Project in java with Spring/ something in Go, I havent had any use cases as of late, and I feel like I'm getting a bit out of touch with those languages. </div>
    <div> Oh, and I will obviously write about the experience of building this website and its deployment. TL:DR is my web building skills have severly increased over the last few months, and I cam build better web apps much quicker now.   </div>
    </div>
</div>)
}

export default todoPost;