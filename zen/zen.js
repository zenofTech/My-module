let menu = document.querySelector('.menu--items--mobile');
let intro = "Hello 👋, I am Muktar Aliyu Web developer, I love working on exciting projects, always looking for better exciting opportunities. let's build a strong connections."
let introDiv = document.querySelector('.my-intro');
let bar = document.querySelector('.fa-bars')
let i = 0;
let body = document.querySelector('.body--about')


typerForIntro = () =>{
    if(i < intro.length){
        introDiv.innerHTML += intro.charAt(i);
        i++
        setTimeout(typerForIntro, 100);
    }
}
typerForIntro()