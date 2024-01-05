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

//----------------------------------------Analytics Section------------------------------------------
const url = 'data';
d3.json(url).then(function(data) {
    console.log(data);
    console.log(data.map(d=>d[0]));
    console.log(data.map(d=>d[1]));
    
  });

// TITLE INFO-BOX : Create function for the title info box
function infoBox(sample){
    d3.json(url).then(function(data){
        // Assign all titles data to titleData
        let titleData = data.map(d=>d[0]);
        // Find the array of matching sample title to titles data
        let titleSampleMatch = titleData.filter(match => match == sample);
        // Access the rest of the data within the array
        let titleIndex = titleData.findIndex(x =>x==titleSampleMatch)
        let titleSampleData = data[titleIndex];
        let columnsNames = data[0]
        // clear the metadata out
        d3.select("#infobox-menu").html("");
        d3.select("#infobox-main").html("");
        // Get the key/value pair and display in the info box
        columnsNames.forEach((i)=>{
            d3.select("#infobox-menu").append("h3").text(`${i}:`);
        });  
        Object.values(titleSampleData).forEach((value)=>{
            d3.select("#infobox-main").append("h3").text(` ${value}`);   
        });
    });
};  

// IMDB RATING GAUGE CHART : Create function for gauge chart 
function gaugeChart(sample){
    d3.json(url).then(function(data){
        // Assign all titles data to titleData
        let titleData = data.map(d=>d[0]);
        // Find the array of matching sample title to titles data
        let titleSampleMatch = titleData.filter(match => match == sample);
        // Access the rest of the data within the array
        let titleIndex = titleData.findIndex(x =>x==titleSampleMatch)
        let titleSampleData = data[titleIndex];
        // get the IMDb rating score of the title
        let rating = titleSampleData[13]
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

//TOP 10 MOVIE/SERIES BAR GRAPH : Ploting bar chart for top 10 movies and series
//Create function for bar chart of top 10 Movies with viewed hours
function bartopChart(sample){
    d3.json(url).then(function(data){
        // title names for y-axis
        let titleData = data.map(d=>d[0]);
        // viewed hours for x-axis
        let viewedHours = data.map(d=>d[1]);

        // Find the array of matching sample title to titles data
        let titleSampleMatch = titleData.filter(match => match == sample);
        // Access the rest of the data within the array
        let titleIndex = titleData.findIndex(x =>x==titleSampleMatch)
        let titleSampleData = data[titleIndex];
        let category = titleSampleData[8]
        //filter out the matching data to this category

        let categoryMatch = data.filter(match => match == category)
        let title_name = categoryMatch.map(d=>d[1]);
        let title_labels = categoryMatch.map(d=>d[1]);
        let viewed_hours = categoryMatch.map(d=>d[2]);

        let yTicks = title_name.slice(0,11);
        let xValues = viewed_hours.slice(0,11);
        let textLabels = title_labels.slice(0,11);


        // Slice the first 10 (happens to be the top 10) titles for display
        // let yTicks = titleData.slice(0,11);
        // let xValues = viewedHours.slice(0,11);
        // let textLabels = titleData.slice(0,11);
        
        // Set up bar chart
        let barChart = {
            x: xValues.reverse(),
            y: yTicks.reverse(),
            text: textLabels.reverse(),
            type:"bar",
            orientation: "h"
        };
        // Set up the layout
        let layout = {
            title: "Top 10 Titles",
            plot_bgcolor:"black",
            paper_bgcolor:"black"
        };
        // Plot the bar chart
        Plotly.newPlot("bar-top",[barChart],layout)
    });
};

// BUBBLE CHART : Create function for the bubble chart: ratings vs. viewed hours
function bubbleChart(sample){
    d3.json(url).then(function(data){
       // ratings for y-axis
       let ratings_bubble = data.map(d=>d[13]);
       // viewed hours for x-axis
       let viewedHours = data.map(d=>d[1]);
                
        // Set up the bubble chart
        let bubbleChart = {
            x: viewedHours,
            y: ratings_bubble,
            mode: "markers",
            marker:{
                size: ratings_bubble,
                color: ratings_bubble,
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

// BAR CHART : Create function for bar chart: genre vs. viewed hours
function barChart(sample){
    d3.json(url).then(function(data){
        // genre names for y-axis
        let genreData = data.map(d=>d[12]);
        // viewed hours for x-axis
        let viewedHours = data.map(d=>d[1]);
        // Set up bar chart
        let barChart = {
            x: genreData,
            y: viewedHours,
            text: genreData,
            type:"bar",
            // orientation: 
        };
        // Set up the layout
        let layout = {
            title: {
                text:"Viewed Hours vs. Genre",
                font:{
                    size:10,
                    color:"white"
                }
        },
            plot_bgcolor:"black",
            paper_bgcolor:"black"
        };
        // Plot the bar chart
        Plotly.newPlot("bar",[barChart],layout)
    });
};


// Initialize functions
function init(){
    let select = d3.select("#selDataset");
    // Find the sample names 
    d3.json(url).then(function(data){
        let sampleNames = data.map(d=>d[0]);
        sampleNames.forEach((sample)=>{
            select.append("option").text(sample).property("value",sample);
        });
        // default sample
        let sample1 = sampleNames[1];
        infoBox(sample1);
        gaugeChart(sample1);
        // let categoryName = data.map()
        bartopChart(sample1);
        barChart(data);
        bubbleChart(data);
    })
};

// Create function to update the dashboard
function optionChanged(item)
{
     // call the function to build the demographics box
    infoBox(item);

    // call the function to build the bar chart
    bartopChart(item);

    // // call the function to build the bubble chart
    // bubbleChart(item);

    // // call the function to build the gauge chart
    gaugeChart(item);
}
// call the initialize function
init();







