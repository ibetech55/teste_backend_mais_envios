import { Request, Response } from "express";
import { GetTagsService } from "./GetTagsService";

export class GetTagsController {
  private _getTagsService: GetTagsService;
  constructor(getTagsService: GetTagsService) {
    this._getTagsService = getTagsService;
  }

  async handle(request: Request, response: Response) {
    const data = this._getTagsService.execute(request.params.tag);
    return response.status(200).json(data);
  }
}
