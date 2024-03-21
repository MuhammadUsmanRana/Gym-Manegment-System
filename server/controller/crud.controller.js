const classUserScheme = require("../Module/crud.Model")
const { errorHandler } = require("../utils/error");

const create = async (req, res, next) => {
    try {
        const { className, staffName, startingTime, endingTime, location, bookingFee } = req.body;
        if (!className || !staffName || !startingTime || !endingTime || !location || !bookingFee) {
            return next(errorHandler(400, "All field are required"))
        }
        const newData = new classUserScheme({
            className,
            staffName,
            startingTime,
            endingTime,
            location,
            bookingFee,
        })
        const AddData = await newData.save();
        res.json({ success: true, message: "Sign Up Successful", data: AddData });
    } catch (error) {
        console.log(error)
    }
}

const get = async (req, res, next) => {
    try {
        let gatData = await classUserScheme.find();
        if (!gatData) {
            return next(errorHandler(400, "Data not found"))
        }
        return res.status(200).json({ data: gatData, success: true })
    } catch (error) {
        console.log(error)
    }
}

const deletes = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteData = await classUserScheme.findByIdAndDelete(id);
        if (!deleteData) {
            return next(errorHandler(400, "user id not found"))
        }
        return res.status(200).json({ data: deleteData, success: true, });
    } catch (error) {
        console.log(error)
    }
}

const update = async (req, res, next) => {
    try {
        const dataId = req.params.id;
        const updatedData = req.body;
        const result = await classUserScheme.findByIdAndUpdate(dataId, updatedData, { new: true })
        if (!result) {
            next(errorHandler(400), "update data not found")
        }
        return res.status(200).json({ data: result, success: true })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { create, get, update, deletes };