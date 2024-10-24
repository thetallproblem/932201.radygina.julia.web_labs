function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function create_fig(fig, id_num) {
    num = document.getElementById(id_num).value; 
    space = document.getElementById('space');

    //Если введено число большее максимума, сводим его к макс.числу
    if (num > 10)
        num = 10;

    for(let i = 0; i < num; i++)
    {
        let figure = document.createElement('div');

        if (fig == 'square')
        {
            figure.className = 'square';
            figure.style.background = 'red';
            figure.style.border = 'thin solid black';
            width = getRandomInt(50, 200);
            figure.style.width = width+'px';
            figure.style.height = width+'px';
        }
        else if (fig == 'triangle')
        {
            width = getRandomInt(50, 200);
            figure.style.width = width+'px';
            figure.style.height = width+'px';
            figure.style.clipPath = 'polygon(50% 50%, 0% 100%, 100% 100%)';
            figure.style.background = 'blue';
            figure.style.overflow = 'hidden';
        }
        else if (fig == 'circle')
        {
            figure.className = 'circle';
            figure.style.background = 'green';
            figure.style.border = 'thin solid black';
            width = getRandomInt(50, 200);
            figure.style.width = width+'px';
            figure.style.height = width+'px';
        }
        
        figure.style.left = getRandomInt(0, 800)+'px';
        figure.style.top = (50+getRandomInt(0, 500))+'px';
        figure.style.opacity = '80%';
        figure.style.position = 'absolute';

        figure.addEventListener('mouseover', () => {
            figure.style.background = 'yellow';
        });
        figure.addEventListener('mouseout', () => {
            if (fig == 'triangle')
                figure.style.background = 'blue';
            else 
                figure.style.background = '';
        });

        space.appendChild(figure);

        figure.addEventListener('dblclick', () => {
            space.removeChild(figure);
        });
    }
}