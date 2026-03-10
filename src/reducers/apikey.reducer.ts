import { ApiKeyResponse } from '@/models/mappers';
import { PrismaApiKey } from '@prisma/client';

import { accessEndDateReducer } from './access.reducer';

export const apiKeyReducer = (model: PrismaApiKey): ApiKeyResponse => {
  return {
    key: model.key,
    description: model.description ?? '',
    access: accessEndDateReducer([]),
    creator: {
      username: model.refCreator,
    },
  };
};
