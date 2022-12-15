import {model} from "mongoose";
import {userSchema} from "./user.schema.js";

const User = model("User", userSchema);

export {User}