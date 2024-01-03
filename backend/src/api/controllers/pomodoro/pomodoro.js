const Pomodoro = require("../../../utils/Pomodoro");

const fs = require("fs");
const path = require("path");

const settingsFile = path.join(__dirname, "settings.json");

const pomodoroController = {
    getSettings: (req, res) => {
        try {
            const settings = JSON.parse(fs.readFileSync(settingsFile, "utf8"));
            res.status(200).json(settings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    saveSettings: (req, res) => {
        try {
            const newSettings = req.body;
            fs.writeFileSync(settingsFile, JSON.stringify(newSettings, null, 2));
            res.status(200).json({ message: "Settings saved"});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    startPomodoro: (req, res) => {
        try {
            const settings = JSON.parse(fs.readFileSync(settingsFile, "utf8"));
            const pomodoro = new Pomodoro(settings);

            pomodoro.start();
            res.status(200).json({ message: "Pomodoro started" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = pomodoroController;

