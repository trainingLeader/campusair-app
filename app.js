import './Components/modales/modal-customer.js';
import './Components/listas/customer-lista.js';
import { MenuController } from  './Controllers/menu-controller.js';
const menu = new MenuController();
document.addEventListener('DOMContentLoaded',(e) =>{
    menu.initMenu();
})