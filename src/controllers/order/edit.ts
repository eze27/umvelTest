import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Item } from 'typeorm/entities/item/item';

import { CustomError } from 'utils/response/custom-error/CustomError';

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { name, price } = req.body;

  const itemRepository = getRepository(Item);
  try {
    const item = await itemRepository.findOne({ where: { id } });

    if (!item) {
      const customError = new CustomError(404, 'General', `Item with id:${id} not found.`, ['Item not found.']);
      return next(customError);
    }

    item.name  = name;
    item.price = price;
    //** Este try se podria omitir, y devolver directo un customError, y poder utilzar siempore un try catch */
    try {
      await itemRepository.save(item);

      res.customSuccess(200, 'Item successfully saved.');

    } catch (err) {

      const customError = new CustomError(409, 'Raw', `Item '${item.name}' can't be saved.`, null, err);
      return next(customError);
    }
  } catch (err) {

    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
