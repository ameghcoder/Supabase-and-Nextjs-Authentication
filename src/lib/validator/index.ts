import { schema } from "./schema";

// Re-export individual field validators
export const emailValidator = schema.shape.email;
export const passwordValidator = schema.shape.password;
export const usernameValidator = schema.shape.username;
export const fullNameValidator = schema.shape.fullName;
export const stringValidator = schema.shape.string;
export const mobileValidator = schema.shape.mobile;
export const urlValidator = schema.shape.url;
export const uuidValidator = schema.shape.uuid;
