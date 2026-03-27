const Event = require('../models/Event');

// @desc    Get all events
// @route   GET /api/events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create new event
// @route   POST /api/events
const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, organizer } = req.body;
    const event = await Event.create({ title, description, date, location, organizer });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getEvents, createEvent };