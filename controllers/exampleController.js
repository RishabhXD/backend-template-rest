const Example = require("../models/exampleModel");

exports.getController = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Get Request",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.patchController = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Patch Request",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.postController = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Post Request",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteController = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Delete Request",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
