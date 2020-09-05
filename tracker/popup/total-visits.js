const getVisited = browser.storage.local.get();
getVisited.then(res => {
    const elements = [];
    for (const i of Object.keys(res)) {
        if (i === "config")
            continue;
        elements.push({
            url: i,
            visits: res[i]
        });
    }
    document.getElementById('visitsToday').innerHTML = 'Total Visits: ' + elements[0].visits;
});