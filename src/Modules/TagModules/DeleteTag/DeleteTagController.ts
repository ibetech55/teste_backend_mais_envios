import { Request, Response } from "express";
import { DeleteTagService } from "./DeleteTagService";

export class DeleteTagController {
  private _deleteTagService: DeleteTagService;
  constructor(deleteTagService: DeleteTagService) {
    this._deleteTagService = deleteTagService;
  }

  async handle(request: Request, response: Response) {
    const data = this._deleteTagService.execute(request.params.id);
    return response.status(200).json(data);
  }
}
