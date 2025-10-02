require('dotenv').config();

/*




Feature('login');
Scenario('test something',  ({ I }) => {
    I.amOnPage("/")
    I.fillField('[aria-label="Buscar"]', "HOLA MUNDO");
    I.wait(3);
    I.pressKey("Enter");
    I.wait(5);
});




Feature('Buscar videos en YouTube');
Scenario('Buscar un tutorial de Playwright', async ({ I }) => {
  I.amOnPage('https://www.youtube.com');
  I.waitForElement('input[name="search_query"]', 10);
  I.fillField('input[name="search_query"]', 'Playwright tutorial');
  
  I.pressKey('Enter');
  
  I.waitForElement('ytd-video-renderer', 10);
  I.see('Playwright', 'ytd-video-renderer');
});
Feature('Reproducir un video en YouTube');
Scenario('Reproducir un tutorial de CodeceptJS', async ({ I }) => {
  I.amOnPage('https://www.youtube.com/results?search_query=codeceptjs+tutorial');  
  I.waitForElement('ytd-video-renderer', 15);
  I.click('ytd-video-renderer:nth-of-type(1)');
  I.wait(5);
  I.seeElement('.html5-video-player'); 
  I.wait(5);
});
*/




Feature('Login en GitHub y abrir repositorio');
Scenario('Iniciar sesión y buscar el repositorio "features"', ({ I }) => {
  I.amOnPage('https://github.com/login');
  I.fillField('#login_field', process.env.GITHUB_EMAIL);
  I.fillField('#password', process.env.GITHUB_PASSWORD);
  I.click('input[name="commit"]');
  I.waitForFunction(() => window.location.href.includes('github.com'), 30);
  I.seeInCurrentUrl('github.com');
  I.waitForElement('input[placeholder="Find a repository…"]', 15);
  I.fillField('input[placeholder="Find a repository…"]', 'features');
  I.pressKey('Enter');
  I.say('Ya se escribió "features" en el buscador, prueba finalizada.');
});