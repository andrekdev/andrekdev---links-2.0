
const consoleElement = document.getElementById('console');
const eyesElement = document.querySelector('.eyes');

document.getElementById('background-music').volume = 0.2;
function writeLine(text) {
    return new Promise(resolve => {
        let index = 0;
        function typeLetter() {
            if (index < text.length) {
                consoleElement.innerHTML += text[index++];
                setTimeout(typeLetter, 10);
            } else {
                consoleElement.innerHTML += '\n';
                resolve();
            }
        }
        typeLetter();
    });
}

async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}


function recarregar() {
setTimeout(function() {
location.reload();
}, 2000);
}

async function runPrompt() {
    const userIP = await getUserIP();
    const userAgent = navigator.userAgent;

    await writeLine('[+] > fidelio: seja bem-vindo anão.');
    await writeLine(`[+] > IP: ${userIP}`);
    await writeLine('[+] > Digite as opções no campo abaixo.');
    await writeLine('[+] .github / .telegram / .tiktok / .instagram / .kill /');

    const input = document.createElement('input');
    input.classList.add('input-text');
    consoleElement.appendChild(input);

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const value = input.value.trim().toLowerCase();
            if (['.github', '.telegram', '.tiktok', '.instagram', '.kill'].includes(value)) {
                setTimeout(() => {
                    switch (value) {
                        case '.github':
                            window.open('https://github.com/fideliodev', '_blank');
                            break;
                        case '.telegram':
                            window.open('https://t.me/+7CF3gcRyPERmZmVh', '_blank');
                            break;
                        case '.tiktok':
                            window.open('https://www.tiktok.com/@_fidelio', '_blank');
                            break;
                        case '.instagram':
                            window.open('https://www.instagram.com/_fideliodev/', '_blank');
                            break;
                        case '.kill':
                        triggerFlood();
                            break;
                    }
                }, 1000);   
            } else {
                writeLine('[!] > Opção inválida, tente novamente.');
                
           
                recarregar()
            }
            input.value = ''; 
        }
    });

    input.focus(); 
}


function triggerFlood() {
    setTimeout(() => {
document.querySelector('.modal-entry').style.opacity = '0';
document.querySelector('.video-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0)';
}, 2000);
}

function click(){
document.body.addEventListener('click', function() {
document.querySelector('.video-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.959)';   
document.querySelector('.modal-entry').style.opacity = '1';
});

}

click()
runPrompt();

