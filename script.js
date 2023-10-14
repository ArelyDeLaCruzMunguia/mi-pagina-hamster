let objTypeWrt=new Typewriter(titulo, {
    loop:true
});

objTypeWrt
    .typeString('Los Roedores más tiernos del Mundo')
    .pauseFor(1000)
    .deleteChars(34)
    .start();