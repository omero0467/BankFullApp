import {model} from "mongoose";
import {accountSchema} from "./account.schema.js";

const Account = model("Account", accountSchema);

export {Account}