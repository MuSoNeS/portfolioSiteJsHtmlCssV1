'use strict';
const switcher = document.querySelector('.btnSwitchThemeToLigthOrDar');
switcher.addEventListener('click',function(){/*клик и функция, указывает на событие, связанное с кликом*/
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');/*toggle автоматически удаляет и добавляет классы.*/
   
    
    const className = document.body.className;
    if(className=="light-theme"){/*Если имя класса "Светлая тема", то текст на кнопке "Dark" и наоборот*/
           
           
        
    }else{
    
            

    }
    console.log('Текущее имя класса темы:'+className);})