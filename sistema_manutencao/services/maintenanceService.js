const conexao = require('../db');

async function createMaintenance(equipment_id, technician_id, service_id, start_date, end_date){
    const sql = "INSERT INTO manutencoes (equipamento_id, tecnico_id, servico_id, data_inicio, data_prevista_termino) VALUES (?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [equipment_id, technician_id, service_id, start_date, end_date]);
        return true;
    } catch (err) {
        return false;        
    }
}

async function showMaintenances(){
    const sql = "SELECT * FROM manutencoes";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function searchMaintenanceById(id){
    const sql = "SELECT * FROM manutencoes WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

async function updateMaintenance(id, equipment_id, technician_id, service_id, start_date, end_date){
    const sql = "UPDATE manutencoes SET equipamento_id = ?, tecnico_id = ?, servico_id = ?, data_inicio = ?, data_prevista_termino = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [equipment_id, technician_id, service_id, start_date, end_date, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deleteMaintenance(id){
    const sql = "DELETE FROM manutencoes WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    createMaintenance,
    showMaintenances,
    searchMaintenanceById,
    deleteMaintenance,
    updateMaintenance
}