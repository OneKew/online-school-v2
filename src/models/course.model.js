import mongoose from 'mongoose';

const { Schema } = mongoose;

export const courseSchema = new Schema({
  _id: Schema.Types.ObjectId,

  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },

  name: { type: String, required: true },

  tag: { type: String, required: true, unique: true },

  modules: [{
    type: Schema.Types.ObjectId,
    ref: 'Module'
  }],

});

export const Course = mongoose.model('Course', courseSchema);
