import { Request, Response } from "express";
import { UpdateTagService } from "./UpdateTagService";

export class UpdateTagController {
  private _updateTagService: UpdateTagService;
  constructor(updateTagService: UpdateTagService) {
    this._updateTagService = updateTagService;
  }

  async handle(request: Request, response: Response) {
    const data = this._updateTagService.execute(request.params.id, request.body);
    return response.status(200).json(data);
  }
}
