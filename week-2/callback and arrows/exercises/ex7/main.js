const explode = (lightFunc, soundFunc, sound) => {
    lightFunc();
    setTimeout(() =>soundFunc(sound),1000);
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")