import React from "react";
import TransferenciaService from '../service/TransferenciaService';
const {Component} = require("react");


class ListTransferenciaComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            transferencia : []
        }
    }

    componentDidMount(){ 
        TransferenciaService.getTransferencia().then((res)=>
        {
            this.setState({transferencia : res.data})
        }
        
        );
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Transferencia List</h2>
                <div className="row"></div>
                <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th>dataTransferencia </th>
                        <th>Valor </th>
                        <th>Tipo</th>
                        <th>Nome operador transação</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        this.state.transferencia.map(
                            transferencia =>
                            <tr key={transferencia.id}>
                            <td>{transferencia.dataTransferencia}</td>
                            <td>{transferencia.valor}</td>
                            <td>{transferencia.tipo}</td>
                            <td>{transferencia.nomeOperadorTransacao}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>


            </div>
        );
    }
}
 
export default ListTransferenciaComponent;