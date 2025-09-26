import Navbar from "../../../Navbar/navbar";
import "../bpStyle.css";
import i1 from "./image.png";
import i2 from "./image1.png";
import i3 from "./image2.png";
import i4 from "./image3.png";
import i5 from "./ma.png";
import i6 from "./image4.png";
import i7 from "./image5.png";
import i8 from "./image6.png";
import i9 from "./pred.png"



function FinanceBlog(){
return (
<div>
    <div className="bpStyle text-justify hyphenate">
        <div className="text-3xl pb-2">Setting up for Stock market Analysis. </div>
        <h1 className="text-xl underline">Introduction, goals, background </h1>

        <div>        
            Before I studied, I completed an apprenticeship in a mixture of IT and economics.
            Overall, I am fairly interested in the idea of what pushes markets up and down.
            But over the last 4-5 years I have been busy with work and other topics.
            and I neglected my interest in the economy, so I thought I freshened it up by programming myself a
            Stock market trading bot.
        </div>
        <div>
            Now, this has a couple of advantages: I get to program something in Python again.
            I get to look at indicators that drive up stock prices, be they conventional indicators or others.
            I am especially wondering if I can link the amounts of messages on X containing the company name to stock market changes.
        </div>
        <div>
            From a technical standpoint, I heard that transformers seem to be doing well in time series analysis.
            I was wondering if I could build a decent model using a transformer or if a hybrid of LSM/CNN with
            Different networks for other analyses would do a better job of calculating the value.
            I am also curious, as Transformers are notoriously difficult to converge on anything, so I will need to spend some time on that.
        </div>
        <h1 className="text-xl underline">Technical Part </h1>

        <div>
            But that is for future me.
            For now, I need to focus on what is ahead. I started off by collecting about ~10 GB of financial data from the internet of about 6,000 companies.
            This is fairly annoying to get, and the use of API's is fairly restrictive, which is something I can think about as soon as my bot is reasonably profitable on validation data.
        </div>
        <div>
            First, I created a function to load in data from a given file into the project to improve the data handling.
            Then, I wanted to visualize different information about the stock.
            Since these companies are important to people, I used a FAANG company, Apple.
            <img src={i1} alt="an Image of Apple stock prices."/> 
            Now, as you might see, it is mostly red with some green; that is because I hoped to be able to display open and closed on one graph.
            But the dataset is simply too large for this with ~11000 rows, something I should have kept in mind.
            Luckily there is a library to display data like that, and I can easily display it properly:
            <img src={i2} alt="a better graph"/>
        </div>
        <div>
            I also have some different data I can represent, and I was wondering what they would look like:
            One of them is the number of stocks bought per day:
            <img src={i3} alt="stocks sold/day"/>
            Now, there doesn't seem to be much correlation between how the stock is doing and how much is traded, although it is a good indicator that <span className="font-semibold">something</span> is going on.
            and that makes sense; when the stock is doing well, many people wish to buy. When it's doing poorly, they wish to sell.
            and very little activity when nothing is happening.
        </div>
        <div>
            <img src={i4} alt ="percentage increase"/>
            Now the percentage increase also doesn't look very ordered. And that makes sense; if it were easy to read, deterministic bots would simply be the best traders, and no humans would be able to work there.
            It appears that the apple stock has been a lot more volatile as of late than it used to be in the past, which is not obvious to me at that point why that would be.
            I would guess that it is hard to gauge how well the company is doing, and which is why the stock price is so volatile?
        </div>
        <div>
            Another indicator I can use is the moving average.
            It's an okay tool to see the trend of a stock over certain timeframes.
            <img src={i5} alt="moving average"/>
            I made a random choice of 3(MA3) and 10/MA10) days.
        </div>

        <h1 className="text-xl underline">Setting up a training environment</h1>
        <div>
            In order to get started with a trading bot, I need to build some infrastructure to evaluate the bot.
            So I built a trivial bot to build the proper evaluation of the future bots.
            I simply use MA3 and MA10 to determine whether or not I should buy/sell stocks.
            <img src={i6} alt="an image of code"/>
            This takes in a dataset and then trades over the given timeframe using the close value of each day.
            Note that this is a very terrible idea and should under no circumstances be used like this in practice.
            Anyways, the 1.5 is the fee of transaction that I have defined.
            Note that might be subject to change, as it is just a random guess of what I remember.
        </div>
        <div>
            Anyways, I now build a version that allows me to pass a function that then does the evaluation.
            I can specify how many different graphs should be analyzed.
            I also can define with how much money it is supposed to start,
            and then continue with the new value after completing one.
            Note that this is not perfect because these stocks are usually running in parallel, not in order, but it is good enough for the time being.
            <img src={i7} alt="code for managing trading alg"/>
            This describes the return of the project.
            Now, in the algorithm used as an example here, I also added a print command, to show the amount of money after trading.
            if we now look at the graph we get the following result: 
            <img src={i8} alt="numberReturn"/>
            Now, as we see within about 300 years (8 projects averaging 40 years) of trading the
            or rather trading 8 stocks for 40 years, the bot loses 100% of its initial value.
            Now this is surely not a good result, but the infrastructure is almost there.

        </div>
        <h1 className="text-xl underline">Outlook and Improvments</h1>
        <div>
            I now have a decent framework to build a testing environment; however, it is not perfect yet.
            I am uncertain if I will continue on improving the test environment or if I first want to build a decent
            LSTM Network.
            <img src={i9} alt="LSTM result"/>
            The basic LSTM already exists, but I need to build a bigger data collection pipeline and streamline the entire thing into classes.
            and then I can start migrating to.py files instead of notesbooks.
            But this project has to be put a bit on the shelf for ~3 weeks for a robot project with Kotlin for a museum (which I will write about soon).
            Maybe on the holidays I get bored a bit and continue building on this.
        </div>
    </div>
</div>)
}

export default FinanceBlog;