function readFile(file, callback) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const csvData = e.target.result;
        callback(csvData);
    };

    reader.readAsText(file);
}
