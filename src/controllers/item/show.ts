import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Item } from 'typeorm/entities/item/item';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const itemRepository = getRepository(Item);
  try {
    const item = await itemRepository.findOne(id);

    if (!item) {
      const customError = new CustomError(404, 'General', `Item with id:${id} not found.`, ['Item not found.']);
      
      return next(customError);
    }

    res.customSuccess(200, 'Item found', item);
  } catch (err) {

    const customError = new CustomError(400, 'Raw', 'Error', null, err);

    return next(customError);
  }
};
