import { ConsumeMessage } from "amqplib";
import { CREATE_TAGS_LIST } from "./QueueTypes";
import { createTagsService } from "../Modules/TagModules/CreateTags";

const QUEUE_METADATA = [
  {
    name: CREATE_TAGS_LIST,
    handler: (msg: ConsumeMessage) => createTagsService.execute(msg),
  },
];

export { QUEUE_METADATA };
