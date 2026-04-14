import { createTable, getAllTables, getTableById, getTableByNumber, updateAvilability } from "../models/tables.Model.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js"
export const createTableController = asyncHandler(async (req, res) => {
    const { table_number, capacity, floor } = req.body
    console.log(table_number, capacity, floor);

    try {
        if (!table_number || !capacity || !floor) {
            return res.status(400).json({ message: "please fill all required fileds!" })
        }
        console.log(1);

        if (floor < 0 || floor > 5) {
            return res.status(400).json({ message: "Floor must be second to fivth floor!" })
        }
        console.log(2);

        if (capacity < 0) {
            return res.status(400).json({ message: "Capacity must be valid number" })
        }
        console.log(3);

        if (capacity > 20) {
            return res.status(400).json({ message: "Table maximum capacity is 20 chair" })
        }
        console.log(4);

        const existedTable = await getTableByNumber(table_number)
        if (existedTable) {
            return res.status(400).json({ message: "The table number is already exist!" })
        }
        console.log(5);

        const newTable = await createTable(table_number, capacity, floor)
        return res.status(201).json({ message: "Table created seccussfully", table: newTable })
    } catch (err) {
        return res.status(500).json({ message: "Internal server errro in create new table" })
    }
})

export const getAllTablesController = asyncHandler(async (req, res) => {
    try {
        const tables = await getAllTables()
        if (tables.length === 0) {
            return res.status(200).json({ message: "No Tables Found", tables: [] })
        }
        return res.status(200).json({ message: "Fetshced susseccfully", tables })

    } catch (err) {
        return res.status(500).json({ message: "Internal server errro in create new table" })
    }
})
export const getTableByIdController = asyncHandler(async (req, res) => {
    const tableId = req.params.id
    try {
        const table = await getTableById(tableId)
        if (!table) {
            return res.status(404).json({ message: "No Table Found" })
        }
        return res.status(200).json({ message: "Fetshced susseccfully", table })

    } catch (err) {
        return res.status(500).json({ message: "Internal server errro in create new table" })
    }
})

export const changeAvailabilityController = asyncHandler(async (req, res) => {
    const tableId = req.params.id
    console.log(tableId);

    try {
        let newAvialability;
        const table = await getTableById(tableId)
        console.log("table", table);
        if (table.isavailable) {
            newAvialability = false
        }
        else {
            newAvialability = true
        }
        console.log(newAvialability);

        const updatedTable = await updateAvilability(tableId, newAvialability)
        console.log("updatedTable", updatedTable);
        if (updatedTable.length === 0) {
            return res.status(400).json({ message: "could not update  susseccfully" })
        }
        return res.status(200).json({ message: "updated susseccfully", table: updatedTable })
    } catch (err) {
        return res.status(500).json({ message: "Internal server errro in create new table" })
    }
})
