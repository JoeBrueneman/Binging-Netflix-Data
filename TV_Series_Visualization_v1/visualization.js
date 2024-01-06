function createScatterPlot(data) {
    const labels = data.map(entry => entry.title);
    const ratings = data.map(entry => entry.rating);
    const votersPerViewHour = data.map(entry => entry.numVotes / entry.hoursViewed);

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
        }
    };

    Plotly.newPlot('scatterPlot', [trace], layout);
}

function createBarChart(data) {
    const genresData = {};

    data.forEach(entry => {
        entry.genres.forEach(genre => {
            if (genre !== '\\N') {
                genresData[genre] = (genresData[genre] || 0) + entry.hoursViewed;
            }
        });
    });

    // Sort genres in descending order of hours viewed
    const sortedGenres = Object.keys(genresData).sort((a, b) => genresData[b] - genresData[a]);
    const genreHoursViewed = sortedGenres.map(genre => genresData[genre]);

    const trace = {
        x: sortedGenres,
        y: genreHoursViewed,
        type: 'bar',
        marker: {
            color: sortedGenres.map((genre, index) => `rgba(0, 187, 249, ${1 - index / sortedGenres.length})`),
            line: {
                color: 'rgba(75, 192, 192, 1)',
                width: 1
            }
        }
    };

    const layout = {
        xaxis: {
            title: {
                text: 'Genres',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            tickfont: {
                size: 12
            }
        },
        yaxis: {
            title: {
                text: 'Total Hours Viewed',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            tickfont: {
                size: 12
            }
        },
        title: {
            text: 'Popularity of Genres based on Hours Viewed',
            font: {
                size: 20,
                weight: 'bold'
            }
        }
    };

    Plotly.newPlot('barChart', [trace], layout);
}

function createBoxPlot(data) {
    // Extract genres and ratings
    const genres = [];
    const ratings = [];

    data.forEach(entry => {
        entry.genres.forEach(genre => {
            genres.push(genre);
            ratings.push(entry.rating);
        });
    });

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
    };

    Plotly.newPlot('boxPlot', traces, layout);
}
