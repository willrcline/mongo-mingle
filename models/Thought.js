const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dataFormat(createdAtVal)
    }
  }
)

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dataFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },  
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
