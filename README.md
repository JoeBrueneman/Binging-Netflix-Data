# Binging_Netflix_Data
Netflix has just made history by releasing, for the first time ever, a report which detailed 6 months of viewing data covering 99% of their portfolio. This report allowed new insights into what people watch on Netflix around the world, and this project was an effort to bring even more data into the picture. By merging Netflix’s data with public IMDB information, we were able to visualize more data on what people are watching, and what people are more likely to turn on when watching Netflix.

![Landing_page_capture](https://github.com/JoeBrueneman/Binging_Netflix_Data/assets/142447460/a4e0ae9b-7c29-448a-8315-439a4924c203)

Below is a summary of our website –

Web Page Summary

A Hub that provides an analytical exploration into Netflix’s vast content library, designed to engage users in discovering trends and insights within the streaming service’s viewership data.

Home Page

The welcome page interface allows users to explore a data-rich journey into Netflix’s most popular shows using a clear call-to-action button. Visual layouts powered by CSS styling and interactive JavaScript elements.

Statistics Section

It features interactive charts, and graphs built with libraries such as D3.js and Plotly, this section translates complex data into accessible visualizations. Users can interact with the Top 10 rated shows and movies, subscriber growth and explore the expansive reach and popularity of Netflix content.
Recommendation tab is where curated picks from all the team members’ personalization meets data. This suggests potential favorite shows for users. The recommendations are generated through data processing with Python, showcasing the power of backend technologies such as Flask and Pandas in data manipulation.

![dropdown_capture](https://github.com/JoeBrueneman/Binging_Netflix_Data/assets/142447460/6246e5b1-5a45-46e6-977b-3dff7ba0d703)

Analytics Section

The core of the webpage is a dynamic dashboard displaying diverse visualizations, including gauge charts for IMDb ratings, bubble charts correlating ratings with viewing hours, and box plots showing genres vs ratings. The analytics tools involved, such as Plotly, D3.js that offers users the ability to filter data through movies/shows titles and customize visuals.

Meet the Team

The Team Members section introduced the creative analysts behind the project who made “Binging Netflix Data” a reality."

Webpage Instructions: Exploring Netflix Data Insights

Introduction: This guide provides steps to access information about Netflix's most viewed shows, statistical analytics, and recommendations.
--------------- 
Step-by-Step Instructions:
     * Accessing the Webpage:
        * Open your web browser.
        * Enter "https://binging-netflix-data-online.onrender.com/" into the address bar and press Enter.
      * Navigating the Webpage:
        * Click on the "CLICK TO START EXPLORING" button to access four tabs:
          * "Top 10 Shows" reveals the top ten movies and series. Click on "MOVIES" or "SERIES" to view respective titles.
          * "Statistics" showcases analytics. Click "LEARN MORE ABOUT THIS" for graphical representations.
          * "Viewed Hours" displays the top 10 most watched shows. Click "SEE MORE" to access a dropdown with all show titles.
          * "Our Recommendation" reveals team members' top five show recommendations. Click on each profile picture for their choices.
      * Accessing Show Information:
        * Use the dropdown box to view all show titles.
        * Select a show title to display its information in the box.
        * The IMDb rating for the selected show is shown on a gauge chart.
      * Accessing Code Information:
        * Visit the "Who’s binging?" section.
        * Click on the "DETAIL PROFILE" box to access this webpage’s GitHub site.
      * Troubleshooting:
        * For any issues, please contact our support team for assistance.
        
Conclusion: You've successfully navigated through the information on our webpage. Feel free to explore other features or reach out to our support team if needed.


This effort was made possible after taking the data from it’s source all the way to the final product, including using Python(Jupyter notebook/pandas), Flask, PostgreSQL, and JS with HTML front end.

During the course of this project we only used datasets which were publicly available, and we did not use them for any commercial product. While coding we took efforts to keep track of and credit any code which was not originally ours, and documented any extra resources we did use. Since the datasets do not include any personal information there were no ethical concerns for any persons viewing data.

We would like to take a moment here to mention that while cleaning the data it proved difficult to match the Netflix information with the IMDB information, due to this logic was used to match the datasets and this can cause some of the data that was matched and presented here to be false. Roughly 3k of the 11.7k records which were matched were done using logic.


Data references
1.	Youtube content - ndriWebDev https://youtu.be/GL-jRHPSnPE?si=CEn22lD1lqY0Wnk5
2.	Youtube content - codingLab https://youtu.be/wEfaoAa99XY?si=0PzpZuZDhXcA8hMQ 
3.	Youtube content - Tyler Potts https://youtu.be/OFKBep95lb4?si=vCsd91bqDCBfPYYh 
4.	Youtube content - Thapa Technical https://youtu.be/HxRhM5h--ro?si=ej0hwwGimHacVMo- 

Data Sources
Netflix viewing data - https://about.netflix.com/en/news/what-we-watched-a-netflix-engagement-report 
IMDB database information - https://developer.imdb.com/non-commercial-datasets/ 
