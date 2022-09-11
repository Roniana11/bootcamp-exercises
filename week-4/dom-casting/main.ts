
//ex1
/* function doX(){
    const inputEl = document.getElementById("inpt") as HTMLInputElement;
    console.log(inputEl.value);
}
 */
const inputEl = document.getElementById("inpt");

inputEl?.addEventListener('keydown', (e)=>{
    const target = e.target as HTMLInputElement;
    console.log(target.value);
})