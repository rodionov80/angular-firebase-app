import { Injectable } from "@angular/core";
import { Message } from "../message";
import { MESSAGES } from "../mock-messages";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessages(): Message[] {
    return MESSAGES;
  }
}
