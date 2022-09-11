//ex1
/* function doX(){
    const inputEl = document.getElementById("inpt") as HTMLInputElement;
    console.log(inputEl.value);
}
 */
var inputEl = document.getElementById("inpt");
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener('keydown', function (e) {
    var target = e.target;
    console.log(target.value);
});
