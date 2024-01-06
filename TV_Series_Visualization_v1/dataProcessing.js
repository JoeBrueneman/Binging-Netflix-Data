function convertCSVtoJSON(csvData) {
    const rows = csvData.split('\n').slice(1); // Exclude header
            const data = [];

            rows.forEach(row => {
                // Replace commas inside double quotes before splitting
                const rowWithReplacedCommas = row.replace(/(".*?")/g, (match) => {
                    return match.replace(/,/g, ';');
                });
                
                const columns = rowWithReplacedCommas.split(',');
                const genres = columns[12] ? columns[12].replace(/"/g, '').split(';') : []; // Split genres using '-'
                const entry = {
                    title: columns[0],
                    hoursViewed: parseInt(columns[1]),
                    availableGlobally: columns[2],
                    releaseDate: columns[3],
                    originalTitle: columns[4],
                    yearCountry: columns[5],
                    releaseYear: parseInt(columns[6]),
                    tconst: columns[7],
                    titleType: columns[8],
                    startYear: parseInt(columns[9]),
                    endYear: columns[10],
                    runtimeMinutes: parseInt(columns[11]),
                    genres: genres,
                    rating: parseFloat(columns[13]),
                    numVotes: parseInt(columns[14])
                };
                data.push(entry);
            });

            return data;
}

function displayJSONData(jsonData) {
    const jsonDataElement = document.getElementById('jsonData');
    jsonDataElement.textContent = JSON.stringify(jsonData.slice(0, 5), null, 2);
}
