const express = require('express');
const router = express.Router();
const pomodoroController = require('../api/controllers/pomodoro/pomodoro');

router.get('/', pomodoroController.getSettings);
router.post('/', pomodoroController.saveSettings);
router.post('/start', pomodoroController.startPomodoro);

module.exports = router;