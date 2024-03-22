const express = require('express');
const router = express.Router();
const { createEvent, getEvents, editEvent, deleteEvent, registerEvent } = require('../controllers/eventController');

// Create a new event
router.post('/', createEvent);

// Get all events
router.get('/', getEvents);

// Edit an event
router.put('/:id', editEvent);

// Delete an event
router.delete('/:id', deleteEvent);

// Register for an event
router.post('/:id/register', registerEvent);

module.exports = router;
