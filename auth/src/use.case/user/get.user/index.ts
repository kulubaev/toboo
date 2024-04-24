/***
 *
 *
 */
import { GetUserUseCase } from "./get.user.use.case";
import { GetUserController } from "./get.user.controller";
import { userRepo } from "../../../repo";

const getUserUseCase = new GetUserUseCase(userRepo);
const getUserApi = new GetUserController(getUserUseCase);

export { getUserApi, getUserUseCase, GetUserController, GetUserUseCase };
