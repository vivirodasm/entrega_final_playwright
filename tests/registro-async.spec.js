import { test, expect } from '@playwright/test';
import { RegistroPage } from '../pages/RegistroPage';

test('registro de usuario con espera dinamica', async ({ page }) => {
  const registroPage = new RegistroPage(page);

  await registroPage.goto();

  await registroPage.registrarUsuario(
    'Viviana Rodas',
    'viviana.rodas@test.com',
    'Password123'
  );
//este es el tiempo de espera dinamico espera hasta 10 segundos
  await expect(registroPage.statusBox).toHaveText(
    'Estado: Usuario Creado Exitosamente',
    { timeout: 10000 }
  );
});