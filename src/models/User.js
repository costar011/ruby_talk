import mongoose from "mongoose";

// 스키마 == 컬렉션 == 테이블 == 객체
// Schema == Scheme 둘 다 같은 말
const Schema = mongoose.Schema;

const User = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    statusMessage: {
      type: String,
      required: true,
    },
    frineds: [
      {
        ref: "User", // User를 참조
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", User, "User");
