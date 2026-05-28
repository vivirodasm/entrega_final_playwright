export class RegistroPage {  //este es el archivo POM
  constructor(page) {
    this.page = page;

    //estos son los lacator de los elementos de la pagina
    this.nombreInput = page.locator('#nombre');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.registrarButton = page.locator('#btn-registrar');
    this.statusBox = page.locator('#status-box');
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
  }

  async registrarUsuario(nombre, email, password) {
    await this.nombreInput.fill(nombre);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registrarButton.click();
  }
}