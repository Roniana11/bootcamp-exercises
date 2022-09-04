const {PictureManager,add,calculateHyp,clearLowPriority} = require('./code')

test("add should return sum of a + b", () => {
    let sum = add(1, 2)
    expect(sum).toBe(3)
})

test("should return the square root of the sum of sqaures of a + b", () => {
    let hyp = calculateHyp(3,4)
    expect(hyp).toBe(5)
})

test("should return an array of objects with HIGH priority", () => {
    let priors = clearLowPriority([{ text: "dummy1", priority: "HIGH" }, { text: "dummy", priority: "LOW" }])
    expect(priors.length).toBe(1);
    expect(priors[0].text).toBe('dummy1');
})

test("should return an array of objects with HIGH priority", () => {
    let priors = clearLowPriority([{ text: "dummy1", priority: "HIGH" }, { text: "dummy", priority: "LOW" }])
    priors.forEach(t => {
        expect(t.priority).toBe("HIGH")
    })
})

test("shuold remove picture url from arr",()=>{
    const picManager = new PictureManager();
    picManager.addPicture("some_url");
    expect(picManager.pictureURLs.length).toBe(1);
    picManager.removePicture("some_url");
    expect(picManager.pictureURLs.length).toBe(0);
    

})