import { Request, Response } from "express";
import { GetTagByIdService } from "./GetTagByIdService";

export class GetTagByIdController {
  private _getByIdService: GetTagByIdService;
  constructor(getByIdService: GetTagByIdService) {
    this._getByIdService = getByIdService;
  }

  async handle(request: Request, response: Response) {
    const data = this._getByIdService.execute(request.params.id);
    return response.status(200).json(data);
  }
}
