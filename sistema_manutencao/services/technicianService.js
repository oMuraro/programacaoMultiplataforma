const conexao = require('../db');

async function createTechnician(name, contact){
    const sql = "INSERT INTO tecnicos (nome, contato) VALUES (?, ?)";
    try {
        const [res] = await conexao.query(sql, [name, contact]);
        return true;
    } catch (err) {
        return false;        
    }
}

async function showTechnicians(){
    const sql = "SELECT * FROM tecnicos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function searchTechnicianById(id){
    const sql = "SELECT * FROM tecnicos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

async function updateTechnician(id, name, contact){
    const sql = "UPDATE tecnicos SET nome = ?, contato = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [name, contact, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deleteTechnician(id){
    const sql = "DELETE FROM tecnicos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    createTechnician,
    showTechnicians,
    searchTechnicianById,
    deleteTechnician,
    updateTechnician
}