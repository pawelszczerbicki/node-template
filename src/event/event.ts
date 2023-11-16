export enum EventType {
  USER_CREATED = "USER_CREATED",
  PAYMENT_MADE = "PAYMENT_MADE"
}

export interface AppEvent<T = any> {
  type: EventType
  body: T
}