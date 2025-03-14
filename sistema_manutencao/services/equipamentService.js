const conexao = require('../db');

async function createEquipament(name, description, serial_number){
    const sql = "INSERT INTO equipamentos (nome, descricao, numero_serie) VALUES (?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [name, description, serial_number]);
        return true;
    } catch (err) {
        return false;        
    }
}

async function showEquipaments(){
    const sql = "SELECT * FROM equipamentos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function searchEquipamentById(id){
    const sql = "SELECT * FROM equipamentos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

async function updateEquipament(id, name, description, serial_number){
    const sql = "UPDATE equipamentos SET nome = ?, descricao = ?, numero_serie = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [name, description, serial_number, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deleteEquipament(id){
    const sql = "DELETE FROM equipamentos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    createEquipament,
    showEquipaments,
    searchEquipamentById,
    deleteEquipament,
    updateEquipament
}