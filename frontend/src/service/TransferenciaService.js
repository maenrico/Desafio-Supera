import axios from "axios";

const TRANSFERENCIA_API_BASE_URL = "http://localhost:8080/transferencia"

class TransferenciaService{
    
    getTransferencia(){
        return axios.get(TRANSFERENCIA_API_BASE_URL)
    }
}
export default new TransferenciaService();