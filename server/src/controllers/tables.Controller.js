import { createTable, getTableByNumber } from "../models/tables.Model.js";


export const createTableController = async (req, res) => {
    const { table_number, capacity, floor } = req.body
    try {
        if (!table_number || !capacity || !floor) {
            return res.status(400).json({ message: "please fill all required fileds!" })
        }
        if (floor < 0 || floor > 5) {
            return res.status(400).json({ message: "Floor must be second to fivth floor!" })
        }
        if (capacity < 0) {
            return res.status(400).json({ message: "Capacity must be valid number" })
        }
        if (capacity > 20) {
            return res.status(400).json({ message: "Table maximum capacity is 20 chair" })
        }
        const existedTable = await getTableByNumber(table_number)
        if (existedTable) {
            return res.status(400).json({ message: "The table number is already exist!" })
        }
        const newTable = await createTable(table_number, capacity, floor)
        return res.status(201).json({ message: "Table created seccussfully", table: newTable })
    } catch (err) {
        return res.status(500).json({ message: "Internal server errro in create new table" })
    }
}

