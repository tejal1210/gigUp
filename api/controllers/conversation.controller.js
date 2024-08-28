import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Conversation from "../models/conversation.model.js";

const createConversation = asyncHandler(async (req, res) => {
    const newConversation = new Conversation({
      id: req.user.isSeller ? req.user._id + req.body.to : req.body.to + req.user._id,
      sellerId: req.user.isSeller ? req.user._id : req.body.to,
      buyerId: req.user.isSeller ? req.body.to : req.user._id,
      readBySeller: req.user.isSeller,
      readByBuyer: !req.user.isSeller,
    });
  
    const savedConversation = await newConversation.save();
  
    if (!savedConversation) {
     throw new ApiError(500, "Failed to save new conversation");
    }
    console.log((savedConversation))
    res.status(201).json(new ApiResponse(201, savedConversation, "Conversation created successfully"));
  });

  const updateConversation = asyncHandler(async (req, res) => {
    const updateFields = req.user.isSeller ? { readBySeller: true } : { readByBuyer: true };
  
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      { $set: updateFields },
      { new: true }
    );
  
    if (!updatedConversation) {
      throw new ApiError(404, "Conversation Updation failed");
    }
  
    res.status(200).json(new ApiResponse(200, updatedConversation, "Conversation updated successfully"));
  });

const getSingleConversation = async (req, res, next) => {
  
    const conversation = await Conversation.findOne({ id: req.params.id });
    console.log(conversation)
    // if (!conversation) 
    //     throw new ApiError(404, "Conversation not found");

    res.status(200).json(new ApiResponse(201, conversation, "Conversation Found"));
  
};

const getConversations = asyncHandler(async (req, res) => {
    const conversations = await Conversation.find(
      req.user.isSeller ? { sellerId: req.user._id } : { buyerId: req.user._id }
    ).sort({ updatedAt: -1 });

    if (!conversations) 
        throw new ApiError(404, "Conversations not found");

    res.status(200).json(new ApiResponse(201, conversations, "Conversations Found"));
  
});

export {
    getConversations,
    getSingleConversation,
    updateConversation,
    createConversation
};