let numVisited;
const getVisited = browser.storage.local.get();
getVisited.then((res) => {
    if (res[window.location.host] === undefined)
        numVisited = 1;
    else
        numVisited = res[window.location.host] + 1;

    const a = {};
    a[window.location.host] = numVisited;
    browser.storage.local.set(a).catch(e => console.error(e));
});