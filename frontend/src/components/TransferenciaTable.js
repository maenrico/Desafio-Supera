import React, {Component} from 'react';
import TransferenciaService from '../service/TransferenciaService';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import css from './TransferenciaTable.css';

function teste() {
 
}

class TransferenciaTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transferencia: []
    }
    this.addTransferencia = this.addTransferencia.bind(this);
  }

  addTransferencia() {
    this.props.history.push('/add-transferencia');
  }
 

  componentDidMount() {
    TransferenciaService.getTransferencia().then((result) => {
      this.setState({transferencia: result.data});
    });
  }

  render() {
    return (
        <div className="container">
          <div className="row">

            <div className="col-sm-4">
              
              <Form className="form">

                <Form.Group>
                  <Form.Label> Data de início </Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
              </Form>
            </div>

            <div className="col-sm-4">
              <Form className="form">
                <Form.Group>
                  <Form.Label> Data de Fim </Form.Label>
                  <Form.Control type="email"/>
                </Form.Group>
              </Form>
            </div>

            <div className="col-sm-4">
              <Form className="form">
                <Form.Group>
                  <Form.Label> Nome operador transação </Form.Label>
                  <Form.Control type="email"/>
                </Form.Group>
              </Form>
            </div>

            <div className="btn-position">
              <Button onClick={teste()} className="btn" variant='outline-dark' type="submit">
                Pesquisar
              </Button>
            </div> 
          </div>

          <div>
            <div className="row">
              <table className="table table-striped table-bordered" >
                <thead>
                <tr>
                  <th> Data</th>
                  <th> Valor</th>
                  <th> Tipo</th>
                  <th> Nome operador transação</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.transferencia.map(
                      transferencia =>
                          <tr key={transferencia.id}>
                            <td> {transferencia.dataTransferencia}</td>
                            <td> {transferencia.valor}</td>
                            <td> {transferencia.tipo}</td>
                            <td> {transferencia.nomeOperadorTransacao}</td>
                          </tr>
                  )
                }
                </tbody>
              </table>
            </div>

          </div>
        </div>
    )
        
  }
}

export default TransferenciaTable;