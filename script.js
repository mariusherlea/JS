let p_content=document.getElementById('header').innerHTML;
let header={
    'background-color':'yellow',
    render:function(){
        
        const cevaCS=document.getElementById('menu-nav');

        // console.log(p_content);
        
        // console.log(content['background-color']);

        if(p_content=='Home'){
            document.getElementById('header').innerHTML='Marius Herlea HomePage. Willkommen !';

            // backgroundColor = background-color
            
            cevaCS.style.backgroundColor=this["background-color"];
            document.getElementById('header').style.backgroundColor='blue';

        } else if(p_content=='CV'){

            document.getElementById('header').innerHTML='Während ich arbeite, ist der Lebenslauf veraltet :)';

            cevaCS.style.backgroundColor="cyan";
            document.getElementById('header').style.backgroundColor='green';
        
        } else {
        }
    
    },

}

let content={

    print: function(){
        var ul=document.getElementById('menu-nav');
        var Home=document.createElement('button');
        var CV=document.createElement('button');

        Home.appendChild(document.createTextNode('Home'));
        CV.appendChild(document.createTextNode('CV'));
        ul.appendChild(Home);
        ul.appendChild(CV);

        

        Home.onclick=function(){
            window.location='index.html'
        }
        CV.onclick=function(){
            window.location='cv.html'
        }
    }
    
}

window.addEventListener('load',myInit, true);

function myInit(){
    header.render();
    content.print();
}