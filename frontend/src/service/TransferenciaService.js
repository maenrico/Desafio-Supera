import axios from 'axios';

const TRANSFERENCIA_BASE_URL = "http://localhost:8080/transferencia";

class TransacaoService {

  getTransferencia() {
    return axios.get(TRANSFERENCIA_BASE_URL);
  }

  PostTransferencia(transferencia) {
    return axios.post(TRANSFERENCIA_BASE_URL, transferencia);
  }
}

export default  new TransacaoService()