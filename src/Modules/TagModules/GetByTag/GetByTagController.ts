import { Request, Response } from "express";
import { GetByTagService } from "./GetByTagService";

export class GetByTagController {
  private _getByTagService: GetByTagService;
  constructor(getByTagService: GetByTagService) {
    this._getByTagService = getByTagService;
  }

  async handle(request: Request, response: Response) {
    const data = this._getByTagService.execute(request.params.tag);
    return response.status(200).json(data);
  }
}
