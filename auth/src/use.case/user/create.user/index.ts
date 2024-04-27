/**
 *
 */
import { CreateUserUseCase } from "./create.user.use.case";
import { CreateUserController } from "./create.user.controller";
import { userRepo } from "../../../repo";

const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserApi = new CreateUserController(createUserUseCase);
/**
 */
export {
  createUserUseCase,
  createUserApi,
  CreateUserUseCase,
  CreateUserController,
};
