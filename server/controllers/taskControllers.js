const Task = require("../models/task.js")

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(201).json(tasks);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const addTask = async (req, res) => {
    const { name, description, priority, status } = req.body
    try {
        if (!name || !description || !priority || !status) {
            return req.status(400).json({ success: false, message: "all filelds are required" })
        }

        const newTasks = new Task({ name, description, priority, status })
        await newTasks.save()
        return res.status(201).json({ success: true, message: "posted successfully" })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const updateTask = async (req, res) => {
    const { name, description, priority, status } = req.body;
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { name, description, priority, status, updatedAt: Date.now() },
        { new: true }
      );
      return res.status(200).json({success:false, message:"updated successfully", updatedTask});
    } catch (error) {
      res.status(500).json({ message: 'Failed to update task' });
    }
  };

  const deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete task' });
    }
  };

module.exports = { getTasks, addTask, updateTask, deleteTask }