// hash
// document.addEventListener("load", () => {
//     document.body.innerHTML = location.hash.slice(1);
// });
// window.addEventListener("hashchange", () => {
//     document.body.innerHTML = location.hash.slice(1);
// })

// history
document.addEventListener("load", () => {
    document.body.innerHTML = location.pathname;
});
window.addEventListener("popstate",()=>{
    document.body.innerHTML = location.pathname;
})
