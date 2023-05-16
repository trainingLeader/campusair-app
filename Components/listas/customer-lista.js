import { getDataAll } from "../../Apis/customer-api.js";
export class CustomerLista extends HTMLElement {
    constructor(){
        super();
        this.render();
        this.requestApiGetCliente();
        
        
    }
    render(){
        this.innerHTML = /* html */ `
        <h1>Lista Clientes Campus Airlines</h1>
        <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nro Documento</th>    
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody id="lista-clientes">

                </tbody>
        </table>

        `
    }
    requestApiGetCliente = () =>{
        getDataAll()
            .then((result)=>{
                this.renderClientes(result);
            })
    }
    renderClientes = (clientes)=>{
        let clientesHTML = '';
        for(let cliente of clientes){
            clientesHTML += this.crearListaClientesHTML(cliente);
        }
        document.getElementById('lista-clientes').innerHTML = clientesHTML;
        //this.callModal();
        //this.putData();
        this.deleteCustomer();
    }
    crearListaClientesHTML = (clientes)=>{
        let listaHTML = /* html */ `
        <tr>
            <td>${clientes.id}</td>
            <td>${clientes.cc}</td>
            <td>${clientes.nombres}</td>
            <td>${clientes.apellidos}</td>
            <td>${clientes.email}</td>
            <td>
                    <a class="btn btn-success " data-bs-toggle="modal" data-bs-target="#putCliente" id="putData" data-idcli='${clientes.id}'><i class='bx bx-edit-alt icono' data-idcli='${clientes.id}'></i></a>
                    <a class="btn btn-danger" data-idclidel='${clientes.id}'><i  class='borrar bx bx-message-alt-x icono' data-idclidel='${clientes.id}'></i></a>
            </td>
            </tr>
        `;

        return listaHTML;
    }
    deleteCustomer = ()=>{
        document.querySelectorAll(".borrar").forEach((val,id)=>{
            val.addEventListener("click",(e)=>{
                const idCliente = e.target.dataset.idclidel;
                console.log(idCliente);
                console.log("convencional commit");
            })
        })


    }
}
customElements.define('customer-lista',CustomerLista);