// Select DOM items
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

// Functions for tab items
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class to display the content
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab item click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Functions for sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active-sidebar');
}

// Listen for hamburger menu click
hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");
    sidebar.classList.toggle('active-sidebar');
});

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
});

//Top-10 Table
const buttonTopItems = document.querySelectorAll('.btn-top')
const buttonTopTables = document.querySelectorAll('.table-top');
//select table content
function selectTopTable(e) {
    removeTopTable();
    //grab table from DOM
    const buttonTopTable = document.querySelector(`#${this.id}-table`);
    //add table class
    buttonTopTable.classList.add('show-table');
}
function removeTopTable() {
    buttonTopTables.forEach(item => item.classList.remove('show-table'))
}
//listen for button click
buttonTopItems.forEach(item => item.addEventListener('click', selectTopTable))

//Recommendation Table
const buttonItems = document.querySelectorAll('.btn-list')
const buttonListTables = document.querySelectorAll('.table-list');
//select table content
function selectTable(e) {
    removeTable();
    //grab table from DOM
    const buttonListTable = document.querySelector(`#table-${this.id}`);
    //add table class
    buttonListTable.classList.add('show-table');
}
function removeTable() {
    buttonListTables.forEach(item => item.classList.remove('show-table'))
}
//listen for button click
buttonItems.forEach(item => item.addEventListener('click', selectTable))

//----------------------------------------Analytics Section----------------------------------------------------------------

//----------------------------------------Graph Functions------------------------------------------------------------------
// set up data url
const url = 'data';
// check data on console
d3.json(url).then(function(data) {
    console.log(data);
    console.log(data[0]);
    console.log(data[0]); 
  });

// 1. INFO-BOX : create function
function infoBox(sample){
    d3.json(url).then(function(data){
        // find the matching title to sample title, this returns the list of the matching sampe title
        let titleSampleMatch = data.filter(match => match.Title == sample);
        // access the data within the array
        let titleSampleData = titleSampleMatch[0];
        // clear the existing sample data out
        d3.select("#infobox-main").html("");
        // get the key/value pair and display in the info box
        Object.entries(titleSampleData).forEach(([key,value])=>{
            d3.select("#infobox-main").append("h3").text(`${key}: ${value}`);   
        });
    });
};  

// 2. GAUGE CHART for MDB RATING : create function 
function gaugeChart(sample){
    d3.json(url).then(function(data){
        // find the matching title to sample title, this returns the list of the matching sampe title
        let titleSampleMatch = data.filter(match => match.Title == sample);
        // access the data within the array
        let titleSampleData = titleSampleMatch[0];
        // get the IMDb rating score of the title
        let rating = Object.values(titleSampleData)[5]
        // Set up the gauge chart
        let gaugeChart = {
            domain: {x:[0,1],y:[0,1]},
            value: rating,
            title: {
                text: "<b>IMDb Rating Score</b>",
                font: {color: "#deb522", size:20}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickwidth:2, tickcolor:"#deb522"},
                bar:{color:"#141414"},
                bgcolor: "white",
                borderwidth:2,
                bordercolor:"#deb522",
                steps:[
                    {range:[0,1], color:"#ff0000"},
                    {range:[1,2], color:"#ff4d00"},
                    {range:[2,3], color:"#ff7400"},
                    {range:[3,4], color:"#ff9a00"},
                    {range:[4,5], color:"#ffc100"},
                    {range:[5,6], color:"#f0f7da"},
                    {range:[6,7], color:"#c9df8a"},
                    {range:[7,8], color:"#77ab59"},
                    {range:[8,9], color:"#36802d"},
                    {range:[9,10], color:"#234d20"},
                ]
            }    
        };
        // Set up layout
        let layout = {
            width:400,
            height:400,
            margin:{t:0, r:0 ,l:0, b:0},
            plot_bgcolor:"black",
            paper_bgcolor:"black",
            font: {color:"#deb522", family:"Arial"}
        };
        // Plot the gauge chart
        Plotly.newPlot("gauge",[gaugeChart],layout);
    });
};

// 3. BUBBLE CHART for ratings vs. viewed hours : create function 
function bubbleChart(sample){
    d3.json(url).then(function(data){
        // get all of the ratings data
        let y_ratings=[]
        data.forEach((i)=>{
            y_ratings.push(i.averageRating)
        })
        // get all of the viewed hours data
        let x_viewedHours=[]
        data.forEach((i)=>{
            x_viewedHours.push(i.Hours_Viewed)
        })       
        // Set up the bubble chart
        let bubbleChart = {
            x: x_viewedHours,
            y: y_ratings,
            mode: "markers",
            marker:{
                size: y_ratings,
                color: y_ratings,
                colorscale: "earth"
            },
            // text: otu_labels
        };
        // Set up the layout
        let layout = {
            title: {text:"Ratings vs. Viewed Hours",
                    font: {
                        size: 20,
                        color:"white"
                    }
                },
            hovermode: "closest",
            xaxis: {title: "Viewed Hours", color:"white"},
            yaxis: {title: "IMDb Ratings", color:"white"},
            plot_bgcolor:"black",
            paper_bgcolor:"black"
        };
        // Plot the bubble chart
        Plotly.newPlot("bubble", [bubbleChart],layout)
    });

};

// 4. SCATTER CHART for voters vs. viewed hours : create function 
function createScatterPlot(data) {
    d3.json(url).then(function(data){
        const labels = data.map(entry => entry.Title);
        const ratings = data.map(entry => entry.averageRating);
        const votersPerViewHour = data.map(entry => entry.numVotes / entry.Hours_Viewed);

        const trace = {
            x: ratings,
            y: votersPerViewHour,
            mode: 'markers',
            type: 'scatter',
            marker: {
                size: 10,
                color: '#00bbf9',
                line: {
                    color: 'rgba(75, 192, 192, 1)',
                    width: 1
                }
            }
        };

        const layout = {
            title: {
                text: 'Scatter Plot of Ratings vs Voters per View Hour',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            },
            xaxis: {
                title: {
                    text: 'Rating',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Voters per View Hour',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            plot_bgcolor:"black",
            paper_bgcolor:"black",
            // autosize: false,
            // width: 1000,
            // height: 500,
            // margin: {
            //     l: 50,
            //     r: 50,
            //     b: 100,
            //     t: 100,
            //     pad: 4
            // },
        };

        Plotly.newPlot('scatterPlot', [trace], layout);
    });
};

// 5. BOXPLOT CHART FOR GENRE VS. VIEWED HOURS:
function createBoxPlot(sample) {
    d3.json(url).then(function(data){
        // Extract genres and ratings
        const genres = [];
        const ratings = [];
        data.forEach((i)=>{
            genres.push(i.genres)
        })    
        data.forEach((i)=>{
            ratings.push(i.averageRating)
        }) 

        // Create traces for each genre
        const traces = [];

        [...new Set(genres)].forEach(genre => {
            const genreData = ratings.filter((_, i) => genres[i] === genre);

            traces.push({
                y: genreData,
                type: 'box',
                name: genre,
            });
        });

        const layout = {
            title: {
                text: 'Box Plot - Genres vs Rating',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            },
            xaxis: {
                title: {
                    text: 'Genres',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Rating',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
            },
            plot_bgcolor:"black",
            paper_bgcolor:"black",
        };

        Plotly.newPlot('boxplot', traces, layout);
    });
}



// //TOP 10 MOVIE/SERIES BAR GRAPH : Ploting bar chart for top 10 movies and series
// //Create function for bar chart of top 10 Movies with viewed hours
// function bartopChart(sample){
//     d3.json(url).then(function(data){
//         // title names for y-axis
//         let titleData = data.map(d=>d[0]);
//         // viewed hours for x-axis
//         let viewedHours = data.map(d=>d[1]);

//         // Find the array of matching sample title to titles data
//         let titleSampleMatch = titleData.filter(match => match == sample);
//         // Access the rest of the data within the array
//         let titleIndex = titleData.findIndex(x =>x==titleSampleMatch)
//         let titleSampleData = data[titleIndex];
//         let category = titleSampleData[8]
//         //filter out the matching data to this category

//         let categoryMatch = data.filter(match => match == category)
//         let title_name = categoryMatch.map(d=>d[1]);
//         let title_labels = categoryMatch.map(d=>d[1]);
//         let viewed_hours = categoryMatch.map(d=>d[2]);

//         let yTicks = title_name.slice(0,11);
//         let xValues = viewed_hours.slice(0,11);
//         let textLabels = title_labels.slice(0,11);


//         // Slice the first 10 (happens to be the top 10) titles for display
//         // let yTicks = titleData.slice(0,11);
//         // let xValues = viewedHours.slice(0,11);
//         // let textLabels = titleData.slice(0,11);
        
//         // Set up bar chart
//         let barChart = {
//             x: xValues.reverse(),
//             y: yTicks.reverse(),
//             text: textLabels.reverse(),
//             type:"bar",
//             orientation: "h"
//         };
//         // Set up the layout
//         let layout = {
//             title: "Top 10 Titles",
//             plot_bgcolor:"black",
//             paper_bgcolor:"black"
//         };
//         // Plot the bar chart
//         Plotly.newPlot("bar-top",[barChart],layout)
//     });
// };
// //COMPARE BOX PLOT

// INITIALIZE FUNCTIONS
function init(){
    let select = d3.select("#selDataset");
    // Find the sample names 
    d3.json(url).then(function(data){
        let sampleNames=[]
        data.forEach((i)=>{
            sampleNames.push(i.Title)
        })
        sampleNames.forEach((sample)=>{
            select.append("option").text(sample).property("value",sample);
        });
        // default sample
        let sample0 = sampleNames[0];
        infoBox(sample0);
        gaugeChart(sample0);
        bubbleChart(data);
        // let categoryName = data.map()
        // bartopChart(sample0);
        // barChart(data);
        
    })
};

// Create function to update the dashboard
function optionChanged(item)
{
     // call the function to build the demographics box
    infoBox(item);

    // call the function to build the bar chart
    // bartopChart(item);

    // // call the function to build the bubble chart
    // bubbleChart(item);

    // // call the function to build the gauge chart
    gaugeChart(item);
}
// CALL INITIALIZED FUNCTIONS
init();







