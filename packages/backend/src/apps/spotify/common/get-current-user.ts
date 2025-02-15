import { IGlobalVariable, IJSONObject } from '@automatisch/types';

const getCurrentUser = async ($: IGlobalVariable): Promise<IJSONObject> => {
  const response = await $.http.get('/v1/me');
  const currentUser = response.data;

  return currentUser;
};

export default getCurrentUser;
