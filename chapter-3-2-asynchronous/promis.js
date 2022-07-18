let myPromise = new Promise(resolve => {
    resolve([1,5,6])
})

myPromise.then(console.log)